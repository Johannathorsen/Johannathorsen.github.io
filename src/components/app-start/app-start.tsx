import { Component, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'app-start',
  styleUrl: 'app-start.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class AppStart {
  render() {
    return (
      <div class="app-start">
        <div class="background-images">
          <img src={getAssetPath('./assets/hill-1.svg')} class="hill-1"/>
          <img src={getAssetPath('./assets/hill-2.svg')} class="hill-2"/>
          <img src={getAssetPath('./assets/hill-3.svg')} class="hill-3"/>
          <img src={getAssetPath('./assets/hill-4.svg')} class="hill-4"/>
        </div>
        <div class="headings">
          <h1>johanna thorsen</h1>
          <stencil-route-link url="/profile/johanna">
            <h2>projects</h2>
          </stencil-route-link>
        </div>
      </div>
    );
  }
}