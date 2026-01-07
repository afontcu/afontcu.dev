import { test, expect } from '@playwright/test';

test('Homepage renders', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByText(
      /a software engineer interested in lean\s+software development, mostly focused on the front end/
    )
  ).toBeVisible();
});

test('Newsletter form has correct action', async ({ page }) => {
  await page.goto('/');

  const form = page.getByTestId('form');
  await expect(form).toHaveAttribute(
    'action',
    'https://buttondown.email/api/emails/embed-subscribe/afontcu'
  );

  const emailInput = form.getByLabel(/your email:/i);
  await expect(emailInput).toBeVisible();
  await emailInput.fill('random@email.com');

  const submitButton = form.getByRole('button');
  await expect(submitButton).toBeVisible();
});
