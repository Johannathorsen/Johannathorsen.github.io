import { r as registerInstance, h } from './index-bf2c0524.js';

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "app-start", exact: true }), h("stencil-route", { url: "/profile/:name", component: "app-profile" }))))));
  }
};

export { AppRoot as app_root };
