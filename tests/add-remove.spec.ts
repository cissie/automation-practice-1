import { test, expect } from '@playwright/test';
import { AddRemovePage } from '../pages/addRemovepage';

test.describe('Add/Remove Elements Tests', () => {  
  let addRemovePage: AddRemovePage;

  test.beforeEach(async ({ page }) => {
    addRemovePage = new AddRemovePage(page);
    await addRemovePage.navigate();
  });

  test('should load Add/Remove Elements page', async () => {
    // Page has heading Add/Remove Elements
    await expect(addRemovePage.page.getByRole('heading', { name: 'Add/Remove Elements' })).toBeVisible();
  });

  test('should add and remove elements', async () => {
    // Add Element button is visible
    await expect(addRemovePage.addElementButton).toBeVisible();
    // Click Add Element button
    await addRemovePage.addElement();
    // Delete button is visible
    await expect(addRemovePage.deleteButton).toBeVisible();
    // Click Delete button
    await addRemovePage.deleteElement();
    // Delete button is no longer visible
    await expect(addRemovePage.deleteButton).not.toBeVisible();
  });

});

