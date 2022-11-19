/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\n\n\n\nfunction loadContact() {\n    // Select and clear the content\n    const main = document.querySelector('#main');\n    main.innerHTML = '';\n\n    // Create the page contents\n    const page = document.createElement('div');\n    page.classList.add('contactBlock');\n\n    // Heading\n    const heading = document.createElement('div');\n    heading.classList.add('contactHeading');\n    heading.textContent = \"Contact Us\"\n    page.appendChild(heading);\n\n    // Content flex-container\n    const content = document.createElement('div');\n    content.classList.add('contactContent');\n    page.appendChild(content);\n\n    // Image\n    const contactImg = document.createElement('img');\n    contactImg.setAttribute('src', 'images/map.jpg');\n    contactImg.setAttribute('height', '250');\n    contactImg.setAttribute('width', '250');\n    content.appendChild(contactImg);\n\n    // Description\n    const contactDesc = document.createElement('div');\n    contactDesc.textContent = \"Please feel free to reach out to us with any questions you may have.\";\n    content.appendChild(contactDesc);\n\n    const phoneNum = document.createElement('div');\n    phoneNum.textContent = \"\\r\\n(416) 381-2847\";\n    contactDesc.appendChild(phoneNum);\n\n\n    // Attach\n    main.appendChild(page);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n\n\n\nfunction loadHome() {\n    // Select and clear the content\n    const main = document.querySelector('#main');\n    main.innerHTML = '';\n\n    // Create the page contents\n    const page = document.createElement('div');\n    page.classList.add('homeBlock');\n\n    // Heading\n    const heading = document.createElement('div');\n    heading.classList.add('homeHeading');\n    heading.textContent = \"A little about our story...\"\n    page.appendChild(heading);\n\n    // Content flex-container\n    const content = document.createElement('div');\n    content.classList.add('homeContent');\n    page.appendChild(content);\n\n    // Image\n    const homeImg = document.createElement('img');\n    homeImg.setAttribute('src', 'images/chef.jpg');\n    homeImg.setAttribute('height', '250');\n    content.appendChild(homeImg);\n\n    // Description\n    const homeDesc = document.createElement('div');\n    homeDesc.textContent = \"For over 100 years, our recipes have been bringing joy & delight to families across the Greater Toronto Area. We use only the finest ingredients and time-tested techniques perfected by our masterful crafters.\";\n    content.appendChild(homeDesc);\n\n\n    // Attach\n    main.appendChild(page);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site */ \"./src/site.js\");\n\n\n(0,_site__WEBPACK_IMPORTED_MODULE_0__.loadSite)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n\n\nconst menuItemFactory = (title, imagePath, desc, price) => {\n    return { title, imagePath, desc, price };\n};\n\n\nfunction loadMenu() {\n    // Select and clear the content\n    const main = document.querySelector('#main');\n    main.innerHTML = '';\n\n    // Create the page contents\n    const page = document.createElement('div');\n    page.classList.add('menuBlock');\n\n    // Heading\n    const heading = document.createElement('div');\n    heading.classList.add('menuHeading');\n    heading.textContent = \"Menu\"\n    page.appendChild(heading);\n\n\n    // Build grid\n    const grid = document.createElement('div');\n    grid.classList.add('menuItems');\n\n    // Create menu items\n    const kurtos = menuItemFactory('Kurtos', 'images/menuItems/kurtos.jpg',\"Slow cooked over charcoal fire for a deliciously sweet crust with soft interior. Available in a variety of dressings.\", '$4.99');\n    const tiramisu = menuItemFactory('Tiramisu', 'images/menuItems/tiramisu.jpg', \"A delicious traditional coffee cake with a creamy filling.\", '$3.99');\n    const capsuni = menuItemFactory('Strawberry Tart','images/menuItems/capsuni.jpg',\"Freshly picked strawberries adorn this puffy base finished with cream of straberry topcoat.\",'$3.99');\n\n    const cozonac = menuItemFactory('Cozonac','images/menuItems/cozonac.jpg',\"A traditional Romanian dessert popular around Christmas time and Easter. But, you can still enjoy today! We won't tell anyone!\",'$2.99');\n    const televizor = menuItemFactory('Televizor','images/menuItems/televizor.jpg',\"Lemon filled chololate tart sure to pleasure your senses.\",'$2.99');\n    const eclair = menuItemFactory('Eclair','images/menuItems/eclair.jpg',\"French origin but loved by Romanians everywhere! Includes side custard dip.\",'$1.99');\n\n    const mere = menuItemFactory('Apple Pie','images/menuItems/mere.jpg',\"A classic, done right. Fresh apples baked to perfection and shredded for unique taste & texture\",'$4.99');\n    const cremsnit = menuItemFactory('Cremsnit','images/menuItems/cremsnit.jpg',\"Puff pastry sandwiching delicious egg filling. Dusted lightly in powdered sugar.\",'$5.99');\n    const cake = menuItemFactory('Chocolate Cake','images/menuItems/cake.jpg',\"A classic for chocolate lovers! Recognized world-wide.\",'$4.99');\n\n    // Attach menu items to the grid\n    grid.appendChild(buildCard(kurtos));\n    grid.appendChild(buildCard(tiramisu));\n    grid.appendChild(buildCard(capsuni));\n\n    grid.appendChild(buildCard(cozonac));\n    grid.appendChild(buildCard(televizor));\n    grid.appendChild(buildCard(eclair));\n\n    grid.appendChild(buildCard(mere));\n    grid.appendChild(buildCard(cremsnit));\n    grid.appendChild(buildCard(cake));\n\n   \n\n    // Attach grid to block\n    page.appendChild(grid);\n\n    // Attach block to page\n    main.appendChild(page);\n}\n\n\n// Returns a card element filling its contents from item passed in\nfunction buildCard(item){\n    // Create the card\n    const card = document.createElement('div');\n    card.classList.add('card');\n\n    // Attatch the heading\n    const cardHeading = document.createElement('div');\n    cardHeading.classList.add('cardHeading');\n    cardHeading.textContent = item.title;\n    card.appendChild(cardHeading);\n\n    // Attatch the image\n    const cardImg = document.createElement('img');\n    cardImg.setAttribute('src', item.imagePath);\n    cardImg.setAttribute('height', '200');\n    card.appendChild(cardImg);\n\n\n    // Attach the Description\n    const cardDesc = document.createElement('div');\n    cardDesc.classList.add('cardDesc');\n    cardDesc.textContent = item.desc;\n    card.appendChild(cardDesc);\n\n    // Attach the price\n    const cardPrice = document.createElement('div');\n    cardPrice.classList.add('cardPrice');\n    cardPrice.textContent = item.price;\n    card.appendChild(cardPrice);\n\n    return card;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadSite\": () => (/* binding */ loadSite)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nfunction loadSite(){\n    const content = document.querySelector('#content');\n\n    content.appendChild(createHeader());\n    content.appendChild(createNav());\n    content.appendChild(createMain());\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n}\n\nfunction createHeader(){\n    const header = document.createElement('div');\n    header.classList.add('header');\n    header.textContent = \"- Sibiu Sweets -\";\n    return header;\n}\n\nfunction createNav(){\n    // Creation of the parent container\n    const nav = document.createElement('div');\n    nav.classList.add('navBar');\n\n    // Creation of the individual elements\n    const navHome = document.createElement('button');\n    const navMenu = document.createElement('button');\n    const navContact = document.createElement('button');\n\n    navHome.classList.add('navBtn');\n    navMenu.classList.add('navBtn');\n    navContact.classList.add('navBtn');\n\n    navHome.textContent = \"Home\";\n    navMenu.textContent = \"Menu\";\n    navContact.textContent = \"Contact Us\";\n\n    // Adding event listeners\n    navHome.addEventListener('click', () => {\n        if (navHome.classList.contains('active')){\n            return;\n        } else {\n            setActiveBtn(navHome);\n            (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n        }\n    });\n    navMenu.addEventListener('click', () => {\n        if (navMenu.classList.contains('active')){\n            return;\n        } else {\n            setActiveBtn(navMenu);\n            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n        }\n    });\n    navContact.addEventListener('click', () => {\n        if (navContact.classList.contains('active')){\n            return;\n        } else {\n            setActiveBtn(navContact);\n            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact)();\n        }\n    });\n\n\n    // Adding individual elements to parent container\n    nav.appendChild(navHome);\n    nav.appendChild(navMenu);\n    nav.appendChild(navContact);\n\n    // We set the active button to home on default\n    setActiveBtn(navHome);\n\n    return nav;\n}\n\nfunction createMain(){\n    const main = document.createElement('div');\n    main.classList.add(\"main\");\n    main.setAttribute('id','main');\n    return main;\n}\n\n// Given a button in nav bar, sets it to active\nfunction setActiveBtn(btn){\n    const navBtns = document.querySelectorAll('.navBtn');\n\n    // We remove active status of all buttons first\n    navBtns.forEach((button) => {\n        button.classList.remove('active');\n    });\n\n    // Now, give the corresponding button the correct trait\n    btn.classList.add('active');\n}\n\n//# sourceURL=webpack://restaurant-page/./src/site.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;