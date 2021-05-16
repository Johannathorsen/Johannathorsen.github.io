import { r as registerInstance, h } from './index-bf2c0524.js';

const appProfileCss = ".app-profile{padding:10px;background-color:#EDE8E5;height:100%;display:flex;align-items:center;justify-content:center;justify-items:center}";

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
      return (h("div", { class: "app-profile" }, h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!")));
    }
  }
};
AppProfile.style = appProfileCss;

export { AppProfile as app_profile };
