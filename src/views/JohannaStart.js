import './JohannaStart.scss';
import hill1 from '../assets/hill-1.svg';
import hill2 from '../assets/hill-2.svg';
import hill3 from '../assets/hill-3.svg';
import hill4 from '../assets/hill-4.svg';

class JohannaStart extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <img src="${hill1}" class="hill-1"/>
            <img src="${hill2}" class="hill-2"/>
            <img src="${hill3}" class="hill-3"/>
            <img src="${hill4}" class="hill-4"/>
            <div class="headings">
                <h1>johanna thorsen</h1>
                <h2>projects</h2>
            </div>
        `;
    }
}
window.customElements.define('johanna-start', JohannaStart);
