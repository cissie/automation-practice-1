import { expect, type Locator, type Page } from '@playwright/test';

export class HoverPage {
  readonly page: Page;
  readonly userAvatars: Locator;
  readonly userProfileLinks: Locator;
  readonly user1: Locator;
  readonly user2: Locator;
  readonly user3: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userAvatars = page.getByRole('img', { name: 'User Avatar' });
    this.userProfileLinks = page.getByText('View profile');
    this.user1 = this.userAvatars.nth(0);
    this.user2 = this.userAvatars.nth(1);
    this.user3 = this.userAvatars.nth(2);
  }

  async navigate() {
    await this.page.goto('/hovers');
  }

};