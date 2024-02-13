import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('has title', async ({ page }) => {
  await page.goto('https://lightzane.github.io/simple-notes');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Simple Notes/);
});

test('add note', async ({ page }) => {
  await page.goto('https://lightzane.github.io/simple-notes');

  await page.getByTestId(/Add Note/).click();

  await expect(page).toHaveTitle(/Add Note/);
});
