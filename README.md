# Portfolio Blog Starter

This is a porfolio site template complete with a blog. Includes:

- MDX and Markdown support
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- RSS Feed
- Dynamic OG images
- Syntax highlighting
- Tailwind v4
- Vercel Speed Insights / Web Analytics
- Geist font

## Demo

https://portfolio-blog-starter.vercel.app

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/solutions/blog&project-name=blog&repository-name=blog)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```bash
pnpm create next-app --example https://github.com/vercel/examples/tree/main/solutions/blog blog
```

Then, run Next.js in development mode:

```bash
pnpm dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/templates) ([Documentation](https://nextjs.org/docs/app/building-your-application/deploying)).

# Commit Guidelines

In this project, we clearly define commit messages to ensure that changes are easily understandable. Commits are categorized into the following two types.

## 1. Blog Writing (blog: )

- This category is used when creating or modifying blog content.
- The message should follow this format:
  ```
  blog: [Title] - [Description of changes]
  ```

### Examples

- `blog: Writing a new tech blog - Introduction to TypeScript and Vue.js`
- `blog: Editing existing blog - Added performance optimization`

## 2. Blog Development (dev: )

- This category is used for developing blog features or fixing bugs.
- The message should follow this format:
  ```
  dev: [Title] - [Description of changes]
  ```

### Examples

- `dev: Added image optimization feature - Using Next.js Image component`
- `dev: Modified blog layout - Implemented responsive design`

## Guidelines for Writing Commit Messages

- Keep messages concise and clear.
- Strive to describe the changes adequately.
- Start with a verb to clearly indicate the action.
