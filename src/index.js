import Draggabilly from 'draggabilly';
import './styles/main.scss';

function component() {
    const element = document.createElement('div');
    element.id = 'johanna';
    element.style = "cursor:pointer;";
    new Draggabilly( element, {
        axis: 'x'
    });
  
    return element;
  }
  
  document.body.appendChild(component());