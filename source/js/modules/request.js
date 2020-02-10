import {
  disableScrolling, enableScrolling
} from "./scroll.js";
import {
  hideCalculatorBlock
} from "./calculator-main.js";
import {
  clearString
} from "./inputs-entry.js";
const ESC_KEYCODE = 27;
const ERROR_BORDER = `1px solid #c4151c`;
const mailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const successMessage = document.querySelector(`.success`);
const successCloseButton = document.querySelector(`.success__closer`);
const requestForm = document.querySelector(`.request`);
const requestMainForm = document.querySelector(`.request form`);
const userFullName = requestForm.querySelector(`input[name = user-name]`);
const userTell = requestForm.querySelector(`input[name = user-tel]`);
const userEmail = requestForm.querySelector(`input[name = user-email]`);
const inputRequestNumber = requestForm.querySelector(`input[name = request-credit-number]`);
const requestSubmit = requestForm.querySelector(`.request__submit`);
const requestLink = document.querySelector(`.offer__link`);
let storageUserFullName = localStorage.getItem(`user-full-name`);
let storageUserTell = localStorage.getItem(`user-tell`);
let storageUserEmail = localStorage.getItem(`user-email`);

const saveInLocalStorageRequest = () => {
  if (userFullName.value || userTell.value || userEmail.value) {
    localStorage.setItem(`user-full-name`, userFullName.value);
    localStorage.setItem(`user-tell`, userTell.value);
    localStorage.setItem(`user-email`, userEmail.value);
  }
};

const getInLocalRequestStorage = () => {
  if (storageUserFullName || storageUserTell || storageUserEmail) {
    userFullName.value = storageUserFullName;
    userTell.value = storageUserTell;
    userEmail.value = storageUserEmail;
    requestSubmit.focus();
  }
};

const increaseRequestNumber = () => {
  let requestNumberCurrentValue = clearString(inputRequestNumber.value.replace(/(^| )(0+)/g, ``));
  let numberForIncrease = 1;
  requestNumberCurrentValue = Number(requestNumberCurrentValue) + numberForIncrease;

  if (requestNumberCurrentValue < 10) {
    inputRequestNumber.value = `№ 000` + requestNumberCurrentValue;
  } else if (requestNumberCurrentValue >= 10 && requestNumberCurrentValue < 100) {
    inputRequestNumber.value = `№ 00` + requestNumberCurrentValue;
  } else if (requestNumberCurrentValue >= 100 && requestNumberCurrentValue < 1000) {
    inputRequestNumber.value = `№ 0` + requestNumberCurrentValue;
  } else {
    inputRequestNumber.value = `№` + requestNumberCurrentValue;
  }
};

const openRequestForm = () => {
  requestForm.classList.remove(`request--error`);
  requestForm.classList.add(`request--show`);
  setBaseStyleForInputsBorder();
  userFullName.focus();
  getInLocalRequestStorage();
};

const closeRequestForm = () => {
  if (requestForm.classList.contains(`request--show`)) {
    requestForm.classList.remove(`request--show`);
  }
};

const closeByEsc = () => {
  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      successMessageCloserHandler();
    }
  });
};

const CloseOnClickOutsideHandler = (e) => {
  let target = e.target;

  if (target.classList.contains(`success__overlay`)) {
    successMessageCloserHandler();
  }
};

const hideRequestBlock = () => {
  requestForm.classList.remove(`request--show`);
};

const validateUserName = () => {
  let flag = true;
  if (userFullName.value === ``) {
    flag = false;
  }
  return flag;
};

const validateUserEmail = () => {
  let flag = true;
  if (!mailRegEx.test(userEmail.value)) {
    flag = false;
  }
  return flag;
};

const validateTell = () => {
  let flag;
  if (userTell.value.length === 16) {
    flag = true;
  } else {
    flag = false;
  }
  return flag;
};

const setErrorBorderForName = () => {
  requestForm.classList.remove(`request--error`);
  if (!validateUserName()) {
    userFullName.style.border = ERROR_BORDER;
  } else {
    userFullName.style.border = null;
  }
};

const setErrorBorderForEmail = () => {
  requestForm.classList.remove(`request--error`);
  if (!validateUserEmail()) {
    userEmail.style.border = ERROR_BORDER;
  } else {
    userEmail.style.border = null;
  }
};

const setErrorBorderForTell = () => {
  requestForm.classList.remove(`request--error`);
  if (!validateTell()) {
    userTell.style.border = ERROR_BORDER;
  } else {
    userTell.style.border = null;
  }
};

const setBaseStyleForInputsBorder = () => {
  userFullName.style.border = null;
  userEmail.style.border = null;
  userTell.style.border = null;
};

const changeFormInputsValue = () => {
  setBaseStyleForInputsBorder();
  userFullName.addEventListener(`change`, setErrorBorderForName);
  userEmail.addEventListener(`change`, setErrorBorderForEmail);
  userTell.addEventListener(`change`, setErrorBorderForTell);
};

const successMessageCloserHandler = () => {
  successMessage.classList.remove(`success--show`);
  saveInLocalStorageRequest();
  enableScrolling();
};

const successMessageOpenHandler = () => {
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

const submitRequestForm = (evt) => {
  evt.preventDefault();
  if (validateUserName() && validateUserEmail() && validateTell()) {
    requestForm.classList.remove(`request--error`);
    increaseRequestNumber();
    saveInLocalStorageRequest();
    successMessageOpenHandler();
  } else {
    requestForm.classList.add(`request--error`);
  }
};

const resetForm = () => {
  requestMainForm.reset();
};

export {
  requestForm, submitRequestForm, closeRequestForm, requestLink, ERROR_BORDER, openRequestForm, changeFormInputsValue, resetForm, saveInLocalStorageRequest, requestSubmit
};
