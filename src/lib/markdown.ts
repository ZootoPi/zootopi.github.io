import fs from "node:fs";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { compile, run } from "@mdx-js/mdx";
import matter from "gray-matter";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const CONTENTS_DIR = path.join(process.cwd(), "src/contents");
const MD_FILE_REGEX = /\.(md|mdx)$/;

export interface MarkdownFile {
  slug: string[];
  content: string;
  frontmatter: Record<string, unknown>;
  filePath: string;
}

export interface MarkdownMetadata {
  title?: string;
  description?: string;
  [key: string]: unknown;
}

/**
 * Get the file path from a slug array, trying both .md and .mdx extensions
 * Returns the path if file exists, null otherwise
 */
async function getFilePathFromSlug(slug: string[]): Promise<string | null> {
  const fileName = slug.at(-1);
  if (!fileName) {
    throw new Error("Slug cannot be empty");
  }
  const dirPath = slug.slice(0, -1);

  // Try .md first, then .mdx
  const extensions = [".md", ".mdx"];
  for (const ext of extensions) {
    const filePath = path.join(CONTENTS_DIR, ...dirPath, `${fileName}${ext}`);
    try {
      await access(filePath);
      return filePath;
    } catch {
      // Continue to next extension
    }
  }

  return null;
}

/**
 * Get the file path from a slug array synchronously (for directory checks)
 * Returns the path if file exists, null otherwise
 */
function getFilePathFromSlugSync(slug: string[]): string | null {
  const fileName = slug.at(-1);
  if (!fileName) {
    throw new Error("Slug cannot be empty");
  }
  const dirPath = slug.slice(0, -1);

  // Try .md first, then .mdx
  const extensions = [".md", ".mdx"];
  for (const ext of extensions) {
    const filePath = path.join(CONTENTS_DIR, ...dirPath, `${fileName}${ext}`);
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  return null;
}

/**
 * Read and parse a markdown file from a slug
 */
export async function getMarkdownFile(
  slug: string[]
): Promise<MarkdownFile | null> {
  try {
    const filePath = await getFilePathFromSlug(slug);

    if (!filePath) {
      return null;
    }

    const fileContents = await readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      frontmatter: data as Record<string, unknown>,
      filePath,
    };
  } catch (error) {
    console.error(
      `Error reading markdown file for slug ${slug.join("/")}:`,
      error
    );
    return null;
  }
}

/**
 * Get metadata from a markdown file
 */
export async function getMarkdownMetadata(
  slug: string[]
): Promise<MarkdownMetadata | null> {
  const file = await getMarkdownFile(slug);
  if (!file) {
    return null;
  }

  return file.frontmatter as MarkdownMetadata;
}

/**
 * Preprocess markdown content to handle HTML comments and other MDX-incompatible syntax
 */
function preprocessMarkdown(content: string): string {
  // Convert HTML comments to JSX comments
  // <!-- comment --> -> {/* comment */}
  return content.replace(/<!--([\s\S]*?)-->/g, (_match, comment) => {
    // Skip if it's in frontmatter (gray-matter handles that)
    return `{/*${comment}*/}`;
  });
}

/**
 * Compile markdown content to MDX and return as React component
 */
export async function compileMDX(
  content: string
): Promise<React.ComponentType> {
  // Preprocess content to handle HTML comments
  const processedContent = preprocessMarkdown(content);

  const compiled = await compile(processedContent, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            light: "github-light",
            dark: "github-dark",
          },
          keepBackground: false,
        },
      ],
      rehypeKatex,
    ],
  });

  // Evaluate the compiled MDX
  const { default: MDXContent } = await run(compiled, {
    Fragment,
    jsx,
    jsxs,
  });

  return MDXContent as React.ComponentType;
}

/**
 * Recursively get all markdown files in contents directory (.md and .mdx)
 */
export function getAllMarkdownFiles(): string[][] {
  const slugs: string[][] = [];

  function traverseDir(dir: string, currentSlug: string[] = []): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      // Skip hidden files and directories
      if (entry.name.startsWith(".")) {
        continue;
      }

      // Skip image directories
      if (entry.name === "img" || entry.name === "imgs") {
        continue;
      }

      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        traverseDir(fullPath, [...currentSlug, entry.name]);
      } else if (entry.isFile() && MD_FILE_REGEX.test(entry.name)) {
        // Remove .md or .mdx extension
        const fileName = entry.name.replace(MD_FILE_REGEX, "");
        slugs.push([...currentSlug, fileName]);
      }
    }
  }

  traverseDir(CONTENTS_DIR);
  return slugs;
}

/**
 * Check if a slug points to a directory (not a file)
 */
export function isDirectory(slug: string[]): boolean {
  // If slug is empty, it's the root contents directory
  if (slug.length === 0) {
    return true;
  }

  // Check if it's a file first
  const filePath = getFilePathFromSlugSync(slug);
  if (filePath) {
    return false;
  }

  // Check if it's a directory
  const dirPath = path.join(CONTENTS_DIR, ...slug);
  try {
    const stat = fs.statSync(dirPath);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

/**
 * Get category metadata from _category_.json file if it exists
 */
export async function getCategoryMetadata(slug: string[]): Promise<{
  label: string;
  title?: string;
  description?: string;
} | null> {
  const categoryFilePath = path.join(CONTENTS_DIR, ...slug, "_category_.json");

  try {
    await access(categoryFilePath);
    const fileContents = await readFile(categoryFilePath, "utf8");
    const metadata = JSON.parse(fileContents);

    return {
      label: metadata.label || slug.at(-1) || "",
      title: metadata.link?.title || metadata.title,
      description: metadata.description,
    };
  } catch {
    return null;
  }
}

/**
 * Get directory contents (posts and subdirectories) for a given slug
 */
export interface DirectoryContents {
  categoryMetadata?: {
    label: string;
    title?: string;
    description?: string;
  };
  posts: Array<{
    slug: string[];
    title: string;
    description?: string;
    date?: string;
  }>;
  subdirectories: Array<{
    slug: string[];
    name: string;
    label?: string;
    hasCategoryMetadata: boolean;
  }>;
}

/**
 * Process a directory entry and add it to posts or subdirectories
 */
async function processDirectoryEntry(
  entry: fs.Dirent,
  dirPath: string,
  slug: string[],
  posts: DirectoryContents["posts"],
  subdirectories: DirectoryContents["subdirectories"]
): Promise<void> {
  // Skip hidden files and directories
  if (entry.name.startsWith(".")) {
    return;
  }

  // Skip image directories
  if (
    entry.name === "img" ||
    entry.name === "imgs" ||
    entry.name === "visualization"
  ) {
    return;
  }

  // Skip _category_.json
  if (entry.name === "_category_.json") {
    return;
  }

  const fullPath = path.join(dirPath, entry.name);

  if (entry.isDirectory()) {
    // Check if subdirectory has category metadata
    const subCategoryPath = path.join(fullPath, "_category_.json");
    const hasCategoryMetadata = fs.existsSync(subCategoryPath);

    // Get category metadata if it exists
    let label: string | undefined;
    if (hasCategoryMetadata) {
      const subCategoryMetadata = await getCategoryMetadata([
        ...slug,
        entry.name,
      ]);
      label = subCategoryMetadata?.label;
    }

    subdirectories.push({
      slug: [...slug, entry.name],
      name: entry.name,
      label,
      hasCategoryMetadata,
    });
  } else if (entry.isFile() && MD_FILE_REGEX.test(entry.name)) {
    // Remove extension
    const fileName = entry.name.replace(MD_FILE_REGEX, "");
    const fileSlug = [...slug, fileName];

    // Try to get metadata from the file
    try {
      const file = await getMarkdownFile(fileSlug);
      if (file) {
        const frontmatter = file.frontmatter as {
          title?: string;
          description?: string;
          date?: string;
        };

        posts.push({
          slug: fileSlug,
          title: frontmatter.title || fileName,
          description: frontmatter.description,
          date: frontmatter.date,
        });
      }
    } catch {
      // If we can't read the file, just add it with the filename as title
      posts.push({
        slug: fileSlug,
        title: fileName,
      });
    }
  }
}

export async function getDirectoryContents(
  slug: string[]
): Promise<DirectoryContents | null> {
  const dirPath = path.join(CONTENTS_DIR, ...slug);

  try {
    const stat = fs.statSync(dirPath);
    if (!stat.isDirectory()) {
      return null;
    }
  } catch {
    return null;
  }

  // Get category metadata
  const categoryMetadata = await getCategoryMetadata(slug);

  const posts: DirectoryContents["posts"] = [];
  const subdirectories: DirectoryContents["subdirectories"] = [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    await processDirectoryEntry(entry, dirPath, slug, posts, subdirectories);
  }

  return {
    categoryMetadata: categoryMetadata || undefined,
    posts,
    subdirectories,
  };
}

/**
 * Get all directories in contents directory for static generation
 */
export function getAllDirectories(): string[][] {
  const directories: string[][] = [];

  function traverseDir(dir: string, currentSlug: string[] = []): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    // Add current directory if it's not the root
    if (currentSlug.length > 0) {
      directories.push([...currentSlug]);
    }

    for (const entry of entries) {
      // Skip hidden files and directories
      if (entry.name.startsWith(".")) {
        continue;
      }

      // Skip image directories
      if (entry.name === "img" || entry.name === "imgs") {
        continue;
      }

      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        traverseDir(fullPath, [...currentSlug, entry.name]);
      }
    }
  }

  traverseDir(CONTENTS_DIR);
  return directories;
}
