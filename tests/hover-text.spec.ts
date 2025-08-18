import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Hovers' }).click();
});

test('should load Hovers page', async ({ page }) => {
    // Page has heading Hovers
  await expect(page.getByRole('heading', { name: 'Hovers' })).toBeVisible();
});

test('text should display when hovering over images, should hide when not hovering', async ({ page }) => {
    const user1 = page.getByRole('img', { name: 'User Avatar' }).nth(0);
    const user2 = page.getByRole('img', { name: 'User Avatar' }).nth(1);
    const user3 = page.getByRole('img', { name: 'User Avatar' }).nth(2);

    // Ensure text is not visible before hovering
    await expect(page.getByText('name: user1')).not.toBeVisible();

    // Hover over user 1
    await user1.hover();
    // Confirm text for user 1
    await expect(page.getByText('name: user1')).toBeVisible();

    // Hover over user 2
    await user2.hover();
    // Confirm text for user 2
    await expect(page.getByText('name: user2')).toBeVisible();

    // Hover over user 3
    await user3.hover();
    // Confirm text for user 3
    await expect(page.getByText('name: user3')).toBeVisible();

    // Move mouse away from user 3
    await page.mouse.move(0, 0);

    // Ensure text is no longer visible after moving mouse away
    await expect(page.getByText('name: user3')).not.toBeVisible();
});
       
test('links should take user to correct url', async ({ page }) => {
    const user1 = page.getByRole('img', { name: 'User Avatar' }).nth(0);
    const user2 = page.getByRole('img', { name: 'User Avatar' }).nth(1);
    const user3 = page.getByRole('img', { name: 'User Avatar' }).nth(2);

    // Hover over user 1 and click link
    await user1.hover();
    await page.getByText('View profile').nth(0).click();
    // Confirm URL for user 1
    await expect(page).toHaveURL(/\/users\/1/);

    // Go back to Hovers page
    await page.goBack();

    // Hover over user 2 and click link
    await user2.hover();
    await page.getByText('View profile').nth(1).click();
    // Confirm URL for user 2
    await expect(page).toHaveURL(/\/users\/2/);

    // Go back to Hovers page
    await page.goBack();

    // Hover over user 3 and click link
    await user3.hover();
    await page.getByText('View profile').nth(2).click();
    // Confirm URL for user 3
    await expect(page).toHaveURL(/\/users\/3/);
});