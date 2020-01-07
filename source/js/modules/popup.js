import { bodyBlock } from "./nav.js";

const escKeycode = 27;
let popupElement = document.querySelector('.popup');
let popupClose = popupElement.querySelector('.popup__close');
let userName = popupElement.querySelector("[name=name]");
let eyeIcon = document.querySelector('.login-block__icon');
let userPassword = document.querySelector("[name=password]");

let popupCloserHandler = () => {
  popupElement.classList.remove('popup--show');
  bodyBlock.style.overflow = "auto";
};

let popupOpenHandler = () => {
  if (popupElement) {
    popupElement.classList.add('popup--show');
    bodyBlock.style.overflow = "hidden";
    userName.focus();
  }

  popupClose.addEventListener('click', popupCloserHandler);

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === escKeycode) {
      popupElement.classList.remove('popup--show');
      bodyBlock.style.overflow = "auto";
    }
  });
};

let showPasswordHandler = (evt) => {
  evt.preventDefault();
  userPassword.setAttribute('type', 'text');

  let onMouseUp = (upEvt) => {
    upEvt.preventDefault();
    userPassword.setAttribute('type', 'password');

    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mouseup', onMouseUp);
};

export { escKeycode, eyeIcon, popupOpenHandler, showPasswordHandler }
