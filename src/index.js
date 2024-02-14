import { updateHome } from './home.js';
import { updateAbout } from './about.js';
import { updateMenu } from './menu.js'
import Icon from './honey.svg';

const headerSvg = document.getElementById('header-svg');

const myIcon = new Image();
myIcon.src = Icon;
headerSvg.appendChild(myIcon);

const content = document.getElementById('content');
content.textContent = '';
content.appendChild(updateHome());

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

homeBtn.addEventListener('click', () => {
    content.textContent = '';
    content.appendChild(updateHome());
});

menuBtn.addEventListener('click', () => {
    content.textContent = '';
    content.appendChild(updateMenu());
});

aboutBtn.addEventListener('click', () => {
    content.textContent = '';
    content.appendChild(updateAbout());
});