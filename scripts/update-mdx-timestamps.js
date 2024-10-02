const fs = require("fs");
const path = require("path");

const updateTimestamps = (filePath, overrideCreated = false) => {
  const mdxContent = fs.readFileSync(filePath, "utf-8");
  const frontmatterRegex = /---\n([\s\S]*?)\n---/;
  const match = frontmatterRegex.exec(mdxContent);

  if (match) {
    let frontmatter = match[1];

    const fileStats = fs.statSync(filePath);
    const created = fileStats.birthtime.toISOString();
    const updated = fileStats.mtime.toISOString();

    if (overrideCreated || !frontmatter.includes("created:")) {
      frontmatter = frontmatter.includes("created:")
        ? frontmatter.replace(/created: ".*"/, `created: "${created}"`)
        : `${frontmatter}\n  created: "${created}"`;
    }

    if (frontmatter.includes("updated:")) {
      frontmatter = frontmatter.replace(/updated: ".*"/, `updated: "${updated}"`);
    } else {
      frontmatter += `\n  updated: "${updated}"`;
    }

    const newContent = mdxContent.replace(frontmatterRegex, `---\n${frontmatter}\n---`);

    fs.writeFileSync(filePath, newContent, "utf-8");
  }
};

const findAllMdxFiles = (dirPath, overrideCreated = false) => {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      findAllMdxFiles(fullPath, overrideCreated);
    } else if (fullPath.endsWith(".mdx")) {
      updateTimestamps(fullPath, overrideCreated);
    }
  }
};

const overrideCreated = process.argv.includes("--override-created");

findAllMdxFiles(path.join(__dirname, "../app"), overrideCreated);
