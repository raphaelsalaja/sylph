<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Gradient Definition -->
  <defs>
    <linearGradient id="moving-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff8a00" />
      <stop offset="50%" stop-color="#e52e71" />
      <stop offset="100%" stop-color="#9c1aff" />
      <animateTransform attributeName="gradientTransform"
                        type="translate"
                        from="0 0" to="100 0"
                        begin="0s" dur="5s"
                        repeatCount="indefinite" />
    </linearGradient>
  </defs>

  <!-- Background Rectangle with Moving Gradient -->
  <rect width="400" height="200" fill="url(#moving-gradient)" />

  <!-- Text in the Middle with Blend Mode -->
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-size="64" font-family="Arial, sans-serif" fill="white"
        style="mix-blend-mode: screen;">
    Sylph
  </text>
</svg>

## Sylph

**Sylph** is a minimal and lightweight portfolio template designed for developers, designers, and creatives. It offers a clean, modern interface to showcase your work, share your ideas, and write blog posts. Sylph is fully responsive, ensuring your portfolio looks great on any device or browser.

Built using **Next.js**, Sylph is optimized for performance and developer experience, providing flexibility and ease of use whether you're showcasing projects or writing content.

### Features

- **Responsive Design**: Works seamlessly on all devices and browsers.
- **MDX and Markdown Support**: Write posts using MDX or Markdown, with extensive flexibility.
- **Optimized for SEO**: Includes sitemaps, robots.txt, and metadata for better search engine visibility.
- **Dynamic OpenGraph (OG) Images**: Automatically generate OG images for social media sharing.
- **Syntax Highlighting**: Built-in support for highlighting code blocks.
- **Tailwind v4**: Fully configured with the latest version of Tailwind CSS for efficient styling.
- **Automated Blog Time Dating**: Automatically manage post creation and updated timestamps.
- **Extensive Frontmatter**: Customize posts with rich metadata and organizational fields.
- **Clean and Simple Structure**: Easy-to-navigate codebase for efficient customization.
- **Light and Dark Mode**: Simple theming with light/dark mode toggle support.
- **Foundations for Expansion**: Built with flexibility in mind, allowing easy expansion and customization.
- **Theming**: Easily extend or customize themes to suit your brand.

<sub>See the [Project Structure](/guides/posts/project-structure) guide for more details on managing content with MDX and frontmatter.</sub>

### Getting Started

Follow these simple steps to get started:

```bash
pnpm install
pnpm dev
```

This will install the necessary dependencies and start the development server. Once the server is running, you can view your portfolio at `http://localhost:3000`.

### Scripts

The following scripts are available to help you manage development, build processes, and linting:

**`build`**

Runs the linting process, updates MDX file timestamps, and then builds the Next.js application for production. This ensures code quality and proper SEO metadata before deployment.

```bash
pnpm build
```

**`postbuild`**

Automatically generates the sitemap after the build process completes. This script uses the `next-sitemap` package to create a `sitemap.xml` file for better SEO and discoverability.

```bash
pnpm postbuild
```

**`mdx:timestamps`**

Runs a custom Node.js script that updates timestamps (`created` and `updated`) in your MDX files, automating the time management for blog posts.

```bash
pnpm mdx:timestamps
```

**`lint:style`**

Runs `stylelint` on all CSS files to check and automatically fix any style issues. This ensures consistent and clean CSS code.

```bash
pnpm lint:style
```

**`lint:biome`**
Runs the Biome linter to check and fix JavaScript/TypeScript code. This keeps your codebase clean and error-free.

```bash
pnpm lint:biome
```

**`lint:prettier`**

Runs Prettier to format your code according to your project's style guide. This improves code readability and consistency.

```bash
pnpm lint:prettier
```

**`lint`**

A combination of the style, Prettier, and Biome linting scripts, run together to ensure the entire codebase follows consistent style and format rules.

```bash
pnpm lint
```

### Colophon

#### 3<sup>rd</sup> Party Libraries

Sylph makes use of a variety of third-party libraries to enhance functionality, improve developer experience, and streamline styling and content management. Here's a breakdown of the key libraries used:

#### **UI & Design**

- **[@radix-ui](https://www.radix-ui.com/)**: Used for highly accessible and customizable components such as dialogs, dropdown menus, and icons. Radix UI’s unstyled primitives allow for full control over styling while ensuring accessibility.

- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that enables rapid UI development and responsive design.

- **[Framer Motion](https://www.framer.com/motion/)**: Provides smooth animations and transitions for interactive elements throughout the template.
- **[Lucide](https://lucide.dev/)**: An icon library used for consistent, customizable iconography throughout the site.

#### **Content & Markdown**

- **[MDX](https://mdxjs.com/)**: Allows you to write Markdown with embedded React components for richer content.
- **[Remark](https://remark.js.org/)** & **[Rehype](https://rehype.js.org/)**: Libraries used to parse and transform Markdown and HTML. This project uses them for processing MDX content and adding features like slugs and table of contents.
- **[Gray-Matter](https://github.com/jonschlinkert/gray-matter)**: Parses frontmatter from Markdown and MDX files, helping manage metadata such as `created` and `updated` timestamps.

#### **Development Tools**

- **[Biome](https://biomejs.dev/)**: A powerful linter, formatter, and more, providing integrated checks for code quality.
- **[Prettier](https://prettier.io/)**: Automatically formats your code for consistency and readability.

- **[Stylelint](https://stylelint.io/)**: Enforces consistent and clean styling across your CSS codebase.
- **[Next.js](https://nextjs.org/)**: A powerful React framework for server-side rendering and static site generation, optimized for performance and SEO.
- **[Next-Sitemap](https://www.npmjs.com/package/next-sitemap)**: Automatically generates a `sitemap.xml` to improve search engine indexing.

#### Typography

- **[Inter](https://rsms.me/inter/)**: A modern sans-serif typeface designed for excellent readability and versatility. Inter is used for headings and body text throughout the site.

### Contributions

Feel free to fork this repository, submit issues, and make contributions! Whether you're adding new features or fixing bugs, your contributions are always welcome.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
