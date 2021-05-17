import { r as registerInstance, h } from './index-bf2c0524.js';

const appProjectsCss = ".fade-in{animation:fadeIn ease 1s;-webkit-animation:fadeIn ease 1s;-moz-animation:fadeIn ease 1s;-o-animation:fadeIn ease 1s;-ms-animation:fadeIn ease 1s}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.app-projects{padding:10px;background-color:#EDE8E5;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;justify-items:center;box-sizing:border-box}.app-projects .project-wrapper{display:flex}.app-projects .project-wrapper .project{margin:10px;height:100px;width:100px;background-color:#434142}";

const AppProjects = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  normalize(name) {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }
  renderProject() {
    return (h("div", { class: "project" }));
  }
  render() {
    return (h("div", { class: "app-projects fade-in" }, h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!"), h("div", { class: "project-wrapper" }, this.renderProject(), this.renderProject())));
  }
};
AppProjects.style = appProjectsCss;

export { AppProjects as app_projects };
