import Draggabilly from 'draggabilly';

class JohannaAbout extends HTMLElement {
  connectedCallback() {
    new Draggabilly( this, {
      axis: 'x'
  });
  }
}
window.customElements.define('johanna-about', JohannaAbout);
