const offerError = document.querySelector(`.offer__error`);
const offerForm = document.querySelector(`.offer form`);

let showMessageError = () => {
  offerError.classList.add(`offer__error--show`);
};

let hideMessageError = () => {
  offerError.classList.remove(`offer__error--show`);
};

let hideOfferForm = () => {
  offerForm.parentElement.classList.add(`offer--hidden`);
};

let showOfferForm = () => {
  offerForm.parentElement.classList.remove(`offer--hidden`);
};

export {
  showMessageError, hideMessageError, hideOfferForm, showOfferForm
};
