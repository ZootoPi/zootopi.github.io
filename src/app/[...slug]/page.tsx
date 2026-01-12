import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DirectoryListing from "@/components/directory-listing";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  compileMDX,
  getAllDirectories,
  getAllMarkdownFiles,
  getDirectoryContents,
  getMarkdownFile,
  isDirectory,
} from "@/lib/markdown";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

/**
 * Generate static params for all markdown files and directories
 */
export async function generateStaticParams() {
  const fileSlugs = getAllMarkdownFiles();
  const directorySlugs = getAllDirectories();

  // Combine both files and directories
  const allSlugs = [...fileSlugs, ...directorySlugs];

  // For catch-all route [...slug], slug must be an array
  return allSlugs.map((slugArray) => ({
    slug: slugArray,
  }));
}

/**
 * Generate metadata from frontmatter or directory metadata
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Try to get file first
  const file = await getMarkdownFile(slug);
  if (file) {
    const frontmatter = file.frontmatter as {
      title?: string;
      description?: string;
    };

    return {
      title: frontmatter.title || "Content",
      description: frontmatter.description,
    };
  }

  // If not a file, try to get directory contents
  const directoryContents = await getDirectoryContents(slug);
  if (directoryContents) {
    const title =
      directoryContents.categoryMetadata?.title ||
      directoryContents.categoryMetadata?.label ||
      slug.at(-1) ||
      "Directory";

    return {
      title,
      description: directoryContents.categoryMetadata?.description,
    };
  }

  return {
    title: "Not Found",
  };
}

const IMAGE_PATH_REGEX = /!\[([^\]]*)\]\(([^)]+)\)/g;
const LEADING_DOT_SLASH_REGEX = /^\.\//;

/**
 * Process image paths in markdown content
 * Convert relative paths to absolute paths that work with Next.js
 */
function processImagePaths(content: string, filePath: string): string {
  // Get the directory of the markdown file
  const fileDir = path.dirname(filePath);
  const contentsDir = path.join(process.cwd(), "src/contents");
  const relativeDir = path.relative(contentsDir, fileDir);

  // Replace relative image paths like ![alt](img/image.png) or ![alt](./img/image.png)
  // with paths that point to the contents folder structure
  return content.replace(IMAGE_PATH_REGEX, (match, alt, imgPath) => {
    // Skip if it's already an absolute URL
    if (imgPath.startsWith("http://") || imgPath.startsWith("https://")) {
      return match;
    }

    // Remove leading ./ if present
    const cleanPath = imgPath.replace(LEADING_DOT_SLASH_REGEX, "");

    // Build the path relative to contents
    const imagePath = path.join(relativeDir, cleanPath).replace(/\\/g, "/");

    // For static export, we need to serve from public or handle differently
    // For now, we'll use a path that can be processed
    // In a real implementation, you might want to copy images to public at build time
    return `![${alt}](/contents/${imagePath})`;
  });
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;

  // Try to get file first (checks both .md and .mdx)
  const file = await getMarkdownFile(slug);

  if (file) {
    // Process image paths in content
    const processedContent = processImagePaths(file.content, file.filePath);

    // Compile MDX content
    const MDXContent = await compileMDX(processedContent);

    return (
      <div className="min-h-screen bg-linear-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
        <Header />
        <div className="mx-auto max-w-4xl px-4 py-24">
          <article className="prose prose-lg prose-zinc dark:prose-invert mx-auto max-w-none prose-img:rounded-xl prose-pre:bg-zinc-900 prose-headings:font-bold prose-a:text-[#4776BA] prose-code:text-[#EE4723] prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-strong:text-zinc-900 prose-a:no-underline prose-img:shadow-lg hover:prose-a:underline dark:prose-pre:bg-zinc-950 dark:prose-a:text-[#4776BA] dark:prose-code:text-[#EE4723] dark:prose-headings:text-zinc-100 dark:prose-p:text-zinc-300 dark:prose-strong:text-zinc-100">
            <MDXContent />
          </article>
          <div className="mt-12 border-zinc-200 border-t pt-8 dark:border-zinc-800">
            <a
              className="inline-flex cursor-pointer items-center gap-2 font-medium text-sm text-zinc-600 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              href="/blog"
            >
              ← Back to blog
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // If not a file, check if it's a directory
  if (isDirectory(slug)) {
    const directoryContents = await getDirectoryContents(slug);

    if (directoryContents) {
      return (
        <div className="min-h-screen bg-linear-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
          <Header />
          <div className="pt-24">
            <DirectoryListing contents={directoryContents} slug={slug} />
          </div>
          <Footer />
        </div>
      );
    }
  }

  // If neither file nor directory, show 404
  notFound();
}
