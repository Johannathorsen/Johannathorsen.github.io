import { newE2EPage } from '@stencil/core/testing';

describe('app-projects', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-projects></app-projects>');

    const element = await page.find('app-projects');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/projects/joseph' });

    const projectsElement = await page.find('app-root >>> app-projects');
    const element = projectsElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "app-projects"', async () => {
  //   const page = await newE2EPage({ url: '/projects/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('app-root >>> app-projects >>> div');
  //   expect(element).toHaveClass('app-projects');
  // });
});
