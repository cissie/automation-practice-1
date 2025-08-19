import { test, expect } from '@playwright/test';
import { HoverPage } from '../pages/hover-page.ts';

test.describe('Hovers Tests', () => {
  let hoverPage : HoverPage;

  test.beforeEach(async ({ page }) => {
    hoverPage = new HoverPage(page);
    await hoverPage.navigate();
  });
  
  test('should load Hovers page', async () => { 
    // Page has heading Hovers
    await expect(hoverPage.page.getByRole('heading', { name: 'Hovers' })).toBeVisible();
  });

  // TODO: refactor to use a loop
  test('text should display when hovering over images, should hide when not hovering', async ({ page }) => {

    // Ensure text is not visible before hovering
    await expect(page.getByText('name: user1')).not.toBeVisible();

    // Hover over user 1
    await hoverPage.user1.hover();
    // Confirm text for user 1
    await expect(page.getByText('name: user1')).toBeVisible();

    // Hover over user 2
    await hoverPage.user2.hover();
    // Confirm text for user 2
    await expect(page.getByText('name: user2')).toBeVisible();

    // Hover over user 3
    await hoverPage.user3.hover();
    // Confirm text for user 3
    await expect(page.getByText('name: user3')).toBeVisible();

    // Move mouse away from user 3
    await page.mouse.move(0, 0);

    // Ensure text is no longer visible after moving mouse away
    await expect(page.getByText('name: user3')).not.toBeVisible();
  });
       
    test('links should take user to correct url', async ({ page }) => {

    // Hover over user 1 and click link
    await hoverPage.user1.hover();
    await page.getByText('View profile').nth(0).click();
    // Confirm URL for user 1
    await expect(page).toHaveURL(/\/users\/1/);

    // Go back to Hovers page
    await page.goBack();

    // Hover over user 2 and click link
    await hoverPage.user2.hover();
    await page.getByText('View profile').nth(1).click();
    // Confirm URL for user 2
    await expect(page).toHaveURL(/\/users\/2/);

    // Go back to Hovers page
    await page.goBack();

    // Hover over user 3 and click link
    await hoverPage.user3.hover();
    await page.getByText('View profile').nth(2).click();
    // Confirm URL for user 3
    await expect(page).toHaveURL(/\/users\/3/);
  });
});