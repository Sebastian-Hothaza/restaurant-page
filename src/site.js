import {loadHome} from "./home"
import {loadMenu} from "./menu"
import {loadContact} from "./contact"
export {loadSite}


function loadSite(){
    const content = document.querySelector('#content');

    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMain());

    loadHome();
}

function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = "Sibiu Sweets";
    return header;
}

function createNav(){
    // Creation of the parent container
    const nav = document.createElement('div');
    nav.classList.add('navBar');

    // Creation of the individual elements
    const navHome = document.createElement('button');
    const navMenu = document.createElement('button');
    const navContact = document.createElement('button');

    navHome.classList.add('navBtn');
    navMenu.classList.add('navBtn');
    navContact.classList.add('navBtn');

    navHome.textContent = "Home";
    navMenu.textContent = "Menu";
    navContact.textContent = "Contact Us";

    // Adding event listeners
    navHome.addEventListener('click', () => {
        if (navHome.classList.contains('active')){
            return;
        } else {
            setActiveBtn(navHome);
            loadHome();
        }
    });
    navMenu.addEventListener('click', () => {
        if (navMenu.classList.contains('active')){
            return;
        } else {
            setActiveBtn(navMenu);
            loadMenu();
        }
    });
    navContact.addEventListener('click', () => {
        if (navContact.classList.contains('active')){
            return;
        } else {
            setActiveBtn(navContact);
            loadContact();
        }
    });


    // Adding individual elements to parent container
    nav.appendChild(navHome);
    nav.appendChild(navMenu);
    nav.appendChild(navContact);

    // We set the active button to home on default
    setActiveBtn(navHome);

    return nav;
}

function createMain(){
    const main = document.createElement('div');
    main.classList.add("main");
    main.setAttribute('id','main');
    return main;
}

// Given a button in nav bar, sets it to active
function setActiveBtn(btn){
    const navBtns = document.querySelectorAll('.navBtn');

    // We remove active status of all buttons first
    navBtns.forEach((button) => {
        button.classList.remove('active');
    });

    // Now, give the corresponding button the correct trait
    btn.classList.add('active');
}