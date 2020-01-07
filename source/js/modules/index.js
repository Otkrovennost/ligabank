'use strict'

import { navMain, navToggler, openMenu } from "./nav.js";
import { escKeycode, eyeIcon, popupOpenHandler, showPasswordHandler } from "./popup.js";
import { localStorageUse } from "./local-storage.js";

let openLoginLink = document.querySelector('.nav__user-link');
let navItemLinks = document.querySelectorAll('.nav__link');
navMain.classList.add('nav--closed');
navMain.classList.remove('nav--nojs');

if (navMain) {
  navToggler.addEventListener('click', openMenu);

  navItemLinks.forEach(function (elem) {
    elem.addEventListener('click', openMenu);
  });
}

if (openLoginLink) {
  openLoginLink.addEventListener('click', popupOpenHandler);
}

if (eyeIcon) {
  eyeIcon.addEventListener('mousedown', showPasswordHandler);
}
