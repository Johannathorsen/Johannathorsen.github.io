import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  @Prop() url: String;

  componentWillLoad() {
    // Add locationchange event on all url modifications
    window.history.pushState = ( f => function pushState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('pushstate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    })(window.history.pushState);
    
    window.history.replaceState = ( f => function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    })(window.history.replaceState);
    
    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'))
    });

    // Change prop on locationchange
    window.addEventListener('locationchange', () => {
      this.url = window.location.pathname;
    });

    // Fix for mobile devices with status bars
    function adjustAppHeight() {
      const doc = document.documentElement;
      doc.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }
    window.addEventListener('resize', adjustAppHeight);
    adjustAppHeight();
  }

  connectedCallback() {
    this.url = window.location.pathname;
  }

  render() {
    return (
      <div class="app-root">
         <header class={this.url === '/' ? 'start' : 'subpage'}>
         <stencil-route-link url="/">
            <h1>johanna thorsen</h1>
          </stencil-route-link>
          <stencil-route-link url="/profile/johanna">
            <h2>projects</h2>
          </stencil-route-link>
        </header>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-start" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
