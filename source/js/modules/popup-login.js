import {
  disableScrolling, enableScrolling
} from "./scroll.js";

const ESC_KEYCODE = 27;
const popupElement = document.querySelector(`.popup-login`);
const popupClose = popupElement.querySelector(`.popup-login__close`);
const popupSubmitBtn = popupElement.querySelector(`.popup-login__submit`);
const userName = popupElement.querySelector(`[name = login]`);
const userPassword = popupElement.querySelector(`[name = password]`);
const eyeIcon = popupElement.querySelector(`.form__icon`);
let storageName = localStorage.getItem(`login`);
let storagePassword = localStorage.getItem(`password`);


const popupCloserHandler = () => {
  popupElement.classList.remove(`popup-login--show`);
  enableScrolling();
};

const saveInLocalStorageHandler = () => {
  if (userName.value || userPassword.value) {
    localStorage.setItem(`login`, userName.value);
    localStorage.setItem(`password`, userPassword.value);
    popupCloserHandler();
  }
};

const getInLocalStorage = () => {
  if (storageName || storagePassword) {
    userName.value = storageName;
    userPassword.value = storagePassword;
    popupSubmitBtn.focus();
  }
};

const closeByEsc = () => {
  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      popupCloserHandler();
    }
  });
};

const closeOnClickOutsideHandler = (e) => {
  let target = e.target;

  if (target.classList.contains(`popup-login__overlay`)) {
    popupCloserHandler();
  }
};

const showPasswordHandler = (evt) => {
  evt.preventDefault();
  userPassword.setAttribute(`type`, `text`);

  let onMouseUp = (upEvt) => {
    upEvt.preventDefault();
    userPassword.setAttribute(`type`, `password`);

    document.removeEventListener(`mouseup`, onMouseUp);
  };

  document.addEventListener(`mouseup`, onMouseUp);
};

const popupOpenHandler = () => {
  if (popupElement) {
    popupElement.classList.add(`popup-login--show`);
    userName.focus();
    getInLocalStorage();
    disableScrolling();
  }

  popupClose.addEventListener(`click`, popupCloserHandler);
  closeByEsc();
  document.addEventListener(`click`, closeOnClickOutsideHandler);
};

export {
  eyeIcon, popupOpenHandler, saveInLocalStorageHandler, showPasswordHandler
};
