# 11ty Blog Migration Report

## Completed Tasks

### 1. Standalone Blog Posts Migrated ✅
Moved **40 standalone .md files** from `content/blog/*.md` to `src/blog/`:
- agile-is-dead.md
- agile-open-spain-2018.md
- back-to-basics.md
- beware-feedback-loops.md
- challenging-assumptions.md
- company-family.md
- cool-ux-tools.md
- css-important.md
- fear.md
- feedback-loops.md
- frontend-testing-code-consumers.md
- getting-someone-do-something.md
- goal-of-software-development.md
- goodbye-medium.md
- horror-vacui.md
- inversion.md
- jscamp-bcn-2018.md
- learning-in-public.md
- learning-testing.md
- marginal-gains.md
- microsoft-internet-explorer-chromium.md
- named-arguments-functions.md
- neural-networks-apocalypse.md
- power-to-the-teams.md
- react-callback-props-vue.md
- rethinking-agile.md
- senior-developer-meaning.md
- slow.md
- small-increment.md
- software-blunder.md
- software-engineer-myths.md
- talk-tips.md
- techfest-2019.md
- testing-api-calls.md
- testing-is-hard.md
- trivago-javascript-kyle-simpson.md
- vue-dynamic-component-registration.md
- ways-telling-problem-oriented.md
- write-unit-tests.md
- your-opinion.md

### 2. Folder-Based Posts Migrated ✅
Moved **9 folder-based posts** from `content/blog/[folder]/index.md` to `src/blog/[folder].md`:
- autonomy.md (from autonomy/index.md)
- be-predictable.md (from be-predicatble/index.md - note: fixed typo in folder name)
- bilbostack-2024.md (from bilbostack-2024/index.md)
- culture-of-testing.md (from culture-of-testing/index.md)
- embrace-unknowns.md (from embrace-unknowns/index.md)
- jscamp-bcn-2019.md (from jscamp-bcn-2019/index.md)
- minefield.md (from minefield/index.md)
- pessimism-driven-development.md (from pessimism-driven-development/index.md)
- shoe-factory-build-software.md (from shoe-factory-build-software/index.md)

### 3. Image Paths Updated ✅
Updated all image references in folder-based posts from `./image.jpg` to `/blog/[folder]/image.jpg`:
- autonomy.md: 3 images (no-constraint.jpg, fixed-constraint.jpg, cone-constraint.jpg)
- bilbostack-2024.md: 2 images (xerrada.jpg, resum.jpg)
- culture-of-testing.md: 1 image (tests-meme.jpg)
- embrace-unknowns.md: 1 image (periodic-table-mendeleev.jpg)
- jscamp-bcn-2019.md: 1 image (jscamp.jpg)
- minefield.md: 4 images (fog-of-war.png, minesweeper-empty.png, minesweeper-paths.png, minesweeper-expanded.png)
- pessimism-driven-development.md: 2 images (assumption-1.png, assumption-2.png)
- shoe-factory-build-software.md: 1 image (shoemaker.jpeg)

### 4. Profile Picture Migrated ✅
Moved `content/assets/profile-pic.jpg` to `public/profile-pic.jpg`

### 5. Blog Configuration Created ✅
Created `src/blog/blog.json` with:
```json
{
  "layout": "layouts/post.njk",
  "tags": ["post"]
}
```

### 6. Slug Fields Verified ✅
All **49 blog posts** have `slug` fields in their frontmatter.

## Remaining Task: Image Migration

Due to system restrictions, the blog post images need to be manually copied. Run the migration script:

```bash
chmod +x /Users/afontcu/dev/afontcu.dev/migrate-images.sh
/Users/afontcu/dev/afontcu.dev/migrate-images.sh
```

Or copy images manually:

```bash
# Create directories and copy images
mkdir -p public/blog/autonomy
cp content/blog/autonomy/*.jpg public/blog/autonomy/

mkdir -p public/blog/bilbostack-2024
cp content/blog/bilbostack-2024/*.jpg public/blog/bilbostack-2024/

mkdir -p public/blog/culture-of-testing
cp content/blog/culture-of-testing/*.jpg public/blog/culture-of-testing/

mkdir -p public/blog/embrace-unknowns
cp content/blog/embrace-unknowns/*.jpg public/blog/embrace-unknowns/

mkdir -p public/blog/jscamp-bcn-2019
cp content/blog/jscamp-bcn-2019/*.jpg public/blog/jscamp-bcn-2019/

mkdir -p public/blog/minefield
cp content/blog/minefield/*.png public/blog/minefield/

mkdir -p public/blog/pessimism-driven-development
cp content/blog/pessimism-driven-development/*.png public/blog/pessimism-driven-development/

mkdir -p public/blog/shoe-factory-build-software
cp content/blog/shoe-factory-build-software/*.jpeg public/blog/shoe-factory-build-software/
```

## Summary

**Total posts migrated:** 49
- Standalone posts: 40
- Folder-based posts: 9

**Files created:**
- `/Users/afontcu/dev/afontcu.dev/src/blog/blog.json`
- `/Users/afontcu/dev/afontcu.dev/public/profile-pic.jpg`
- `/Users/afontcu/dev/afontcu.dev/migrate-images.sh` (helper script)

**Image paths updated:** 15 images across 8 posts

**Next step:** Run the migrate-images.sh script or manually copy the image folders as shown above.
