import { expect, type Locator, type Page } from '@playwright/test';


export class AddRemovePage {
  readonly page: Page;
  readonly addElementButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addElementButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteButton = page.getByRole('button', { name: 'Delete' });

  }

  async navigate() {  
    await this.page.goto('/add_remove_elements/');
  }

  async addElement() {
    await this.addElementButton.click();
  }

  async deleteElement() {
    await this.deleteButton.click();
  }

}