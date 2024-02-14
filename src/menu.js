import { menuArray } from "./data.js";

const content = document.getElementById('content');

export function updateMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id','home');

    menuArray.forEach(value => {
        const productCard = document.createElement('div');
        productCard.setAttribute('class','product-card');

        const menuTitle = document.createElement('h3');
        menuTitle.innerText = value.title;

        const menuDescription = document.createElement('p');
        menuDescription.innerText = value.description;

        const menuPrice = document.createElement('p');
        menuPrice.setAttribute('class','product-price');
        menuPrice.innerText = value.price;

        productCard.appendChild(menuTitle);
        productCard.appendChild(menuDescription);
        productCard.appendChild(menuPrice);

        menuDiv.appendChild(productCard);
    })

    return menuDiv;
}

content.appendChild(updateMenu());

