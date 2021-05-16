import { r as registerInstance, h } from './index-bf2c0524.js';

const appRootCss = ".app-root{height:100%;width:100%;background-color:#EDE8E5}.app-root main{height:calc(100% - 80px);width:100%}header{margin-left:auto;margin-right:auto;text-align:center;display:flex;align-items:center}header.start h1{top:30%;left:calc(50% - 145px);transition-property:top, left;transition-duration:0.5s;transition-timing-function:linear}header.start h2{top:calc(30% + 60px);right:calc(50% - 50px);transition-property:top, right;transition-duration:0.5s;transition-timing-function:linear}header.subpage h1{top:0;left:0;transition-property:top, left;transition-duration:0.5s;transition-timing-function:linear}header.subpage h2{top:0;right:0;transition-property:top, right;transition-duration:0.5s;transition-timing-function:linear}header a{text-decoration:none}header .headings,header h2,header h1{position:absolute;background:#EDE8E5;width:fit-content;text-align:center;margin:0.2em;color:black;z-index:1}header h1{padding:0.2em 0.4em}header h2{padding:0.2em;font-weight:500}";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    // Add locationchange event on all url modifications
    window.history.pushState = (f => function pushState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('pushstate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    })(window.history.pushState);
    window.history.replaceState = (f => function replaceState() {
      var ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('replacestate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    })(window.history.replaceState);
    window.addEventListener('popstate', () => {
      window.dispatchEvent(new Event('locationchange'));
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
    return (h("div", { class: "app-root" }, h("header", { class: this.url === '/' ? 'start' : 'subpage' }, h("stencil-route-link", { url: "/" }, h("h1", null, "johanna thorsen")), h("stencil-route-link", { url: "/profile/johanna" }, h("h2", null, "projects"))), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "app-start", exact: true }), h("stencil-route", { url: "/profile/:name", component: "app-profile" }))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
