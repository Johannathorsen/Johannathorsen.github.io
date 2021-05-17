import { r as registerInstance, h, g as getAssetPath } from './index-bf2c0524.js';

const appStartCss = ".fade-in{animation:fadeIn ease 1s;-webkit-animation:fadeIn ease 1s;-moz-animation:fadeIn ease 1s;-o-animation:fadeIn ease 1s;-ms-animation:fadeIn ease 1s}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.app-start{width:100%;height:100%;position:relative;overflow:hidden;background-color:#EDE8E5}.app-start .hill,.app-start .hill-4,.app-start .hill-3,.app-start .hill-2,.app-start .hill-1{position:absolute;bottom:0}.app-start .hill-1{animation:MoveUpDown 2s ease infinite, MoveRightLeft 3s ease infinite;height:75%}.app-start .hill-2{animation:MoveUpDown 3s ease infinite, MoveLeftRight 3s ease infinite;height:81%}.app-start .hill-3{animation:MoveUpDown 5s ease infinite, MoveRightLeft 3s ease infinite;height:48%}.app-start .hill-4{animation:MoveUpDown 4s ease infinite, MoveLeftRight 3s ease infinite;height:42%}@keyframes MoveUpDown{0%,100%{bottom:0}50%{bottom:-1%}}@keyframes MoveLeftRight{0%,100%{left:0}50%{left:-1%}}@keyframes MoveRightLeft{0%,100%{right:-1px}50%{right:-1%}}";

const AppStart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "app-start fade-in" }, h("img", { src: getAssetPath('./assets/hill-1.svg'), class: "hill-1" }), h("img", { src: getAssetPath('./assets/hill-2.svg'), class: "hill-2" }), h("img", { src: getAssetPath('./assets/hill-3.svg'), class: "hill-3" }), h("img", { src: getAssetPath('./assets/hill-4.svg'), class: "hill-4" })));
  }
  static get assetsDirs() { return ["assets"]; }
};
AppStart.style = appStartCss;

export { AppStart as app_start };
