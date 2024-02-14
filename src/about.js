import { hoursArray } from "./data.js";

const content = document.getElementById('content');

export function updateAbout() {
    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('id', 'home');

    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Hours:';

    const list = document.createElement('ul');

    for(let i = 0; i < hoursArray.length; i++) {
        const listItems = document.createElement('li');
        listItems.textContent = hoursArray[i];
        listItems.setAttribute('class', 'custom-list');
        list.appendChild(listItems);
    }

    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location:';

    const locationPara = document.createElement('p');
    locationPara.textContent = 'Honeycomb Way 28, Oregon USA';

    aboutDiv.appendChild(hoursHeader);
    aboutDiv.appendChild(list);
    aboutDiv.appendChild(locationHeader);
    aboutDiv.appendChild(locationPara);

    return aboutDiv;
}

content.appendChild(updateAbout());