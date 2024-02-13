import { paraArray } from './para.js';

const content = document.getElementById('content');

function updateDOM() {
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('id', 'home');

    const header = document.createElement('h1');
    header.textContent = 'Golden Hive Delights';

    homeDiv.appendChild(header);

    for(let i = 0; i < paraArray.length; i++) {
        const paragraph = document.createElement('p');
        paragraph.textContent = paraArray[i];
        homeDiv.appendChild(paragraph);
    }
    
    return homeDiv;
}

content.appendChild(updateDOM());