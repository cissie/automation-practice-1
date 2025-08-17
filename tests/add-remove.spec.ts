import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
});

test('should load Add/Remove Elements page', async ({ page }) => {
  
  // Page has heading Add/Remove Elements
  await expect(page.getByRole('heading', { name: 'Add/Remove Elements' })).toBeVisible();
});

test('should add and remove elements', async({ page }) => {

  const addElementButton = page.getByRole('button', {name: 'Add Element'})
  const deleteButton = page.getByRole('button', {name: "Delete"})

  // Add Element button is visible
  await expect(addElementButton).toBeVisible();
  //Click Add Element button
  await addElementButton.click();
  //Delete button is visible
  await expect(deleteButton).toBeVisible();
  //Click Delete button
  await deleteButton.click();
  //Delete button is no longer visible
  await expect(deleteButton).not.toBeVisible();

})
