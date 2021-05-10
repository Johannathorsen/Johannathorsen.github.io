import { r as registerInstance, h, g as getAssetPath } from './index-bf2c0524.js';

const appStartCss = ".app-start{width:100vw;height:100vh;position:relative;overflow:hidden;background-color:#EDE8E5}.app-start a{text-decoration:none}.app-start .headings{width:fit-content;position:absolute;top:30%;right:0;left:0;margin-left:auto;margin-right:auto;text-align:center;display:flex;flex-direction:column;align-items:center}.app-start h1{background:#EDE8E5;width:fit-content;padding:0.2em 0.4em;margin-bottom:0.4em;text-align:center}.app-start h2{color:black;background:#EDE8E5;width:fit-content;padding:0.2em;margin-top:0;font-weight:500}.app-start .hill,.app-start .hill-4,.app-start .hill-3,.app-start .hill-2,.app-start .hill-1{position:absolute;bottom:0}.app-start .hill-1{right:-1px;height:75%}.app-start .hill-2{left:0;height:81%}.app-start .hill-3{right:0;height:48%}.app-start .hill-4{left:0;height:42%}";

const AppStart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "app-start" }, h("div", { class: "background-images" }, h("img", { src: getAssetPath('./assets/hill-1.svg'), class: "hill-1" }), h("img", { src: getAssetPath('./assets/hill-2.svg'), class: "hill-2" }), h("img", { src: getAssetPath('./assets/hill-3.svg'), class: "hill-3" }), h("img", { src: getAssetPath('./assets/hill-4.svg'), class: "hill-4" })), h("div", { class: "headings" }, h("h1", null, "johanna thorsen"), h("stencil-route-link", { url: "/profile/johanna" }, h("h2", null, "projects")))));
  }
  static get assetsDirs() { return ["assets"]; }
};
AppStart.style = appStartCss;

export { AppStart as app_start };
