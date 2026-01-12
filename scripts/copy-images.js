import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const contentsDir = path.join(rootDir, "src/contents");
const publicContentsDir = path.join(rootDir, "public/contents");

/**
 * Copy images from contents directory to public/contents
 */
function copyImages() {
  // Remove existing public/contents if it exists
  if (fs.existsSync(publicContentsDir)) {
    fs.rmSync(publicContentsDir, { recursive: true, force: true });
  }

  // Create public/contents directory
  fs.mkdirSync(publicContentsDir, { recursive: true });

  /**
   * Recursively copy image files and directories
   */

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: allow
  function copyRecursive(src, dest, relativeBase = "") {
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const relativePath = path.join(relativeBase, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isFile()) {
        // Only copy image files
        const ext = path.extname(entry.name).toLowerCase();
        const imageExts = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"];
        if (imageExts.includes(ext)) {
          fs.mkdirSync(path.dirname(destPath), { recursive: true });
          fs.copyFileSync(srcPath, destPath);
        }
      } else if (entry.isDirectory()) {
        // Skip hidden directories
        if (entry.name.startsWith(".")) {
          continue;
        }
        // Copy all directories, but only process img/imgs directories recursively
        // For other directories, we still need to check for images inside
        if (entry.name === "img" || entry.name === "imgs") {
          // This is an image directory, copy everything inside
          fs.mkdirSync(destPath, { recursive: true });
          copyRecursive(srcPath, destPath, relativePath);
        } else {
          // For other directories, recursively check for images
          fs.mkdirSync(destPath, { recursive: true });
          copyRecursive(srcPath, destPath, relativePath);
        }
      }
    }
  }

  // Copy images from contents directory
  copyRecursive(contentsDir, publicContentsDir);
  console.log("✅ Images copied successfully!");
}

copyImages();
