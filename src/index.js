import './styles/main.scss';
import './views';

// Fix for mobile devices with status bars
function adjustAppHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  }
window.addEventListener('resize', adjustAppHeight);
adjustAppHeight();

document.querySelector('.content').appendChild(document.createElement('johanna-start'));
