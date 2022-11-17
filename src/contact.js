export {loadContact}


function loadContact() {
    // Select and clear the content
    const main = document.querySelector('#main');
    main.innerHTML = '';

    // Create the page contents
    const page = document.createElement('div');
    page.classList.add('contactBlock');

    // Heading
    const heading = document.createElement('div');
    heading.classList.add('contactHeading');
    heading.textContent = "Contact Us"
    page.appendChild(heading);

    // Content flex-container
    const content = document.createElement('div');
    content.classList.add('contactContent');
    page.appendChild(content);

    // Image
    const contactImg = document.createElement('img');
    contactImg.setAttribute('src', 'images/map.jpg');
    contactImg.setAttribute('height', '250');
    contactImg.setAttribute('width', '250');
    content.appendChild(contactImg);

    // Description
    const contactDesc = document.createElement('div');
    contactDesc.textContent = "Please feel free to reach out to us with any questions you may have.";
    content.appendChild(contactDesc);

    const phoneNum = document.createElement('div');
    phoneNum.textContent = "\r\n(123) 456-7890";
    contactDesc.appendChild(phoneNum);


    // Attach
    main.appendChild(page);
}

