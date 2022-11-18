export {loadMenu}

class menuItem{
    constructor(title, imagePath, desc, price){
        this.title = title;
        this.imagePath = imagePath;
        this.desc = desc;
        this.price = price;
    }
}

function loadMenu() {
    // Select and clear the content
    const main = document.querySelector('#main');
    main.innerHTML = '';

    // Create the page contents
    const page = document.createElement('div');
    page.classList.add('menuBlock');

    // Heading
    const heading = document.createElement('div');
    heading.classList.add('menuHeading');
    heading.textContent = "Menu"
    page.appendChild(heading);


    // Build grid
    const grid = document.createElement('div');
    grid.classList.add('menuItems');

    // Create menu items
    const kurtos = new menuItem('Kurtos', 'images/menuItems/kurtos.jpg',"Slow cooked over charcoal fire for a deliciously sweet crust with soft interior. Available in a variety of dressings.", '$4.99');
    const tiramisu = new menuItem('Tiramisu', 'images/menuItems/tiramisu.jpg', "A delicious traditional coffee cake with a creamy filling.", '$3.99');
    const capsuni = new menuItem('Strawberry Tart','images/menuItems/capsuni.jpg',"Freshly picked strawberries adorn this puffy base finished with cream of straberry topcoat.",'$3.99');

    const cozonac = new menuItem('Cozonac','images/menuItems/cozonac.jpg',"A traditional Romanian dessert popular around Christmas time and Easter. But, you can still enjoy today! We won't tell anyone!",'$2.99');
    const televizor = new menuItem('Televizor','images/menuItems/televizor.jpg',"Lemon filled chololate tart sure to pleasure your senses.",'$2.99');
    const eclair = new menuItem('Eclair','images/menuItems/kurtos.jpg',"French origin but loved by Romanians everywhere! Includes side custard dip.",'$1.99');

    const mere = new menuItem('Apple Pie','images/menuItems/mere.jpg',"A classic, done right. Fresh apples baked to perfection and shredded for unique taste & texture",'$4.99');
    const cremsnit = new menuItem('Cremsnit','images/menuItems/cremsnit.jpg',"Puff pastry sandwiching delicious egg filling. Dusted lightly in powdered sugar.",'$5.99');
    const cake = new menuItem('Chocolate Cake','images/menuItems/cake.jpg',"A classic for chocolate lovers! Recognized world-wide.",'$4.99');

    // Attach menu items to the grid
    grid.appendChild(buildCard(kurtos));
    grid.appendChild(buildCard(tiramisu));
    grid.appendChild(buildCard(capsuni));

    grid.appendChild(buildCard(cozonac));
    grid.appendChild(buildCard(televizor));
    grid.appendChild(buildCard(eclair));

    grid.appendChild(buildCard(mere));
    grid.appendChild(buildCard(cremsnit));
    grid.appendChild(buildCard(cake));

   

    // Attach grid to block
    page.appendChild(grid);

    // Attach block to page
    main.appendChild(page);
}


// Returns a card element filling its contents from item passed in
function buildCard(item){
    // Create the card
    const card = document.createElement('div');
    card.classList.add('card');

    // Attatch the heading
    const cardHeading = document.createElement('div');
    cardHeading.classList.add('cardHeading');
    cardHeading.textContent = item.title;
    card.appendChild(cardHeading);

    // Attatch the image
    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', item.imagePath);
    cardImg.setAttribute('height', '200');
    card.appendChild(cardImg);


    // Attach the Description
    const cardDesc = document.createElement('div');
    cardDesc.classList.add('cardDesc');
    cardDesc.textContent = item.desc;
    card.appendChild(cardDesc);

    // Attach the price
    const cardPrice = document.createElement('div');
    cardPrice.classList.add('cardPrice');
    cardPrice.textContent = item.price;
    card.appendChild(cardPrice);

    return card;
}

