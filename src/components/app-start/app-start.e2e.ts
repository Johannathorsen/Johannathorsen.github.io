import { newE2EPage } from '@stencil/core/testing';

describe('app-start', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-start></app-start>');

    const element = await page.find('app-start');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-start></app-start>');

    const element = await page.find('app-start >>> button');
    expect(element.textContent).toEqual('Profile page');
  });
});
