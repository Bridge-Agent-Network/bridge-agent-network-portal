import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const publicResourceDir = path.join(process.cwd(), "public", "resources");
const allowedExtensions = new Set([".pdf", ".docx", ".png", ".jpg", ".jpeg"]);
const forbiddenNameParts = ["ownership", "compensation", "brainstorm", "partnership structure", "working draft"];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await walk(publicResourceDir);
const errors = [];

for (const file of files) {
  const relativePath = path.relative(publicResourceDir, file);
  const lowerPath = relativePath.toLowerCase();
  const extension = path.extname(file).toLowerCase();
  const fileStat = await stat(file);

  if (!allowedExtensions.has(extension)) {
    errors.push(`${relativePath}: unsupported public asset extension`);
  }

  if (forbiddenNameParts.some((part) => lowerPath.includes(part))) {
    errors.push(`${relativePath}: looks like an internal/reference document`);
  }

  if (fileStat.size > 25 * 1024 * 1024) {
    errors.push(`${relativePath}: exceeds 25 MB`);
  }
}

if (errors.length > 0) {
  console.error("Public asset validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Public asset validation passed for ${files.length} files.`);
