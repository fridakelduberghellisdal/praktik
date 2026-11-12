import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://nema.fo/');
    await expect(page).toHaveURL('https://www.nema.fo/');
});