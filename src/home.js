export {loadHome}


function loadHome() {
    // Select and clear the content
    const main = document.querySelector('#main');
    main.innerHTML = '';

    // Create the page contents
    const page = document.createElement('div');
    page.classList.add('homeBlock');

    // Heading
    const heading = document.createElement('div');
    heading.classList.add('homeHeading');
    heading.textContent = "A little about our story..."
    page.appendChild(heading);

    // Content flex-container
    const content = document.createElement('div');
    content.classList.add('homeContent');
    page.appendChild(content);

    // Image
    const homeImg = document.createElement('img');
    homeImg.setAttribute('src', 'images/chef.jpg');
    homeImg.setAttribute('height', '250');
    content.appendChild(homeImg);

    // Description
    const homeDesc = document.createElement('div');
    homeDesc.textContent = "For over 100 years, our recipes have been bringing joy & delight to families across the Greater Toronto Area. We use only the finest ingredients and time-tested techniques perfected by our masterful crafters.";
    content.appendChild(homeDesc);



    //<img src="images/csbk.jpg" alt="Motorcycle Racers" height="300">

    // Attach them
    main.appendChild(page);
}

