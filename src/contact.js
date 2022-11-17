export {loadContact}


function loadContact() {
    // Select and clear the content
    const main = document.querySelector('#main');
    main.innerHTML = '';

    // Create the page contents
    const page = document.createElement('div');
    page.textContent = "contact us"

    // Attatch them
    main.appendChild(page);
}

