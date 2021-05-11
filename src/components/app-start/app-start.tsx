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
        <img src={getAssetPath('./assets/hill-1.svg')} class="hill-1"/>
        <img src={getAssetPath('./assets/hill-2.svg')} class="hill-2"/>
        <img src={getAssetPath('./assets/hill-3.svg')} class="hill-3"/>
        <img src={getAssetPath('./assets/hill-4.svg')} class="hill-4"/>
      </div>
    );
  }
}