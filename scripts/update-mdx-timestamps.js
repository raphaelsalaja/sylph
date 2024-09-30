const fs = require("fs");
const path = require("path");

// Function to update timestamps for a single file
const updateTimestamps = (filePath, overrideCreated = false) => {
  const mdxContent = fs.readFileSync(filePath, "utf-8");
  const frontmatterRegex = /---\n([\s\S]*?)\n---/;
  const match = frontmatterRegex.exec(mdxContent);

  if (match) {
    let frontmatter = match[1];

    // Get file stats to retrieve the actual creation and modification times
    const fileStats = fs.statSync(filePath);
    const created = fileStats.birthtime.toISOString();
    const updated = fileStats.mtime.toISOString();

    // Check if 'created' timestamp exists or if the override flag is set
    if (overrideCreated || !frontmatter.includes("created:")) {
      frontmatter = frontmatter.includes("created:")
        ? frontmatter.replace(/created: ".*"/, `created: "${created}"`)
        : `${frontmatter}\n  created: "${created}"`;
    }

    // Always update the 'updated' timestamp
    if (frontmatter.includes("updated:")) {
      frontmatter = frontmatter.replace(
        /updated: ".*"/,
        `updated: "${updated}"`,
      );
    } else {
      frontmatter += `\n  updated: "${updated}"`;
    }

    // Reassemble the content with updated frontmatter
    const newContent = mdxContent.replace(
      frontmatterRegex,
      `---\n${frontmatter}\n---`,
    );

    fs.writeFileSync(filePath, newContent, "utf-8");
  }
};

// Function to find all MDX files in the 'app' folder
const findAllMdxFiles = (dirPath, overrideCreated = false) => {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      // Recursively search through directories
      findAllMdxFiles(fullPath, overrideCreated);
    } else if (fullPath.endsWith(".mdx")) {
      // Apply the updateTimestamps function to each MDX file
      updateTimestamps(fullPath, overrideCreated);
    }
  }
};

// Determine if the user wants to override the 'created' date
const overrideCreated = process.argv.includes("--override-created");

// Start searching for MDX files in the 'app' folder, with an optional override flag
findAllMdxFiles(path.join(__dirname, "../app"), overrideCreated);
