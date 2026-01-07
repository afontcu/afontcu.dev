import { test, expect } from '@playwright/test';

test('All tags are accessible and have posts', async ({ page }) => {
  await page.goto('/tags/');

  const main = page.getByRole('main');
  const tagLinks = main.getByRole('link');
  const count = await tagLinks.count();

  expect(count).toBeGreaterThan(0);

  // Collect all tag hrefs
  const hrefs: string[] = [];
  for (let i = 0; i < count; i++) {
    const href = await tagLinks.nth(i).getAttribute('href');
    if (href) hrefs.push(href);
  }

  // Visit each tag page and verify posts exist
  for (const href of hrefs) {
    await page.goto(href);
    const postLinks = page.getByTestId('post-list-link');
    const postCount = await postLinks.count();
    expect(postCount).toBeGreaterThan(0);
  }
});
