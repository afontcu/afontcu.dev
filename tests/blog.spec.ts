import { test, expect } from '@playwright/test';

test('All posts are accessible from homepage', async ({ page, request }) => {
  await page.goto('/');

  const postLinks = page.getByTestId('post-list-link');
  const count = await postLinks.count();

  expect(count).toBeGreaterThan(0);

  // Get all hrefs
  const hrefs: string[] = [];
  for (let i = 0; i < count; i++) {
    const href = await postLinks.nth(i).getAttribute('href');
    if (href) hrefs.push(href);
  }

  // Verify each link returns 200
  for (const href of hrefs) {
    const response = await request.get(href);
    expect(response.status()).toBe(200);
  }
});
