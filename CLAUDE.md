# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog for afontcu.dev — a Gatsby-based static site with Markdown content, hosted on Netlify.

## Commands

```bash
npm run develop    # Start dev server at localhost:8000
npm run build      # Production build
npm run serve      # Serve production build locally

# E2E tests (Cypress)
npm run test:e2e:dev   # Open Cypress UI
npm run test:e2e:run   # Headless run
npm run test:e2e:ci    # Start dev server + run tests

# Formatting
npm run format     # Prettier on src/ and cypress/
```

## Architecture

**Content pipeline:**
- Blog posts live in `content/blog/` as Markdown files (or folders with `index.md` for posts with images)
- `gatsby-node.js` generates pages from Markdown via GraphQL, creates tag pages
- Slugs derived from filenames via `createFilePath`

**Blog post frontmatter:**
```yaml
---
title: Post Title
description: Short description
date: 'YYYY-MM-DDTHH:MM:SS.sssZ'
tags: ['Tag1', 'Tag2']
slug: custom-slug  # optional, defaults to filename
---
```

**Key files:**
- `gatsby-config.js` — plugins, site metadata, remark transformers
- `gatsby-node.js` — page generation logic (blog posts + tag pages)
- `src/templates/blog-post.js` — individual post template
- `src/templates/tags.js` — tag listing page template
- `src/pages/index.js` — home page with post list
- `src/utils/typography.js` — Typography.js config (Lincoln theme, Lora/Source Sans Pro fonts)

**Components:** `src/components/` contains reusable React components (bio, layout, seo, newsletter, post-list).

## CI/CD

- CircleCI runs E2E tests on push
- Netlify deploys on master merge
- `trigger-circle.sh` triggers CI pipeline post-deploy
