const ESC_KEYCODE = 27;
const popupElement = document.querySelector(`.popup-login`);
const popupClose = popupElement.querySelector(`.popup-login__close`);
const popupSubmitBtn = popupElement.querySelector(`.popup-login__submit`);
const userName = popupElement.querySelector(`[name = login]`);
const userPassword = popupElement.querySelector(`[name = password]`);
const eyeIcon = popupElement.querySelector(`.form__icon`);
const overlayBlock = document.querySelector(`.login`);
let storageName = localStorage.getItem(`login`);
let storagePassword = localStorage.getItem(`password`);

let saveInLocalStorageHandler = (evt) => {
  if (!userName.value || !userPassword.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem(`login`, userName.value);
    localStorage.setItem(`password`, userPassword.value);
  }
};

let getInLocalStorage = () => {
  if (storageName || storagePassword) {
    userName.value = storageName;
    userPassword.value = storagePassword;
    popupSubmitBtn.focus();
  }
};

let popupCloserHandler = () => {
  popupElement.classList.remove(`popup-login--show`);
  overlayBlock.classList.remove(`overlay`);
};

let closeByEsc = () => {
  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      popupCloserHandler();
    }
  });
};

let CloseOnClickOutsideHandler = (e) => {
  let target = e.target;

  if (target.classList.contains(`login`)) {
    popupCloserHandler();
  }
};

let showPasswordHandler = (evt) => {
  evt.preventDefault();
  userPassword.setAttribute(`type`, `text`);

  let onMouseUp = (upEvt) => {
    upEvt.preventDefault();
    userPassword.setAttribute(`type`, `password`);

    document.removeEventListener(`mouseup`, onMouseUp);
  };

  document.addEventListener(`mouseup`, onMouseUp);
};

let popupOpenHandler = () => {
  if (popupElement) {
    popupElement.classList.add(`popup-login--show`);
    overlayBlock.classList.add(`overlay`);
    userName.focus();
    getInLocalStorage();
  }

  popupClose.addEventListener(`click`, popupCloserHandler);
  closeByEsc();
  document.addEventListener(`click`, CloseOnClickOutsideHandler);
};

export {
  eyeIcon, storageName, storagePassword, popupOpenHandler, saveInLocalStorageHandler, showPasswordHandler
};
