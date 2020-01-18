import {
  navMain, navToggler, openMenu
} from "./nav.js";
import {
  eyeIcon, popupOpenHandler, saveInLocalStorageHandler, showPasswordHandler
} from "./popup-login.js";
import {
  tab, tabContent, hideTab
} from "./tab.js";

const openLoginLink = document.querySelector(`.nav__user-link`);
const navItemLinks = document.querySelectorAll(`.nav__link`);
const submitForm = document.querySelector(`form`);

navMain.classList.add(`nav--closed`);

if (navMain) {
  navToggler.addEventListener(`click`, openMenu);

  navItemLinks.forEach(function (elem) {
    elem.addEventListener(`click`, openMenu);
  });
}

if (openLoginLink) {
  openLoginLink.addEventListener(`click`, popupOpenHandler);
}

if (submitForm) {
  submitForm.addEventListener(`submit`, saveInLocalStorageHandler);
}

if (eyeIcon) {
  eyeIcon.addEventListener(`mousedown`, showPasswordHandler);
}


if (tab) {
  tab.forEach(function (tab, i) {
    tab.addEventListener(`click`, function () {
      hideTab();
      this.classList.add(`services__tab-item--show`);
      tabContent[i].classList.add(`services__item--show`);
    });
  });
}
