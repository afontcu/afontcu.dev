# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog for afontcu.dev — an 11ty-based static site with Markdown content, hosted on Netlify.

## Commands

```bash
npm run dev        # Start dev server at localhost:8080
npm run build      # Production build (outputs to _site/)
npm run serve      # Same as dev

# E2E tests (Playwright)
npm run test:e2e      # Run all E2E tests (requires server on port 3000)
npm run test:e2e:ui   # Open Playwright UI

# Formatting
npm run format     # Prettier on src/
```

## Architecture

**Content pipeline:**
- Blog posts live in `src/blog/` as Markdown files
- 11ty generates pages from Markdown, creates tag pages via `src/tag-pages.njk`
- Slugs derived from frontmatter or filenames

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
- `eleventy.config.js` — 11ty configuration, plugins, collections
- `src/blog/` — blog post markdown files
- `src/index.njk` — home page template
- `src/tag-pages.njk` — tag listing page template
- `src/_includes/` — layout templates (base.njk, post.njk)

## CI/CD

- GitHub Actions runs E2E tests on push to master and PRs
- Netlify deploys on master merge
