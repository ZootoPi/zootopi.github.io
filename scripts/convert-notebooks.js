import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const contentsDir = path.join(rootDir, "src/contents");

const BASE64_IMAGE_REGEX = /^data:image\/\w+;base64,/;
const H1_REGEX = /^#\s+(.+)$/;
const IPYNB_REGEX = /\.ipynb$/;
// Regex to match \begin{equation*}...\end{equation*} and \begin{equation}...\end{equation} blocks
const EQUATION_REGEX =
  /\\begin\{equation\*?\}\s*([\s\S]*?)\s*\\end\{equation\*?\}/g;

/**
 * Join source array from notebook cell into a single string
 */
function joinSource(source) {
  if (Array.isArray(source)) {
    return source.join("");
  }
  return source || "";
}

/**
 * Detect programming language from code cell metadata or source
 */
function detectLanguage(cell) {
  // Check metadata first
  if (cell.metadata?.language) {
    return cell.metadata.language;
  }

  // Try to detect from source
  const source = joinSource(cell.source).toLowerCase();
  if (
    source.includes("import pandas") ||
    source.includes("import numpy") ||
    source.includes("import matplotlib")
  ) {
    return "python";
  }
  if (
    source.includes("import ") &&
    (source.includes("react") || source.includes("from "))
  ) {
    return "javascript";
  }
  if (source.includes("require(")) {
    return "javascript";
  }

  // Default to python for Jupyter notebooks
  return "python";
}

/**
 * Process text output
 * Wraps all text outputs in code blocks to prevent MDX from parsing them as JSX
 */
function processTextOutput(output) {
  let text = "";

  if (output.output_type === "stream") {
    text = joinSource(output.text);
  } else if (
    output.output_type === "execute_result" ||
    output.output_type === "display_data"
  ) {
    if (output.data?.["text/plain"]) {
      text = joinSource(output.data["text/plain"]);
    } else if (output.data?.["text/html"]) {
      // HTML output - wrap in code block to prevent MDX parsing
      text = joinSource(output.data["text/html"]);
    }
  } else if (output.output_type === "error") {
    const errorName = output.ename || "Error";
    const errorValue = output.evalue || "";
    const traceback = output.traceback ? output.traceback.join("\n") : "";
    text = `${errorName}: ${errorValue}\n${traceback}`;
  }

  // Wrap all text outputs in code blocks to prevent MDX parsing issues
  if (text) {
    // Trim trailing newlines to avoid extra blank lines
    text = text.trimEnd();
    return `\`\`\`\n${text}\n\`\`\``;
  }

  return "";
}

/**
 * Process image output and save to img directory
 */

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: allow
function processImageOutput(output, notebookPath, cellIndex) {
  const notebookDir = path.dirname(notebookPath);
  const notebookName = path.basename(notebookPath, ".ipynb");
  const imgDir = path.join(notebookDir, "img");

  // Create img directory if it doesn't exist
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
  }

  // Try different image formats
  const imageFormats = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/gif",
    "image/svg+xml",
  ];
  for (const format of imageFormats) {
    if (output.data?.[format]) {
      const imageData = output.data[format];
      let extension = "png";
      if (format === "image/jpeg" || format === "image/jpg") {
        extension = "jpg";
      } else if (format === "image/gif") {
        extension = "gif";
      } else if (format === "image/svg+xml") {
        extension = "svg";
      }

      const imageFileName = `${notebookName}-cell-${cellIndex}.${extension}`;
      const imagePath = path.join(imgDir, imageFileName);

      // Handle base64 encoded images
      let imageBuffer;
      if (typeof imageData === "string") {
        // Remove data URL prefix if present
        const base64Data = imageData.replace(BASE64_IMAGE_REGEX, "");
        imageBuffer = Buffer.from(base64Data, "base64");
      } else if (Array.isArray(imageData)) {
        const base64Data = imageData.join("").replace(BASE64_IMAGE_REGEX, "");
        imageBuffer = Buffer.from(base64Data, "base64");
      } else {
        continue;
      }

      fs.writeFileSync(imagePath, imageBuffer);
      const relativeImagePath = path.join("img", imageFileName);
      return `![Output](./${relativeImagePath})`;
    }
  }

  return "";
}

/**
 * Process all outputs for a code cell
 */
function processOutputs(outputs, notebookPath, cellIndex) {
  if (!outputs || outputs.length === 0) {
    return "";
  }

  const outputParts = [];

  for (const output of outputs) {
    // Handle images first
    if (
      (output.output_type === "display_data" ||
        output.output_type === "execute_result") &&
      output.data
    ) {
      const imageMarkdown = processImageOutput(output, notebookPath, cellIndex);
      if (imageMarkdown) {
        outputParts.push(imageMarkdown);
        continue;
      }
    }

    // Handle text outputs
    const textOutput = processTextOutput(output);
    if (textOutput) {
      outputParts.push(textOutput);
    }
  }

  return outputParts.join("\n\n");
}

/**
 * Convert LaTeX equation environments to remark-math compatible format
 * Converts \begin{equation*}...\end{equation*} and \begin{equation}...\end{equation} to $$...$$
 */
function convertLaTeXEnvironments(content) {
  // Replace \begin{equation*}...\end{equation*} and \begin{equation}...\end{equation} with $$...$$
  return content.replace(EQUATION_REGEX, (_match, equationContent) => {
    // Trim whitespace from equation content
    const trimmed = equationContent.trim();
    return `$$${trimmed}$$`;
  });
}

/**
 * Escape JSX-like characters in markdown tables to prevent MDX parsing errors
 * Escapes <, <=, >, >= at the start of table cells
 */
function escapeMarkdownTableJSX(content) {
  // Match markdown table rows (lines starting with |)
  // Match table cells that start with <, <=, >, or >=
  // Pattern: |< or |<= or |> or |>= (at the start of a cell, with optional whitespace before)
  // This handles cases like: |<| or |<=| or |<| `x < y` | or | < | (with spaces)
  // We need to escape the operator immediately after | to prevent MDX from parsing it as JSX
  return content.replace(
    /^\|(\s*)(<|<=|>|>=)/gm,
    (_match, before, operator) => {
      // Escape the operator based on what it is
      let escaped = operator;
      if (operator === "<") {
        escaped = "&lt;";
      } else if (operator === "<=") {
        escaped = "&lt;=";
      } else if (operator === ">") {
        escaped = "&gt;";
      } else if (operator === ">=") {
        escaped = "&gt;=";
      }
      return `|${before}${escaped}`;
    }
  );
}

/**
 * Escape < characters in markdown text (outside code blocks) to prevent MDX parsing errors
 * This handles cases like '<U21' where MDX tries to parse it as a JSX tag
 */
function escapeMarkdownTextJSX(content) {
  // Split by code blocks and inline code, then escape < only in regular text
  const parts = [];
  let lastIndex = 0;

  // Match code blocks (```...```) and inline code (`...`)
  const codeRegex = /(```[\s\S]*?```|`[^`\n]+`)/g;
  let match = codeRegex.exec(content);

  while (match !== null) {
    // Add text before code (with escaped <)
    if (match.index > lastIndex) {
      const textBefore = content.slice(lastIndex, match.index);
      // Escape all < characters in markdown text to prevent MDX parsing as JSX
      // This handles cases like '<U21' where MDX tries to parse it as a JSX tag
      parts.push(textBefore.replace(/</g, "&lt;"));
    }

    // Add code block/code as-is
    parts.push(match[0]);
    lastIndex = match.index + match[0].length;
    match = codeRegex.exec(content);
  }

  // Add remaining text (with escaped <)
  if (lastIndex < content.length) {
    const textAfter = content.slice(lastIndex);
    parts.push(textAfter.replace(/</g, "&lt;"));
  }

  return parts.join("");
}

/**
 * Convert a notebook cell to markdown
 */
function convertCellToMarkdown(cell, cellIndex, notebookPath) {
  if (cell.cell_type === "markdown") {
    const source = joinSource(cell.source);
    // Convert LaTeX environments to remark-math compatible format
    let markdown = convertLaTeXEnvironments(source);
    // Escape JSX-like characters in markdown tables
    markdown = escapeMarkdownTableJSX(markdown);
    // Escape < characters in markdown text (outside code blocks)
    markdown = escapeMarkdownTextJSX(markdown);
    return markdown;
  }

  if (cell.cell_type === "code") {
    const source = joinSource(cell.source);
    const language = detectLanguage(cell);
    let markdown = `\`\`\`${language}\n${source}\n\`\`\``;

    // Add outputs if present
    if (cell.outputs && cell.outputs.length > 0) {
      const outputsMarkdown = processOutputs(
        cell.outputs,
        notebookPath,
        cellIndex
      );
      if (outputsMarkdown) {
        markdown += `\n\n${outputsMarkdown}`;
      }
    }

    return markdown;
  }

  // Raw cells - treat as markdown
  if (cell.cell_type === "raw") {
    const source = joinSource(cell.source);
    // Convert LaTeX environments to remark-math compatible format
    let markdown = convertLaTeXEnvironments(source);
    // Escape JSX-like characters in markdown tables
    markdown = escapeMarkdownTableJSX(markdown);
    // Escape < characters in markdown text (outside code blocks)
    markdown = escapeMarkdownTextJSX(markdown);
    return markdown;
  }

  return "";
}

/**
 * Find the first H1 heading in markdown cells
 */
function findFirstH1(cells) {
  for (const cell of cells) {
    if (cell.cell_type === "markdown") {
      const source = joinSource(cell.source);
      // Match H1 heading: # followed by text (at start of line, with optional whitespace)
      // This handles: "# Title", "  # Title", etc.
      const lines = source.split("\n");
      for (const line of lines) {
        const trimmedLine = line.trim();
        // Match H1: starts with # followed by space and text (not ## or ###)
        const h1Match = trimmedLine.match(H1_REGEX);
        if (h1Match) {
          return h1Match[1].trim();
        }
      }
    }
  }
  return null;
}

/**
 * Convert notebook metadata to YAML frontmatter string
 */
function extractFrontmatter(notebook, h1Title = null) {
  const metadata = notebook.metadata || {};
  const frontmatterLines = [];

  // Use H1 title if available, otherwise use metadata title
  const title = h1Title || metadata.title;
  if (title) {
    frontmatterLines.push(`title: "${String(title).replace(/"/g, '\\"')}"`);
  }
  if (metadata.description) {
    frontmatterLines.push(
      `description: "${String(metadata.description).replace(/"/g, '\\"')}"`
    );
  }
  if (metadata.date) {
    frontmatterLines.push(
      `date: "${String(metadata.date).replace(/"/g, '\\"')}"`
    );
  }
  if (metadata.author) {
    frontmatterLines.push(
      `author: "${String(metadata.author).replace(/"/g, '\\"')}"`
    );
  }

  // Extract language info if available
  if (metadata.language_info?.name) {
    frontmatterLines.push(
      `language: "${String(metadata.language_info.name).replace(/"/g, '\\"')}"`
    );
  }

  if (frontmatterLines.length === 0) {
    return "";
  }

  return `---\n${frontmatterLines.join("\n")}\n---\n\n`;
}

/**
 * Convert notebook to markdown
 */
function convertNotebookToMarkdown(notebookPath) {
  try {
    const notebookContent = fs.readFileSync(notebookPath, "utf8");
    const notebook = JSON.parse(notebookContent);

    const cells = notebook.cells || [];
    const markdownParts = [];

    // Find first H1 heading to use as title
    const h1Title = findFirstH1(cells);

    // Extract frontmatter (with H1 title if found)
    const frontmatter = extractFrontmatter(notebook, h1Title);
    if (frontmatter) {
      markdownParts.push(frontmatter);
    }

    // Convert each cell
    for (let i = 0; i < cells.length; i++) {
      const cellMarkdown = convertCellToMarkdown(cells[i], i, notebookPath);
      if (cellMarkdown) {
        markdownParts.push(cellMarkdown);
        // Add spacing between cells
        if (i < cells.length - 1) {
          markdownParts.push("");
        }
      }
    }

    const markdownContent = markdownParts.join("\n\n");

    // Write markdown file
    const markdownPath = notebookPath.replace(IPYNB_REGEX, ".md");
    fs.writeFileSync(markdownPath, markdownContent, "utf8");

    return true;
  } catch (error) {
    console.error(`❌ Error converting ${notebookPath}:`, error.message);
    return false;
  }
}

/**
 * Recursively find all .ipynb files in a directory
 */
function findNotebookFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip hidden files and directories
    if (entry.name.startsWith(".")) {
      continue;
    }

    // Skip node_modules and other build directories
    if (
      entry.name === "node_modules" ||
      entry.name === ".next" ||
      entry.name === "out"
    ) {
      continue;
    }

    if (entry.isDirectory()) {
      findNotebookFiles(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith(".ipynb")) {
      fileList.push(fullPath);
    }
  }

  return fileList;
}

/**
 * Main function to convert all notebooks
 */
function convertAllNotebooks() {
  console.log("🔍 Searching for Jupyter notebooks...");
  const notebookFiles = findNotebookFiles(contentsDir);

  if (notebookFiles.length === 0) {
    console.log("ℹ️  No .ipynb files found in src/contents");
    return;
  }

  console.log(`📝 Found ${notebookFiles.length} notebook(s) to convert\n`);

  let successCount = 0;
  let failCount = 0;

  for (const notebookPath of notebookFiles) {
    if (convertNotebookToMarkdown(notebookPath)) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log("\n✨ Conversion complete!");
  console.log(`   ✅ Success: ${successCount}`);
  if (failCount > 0) {
    console.log(`   ❌ Failed: ${failCount}`);
  }
}

// Run the conversion
convertAllNotebooks();
