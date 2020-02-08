import {
  creditOffer
} from "./data.js";
const offerError = document.querySelector(`.offer__error`);
const errorCreditName = offerError.querySelector(`span[data-name=error-credit-name]`);
const errorCreditValue = offerError.querySelector(`span[data-name=error-credit-value]`);
const offerForm = document.querySelector(`.offer form`);

const showMessageError = () => {
  offerError.classList.add(`offer__error--show`);
};

const hideMessageError = () => {
  offerError.classList.remove(`offer__error--show`);
};

const hideOfferForm = () => {
  offerForm.parentElement.classList.add(`offer--hidden`);
};

const showOfferForm = () => {
  offerForm.parentElement.classList.remove(`offer--hidden`);
};

const setDataInMessageErrorCarLoan = () => {
  errorCreditName.innerHTML = creditOffer.carLoan.creditNameError;
  errorCreditValue.innerHTML = creditOffer.carLoan.creditValueError;
};

const setDataInMessageErrorMortgage = () => {
  errorCreditName.innerHTML = creditOffer.mortgage.creditNameError;
  errorCreditValue.innerHTML = creditOffer.mortgage.creditValueError;
};

const setDataInMessageErrorConsumer = () => {
  errorCreditName.innerHTML = creditOffer.consumer.creditNameError;
  errorCreditValue.innerHTML = creditOffer.consumer.creditValueError;
};

export {
  showMessageError, hideMessageError, hideOfferForm, showOfferForm, setDataInMessageErrorCarLoan, setDataInMessageErrorMortgage, setDataInMessageErrorConsumer
};
