import {
  disableScrolling, enableScrolling
} from "./scroll.js";
import {
  hideCalculatorBlock
} from "./calculator-main.js";
const ESC_KEYCODE = 27;
const successMessage = document.querySelector(`.success`);
const successCloseButton = document.querySelector(`.success__closer`);
const requestForm = document.querySelector(`.request`);
const userFullName = requestForm.querySelector(`[name = user-name]`);
const userTell = requestForm.querySelector(`[name = user-tel]`);
const userEmail = requestForm.querySelector(`[name = user-email]`);
const requestSubmit = requestForm.querySelector(`.request__submit`);
let storageUserFullName = localStorage.getItem(`user-full-name`);
let storageUserTell = localStorage.getItem(`user-tell`);
let storageUserEmail = localStorage.getItem(`user-email`);

let saveInLocalStorageRequest = () => {
  if (userFullName.value || userTell.value || userEmail.value) {
    localStorage.setItem(`user-full-name`, userFullName.value);
    localStorage.setItem(`user-tell`, userTell.value);
    localStorage.setItem(`user-email`, userEmail.value);
  }
};

let getInLocalRequestStorage = () => {
  if (storageUserFullName || storageUserTell || storageUserEmail) {
    userFullName.value = storageUserFullName;
    userTell.value = storageUserTell;
    userEmail.value = storageUserEmail;
    requestSubmit.focus();
  }
};

let openRequestForm = () => {
  if (requestForm.classList.contains(`request--show`)) {
    requestForm.classList.remove(`request--show`);
  } else {
    requestForm.classList.add(`request--show`);
    userFullName.focus();
    getInLocalRequestStorage();
  }
};

let successMessageCloserHandler = () => {
  successMessage.classList.remove(`success--show`);
  saveInLocalStorageRequest();
  enableScrolling();
};

let closeByEsc = () => {
  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      successMessageCloserHandler();
    }
  });
};

let CloseOnClickOutsideHandler = (e) => {
  let target = e.target;

  if (target.classList.contains(`success__overlay`)) {
    successMessageCloserHandler();
  }
};

let hideRequestBlock = () => {
  requestForm.classList.remove(`request--show`);
};

let successMessageOpenHandler = () => {
  if (successMessage) {
    hideRequestBlock();
    hideCalculatorBlock();
    successMessage.classList.add(`success--show`);
    disableScrolling();
  }

  successCloseButton.addEventListener(`click`, successMessageCloserHandler);
  closeByEsc();
  document.addEventListener(`click`, CloseOnClickOutsideHandler);
};

let submitRequestForm = (evt) => {
  evt.preventDefault();
  saveInLocalStorageRequest();
  successMessageOpenHandler();
};

export {
  openRequestForm, requestForm, submitRequestForm
};
