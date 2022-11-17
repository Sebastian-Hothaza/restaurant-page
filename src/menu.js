export {loadMenu}


function loadMenu() {
    // Select and clear the content
    const main = document.querySelector('#main');
    main.innerHTML = '';

    // Create the page contents
    const page = document.createElement('div');
    page.textContent = "menu"

    // Attatch them
    main.appendChild(page);
}

