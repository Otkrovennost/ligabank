const ESC_KEYCODE = 27;
const popupElement = document.querySelector(`.popup`);
const popupClose = popupElement.querySelector(`.popup__close`);
const userName = popupElement.querySelector(`[name = login]`);
const userPassword = popupElement.querySelector(`[name = password]`);
const eyeIcon = popupElement.querySelector(`.login-block__icon`);
let storageName = localStorage.getItem(`login`);
let storagePassword = localStorage.getItem(`password`);

let SaveInLocalStorageHandler = () => {
  if (userName.value || userPassword.value) {
    localStorage.setItem(`login`, userName.value);
    localStorage.setItem(`password`, userPassword.value);
  }
};

let getInLocalStorage = () => {
  if (storageName || storagePassword) {
    userName.value = storageName;
    userPassword.value = storagePassword;
  }
};

let popupCloserHandler = () => {
  popupElement.classList.remove(`popup--show`);
};

let closeByEsc = () => {
  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      popupElement.classList.remove(`popup--show`);
    }
  });
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
    popupElement.classList.add(`popup--show`);
    userName.focus();
    getInLocalStorage();
  }

  popupClose.addEventListener(`click`, popupCloserHandler);
  closeByEsc();
};

export { eyeIcon, popupOpenHandler, SaveInLocalStorageHandler, showPasswordHandler }
