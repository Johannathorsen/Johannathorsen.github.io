import Draggabilly from 'draggabilly';
import './style.scss';

function component() {
    const element = document.createElement('div');
    element.id = 'hej';
    element.innerText = "Drag me around";
    element.style = "cursor:pointer;";
    new Draggabilly( element);
  
    return element;
  }
  
  document.body.appendChild(component());