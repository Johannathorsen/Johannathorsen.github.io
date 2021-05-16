import { r as registerInstance, h } from './index-bf2c0524.js';

const appProfileCss = ".fade-in{animation:fadeIn ease 1s;-webkit-animation:fadeIn ease 1s;-moz-animation:fadeIn ease 1s;-o-animation:fadeIn ease 1s;-ms-animation:fadeIn ease 1s}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.app-profile{padding:10px;background-color:#EDE8E5;height:100%;display:flex;align-items:center;justify-content:center;justify-items:center}";

const AppProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  normalize(name) {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }
  render() {
    if (this.match && this.match.params.name) {
      return (h("div", { class: "app-profile fade-in" }, h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!")));
    }
  }
};
AppProfile.style = appProfileCss;

export { AppProfile as app_profile };
