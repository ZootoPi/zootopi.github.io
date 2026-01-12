import path from "node:path";
import type { Metadata } from "next";
import Head from "next/head";
import { notFound } from "next/navigation";
import Script from "next/script";
import DirectoryListing from "@/components/directory-listing";
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
      <div className="h-full pt-24">
        <Head>
          <Script src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" />
        </Head>
        <div className="mx-auto max-w-4xl px-4 py-12 max-sm:px-2">
          <article className="prose prose-lg mx-auto max-w-none">
            <MDXContent />
          </article>
        </div>
      </div>
    );
  }

  // If not a file, check if it's a directory
  if (isDirectory(slug)) {
    const directoryContents = await getDirectoryContents(slug);

    if (directoryContents) {
      return (
        <div className="h-full pt-24">
          <DirectoryListing contents={directoryContents} slug={slug} />
        </div>
      );
    }
  }

  // If neither file nor directory, show 404
  notFound();
}
