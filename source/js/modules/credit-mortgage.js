import {
  prettifyRubbles, prettifyYears, clearString
} from "./inputs-entry.js";
import {
  closeRequestForm
} from "./request.js";
import {
  calculatePercentRate, calculateMonthlyPayment, getCreditMortgageSum, cleanOfferInputs, setSlyleDefaulForMortgage
} from "./credit-mortgage-send.js";

const mortgageCredit = document.querySelector(`.mortgage`);
const buttonBiggerMortgage = mortgageCredit.querySelector(`.range-bar__control--max`);
const buttonSmallerMortgage = mortgageCredit.querySelector(`.range-bar__control--min`);
const inputMortgageCost = mortgageCredit.querySelector(`.mortgage__item input[name=mortgage-cost]`);
const mortgageCostMinAndMaxValue = mortgageCredit.querySelector(`.mortgage__item span[data-name=min-and-max-value]`);
const inputMortgageContribution = mortgageCredit.querySelector(`.mortgage__item input[name=mortgage-contribution]`);
const rangeContributionPercent = mortgageCredit.querySelector(`.mortgage__item input[name=contribution-range]`);
const percentSpanValue = mortgageCredit.querySelector(`.mortgage__item span[data-value=percent]`);
const inputTermValue = mortgageCredit.querySelector(`.mortgage__item input[name=mortgage-time]`);
const rangeTerm = mortgageCredit.querySelector(`.mortgage__item input[name=term-range]`);
const scaleValueMin = Number(inputMortgageCost.getAttribute(`data-min`));
const scaleValueMax = Number(inputMortgageCost.getAttribute(`data-max`));
const scaleValueStep = Number(inputMortgageCost.getAttribute(`data-step`));
const contributionPercentCurrent = Number(rangeContributionPercent.getAttribute(`data-min`));
const contributionPercentMax = Number(rangeContributionPercent.getAttribute(`data-max`));
const rangeTermMin = Number(rangeTerm.getAttribute(`data-min`));
const rangeTermMax = Number(rangeTerm.getAttribute(`data-max`));
const offerForm = document.querySelector(`.offer form`);
const inputCreditSum = offerForm.querySelector(`.offer__item input[name=credit-name]`);
const inputCreditPercent = offerForm.querySelector(`.offer__item input[name=credit-percent]`);

const scaleBiggerMortgageHandler = () => {
  closeRequestForm();
  setSlyleDefaulForMortgage();
  let scaleControlNumber = parseInt(clearString(inputMortgageCost.value), 10);

  if (scaleControlNumber < scaleValueMin) {
    inputMortgageCost.value = prettifyRubbles(scaleValueMin);
  } else if (scaleControlNumber <= (scaleValueMax - scaleValueStep)) {
    scaleControlNumber += scaleValueStep;
    inputMortgageCost.value = prettifyRubbles(scaleControlNumber);
  }
  setMinPercentValue();
  setPercentValue();
};

const scaleSmallerMortgageHandler = () => {
  closeRequestForm();
  setSlyleDefaulForMortgage();
  let scaleControlNumber = parseInt(clearString(inputMortgageCost.value), 10);

  if (scaleControlNumber > scaleValueMax) {
    inputMortgageCost.value = prettifyRubbles(scaleValueMax);
  } else if (scaleControlNumber >= (scaleValueMin + scaleValueStep)) {
    scaleControlNumber -= scaleValueStep;
    inputMortgageCost.value = prettifyRubbles(scaleControlNumber);
  }
  setMinPercentValue();
  setPercentValue();
  getCreditMortgageSum();
  calculateMonthlyPayment();
};

const setMinContributionValue = () => {
  let inputCurrentValue = parseInt(clearString(inputMortgageCost.value), 10);
  let minContributionValue = (parseInt(clearString(inputMortgageCost.value), 10) / 100) * contributionPercentCurrent;

  if (inputCurrentValue > scaleValueMin || inputCurrentValue < scaleValueMax) {
    inputMortgageContribution.value = prettifyRubbles(minContributionValue.toFixed());
  }
};

const setMinPercentValue = () => {
  rangeContributionPercent.value = `10`;
  percentSpanValue.innerHTML = `10%`;
};

const setMinPercentValueForOffer = () => {
  inputCreditPercent.value = `9,40%`;
};

const setPercentValue = () => {
  closeRequestForm();
  setSlyleDefaulForMortgage();
  let inputValue = inputMortgageCost.value;
  let currentPercent = rangeContributionPercent.value;
  let contributionPercent;

  percentSpanValue.innerHTML = currentPercent + ` %`;
  contributionPercent = (parseInt(clearString(inputMortgageCost.value), 10) / 100) * currentPercent;
  inputMortgageContribution.value = prettifyRubbles(contributionPercent.toFixed());
  getCreditMortgageSum();
  calculateMonthlyPayment();
  calculatePercentRate();

  if (inputValue === ` рублей`) {
    inputMortgageContribution.value = ` рублей`;
    inputCreditSum.value = ` рублей`;
    setMinPercentValue();
    cleanOfferInputs();
  }
};

const changeInputContributionValue = () => {
  closeRequestForm();
  let inputCostValue = parseInt(clearString(inputMortgageCost.value), 10);
  let inputUserValue = parseInt(clearString(inputMortgageContribution.value), 10);
  let inputChangePercent;

  inputChangePercent = Math.floor(inputUserValue * 100 / inputCostValue);
  rangeContributionPercent.value = inputChangePercent;
  percentSpanValue.innerHTML = String(rangeContributionPercent.value) + ` %`;
  getCreditMortgageSum();
  calculateMonthlyPayment();

  if (inputMortgageContribution.value === ` рублей`) {
    inputCreditSum.value = ` рублей`;
    setMinPercentValue();
    cleanOfferInputs();
  }
};

const minAndMaxUserContributionInput = () => {
  let inputCurrentValue = parseInt(clearString(inputMortgageCost.value), 10);
  let inputUserContribution = parseInt(clearString(inputMortgageContribution.value), 10);
  let currentPercent = Math.floor(inputUserContribution * 100 / inputCurrentValue);

  if (currentPercent < contributionPercentCurrent) {
    currentPercent = contributionPercentCurrent;
  } else if (currentPercent > contributionPercentMax) {
    currentPercent = contributionPercentMax;
  }
  let contributionValue = inputCurrentValue * currentPercent / 100;
  inputMortgageContribution.value = prettifyRubbles(contributionValue.toFixed());
  getCreditMortgageSum();
  calculateMonthlyPayment();
};

const setMinCreditTerm = () => {
  rangeTerm.value = rangeTermMin;
  inputTermValue.value = prettifyYears(rangeTerm.value);
};

const changeCreditTerm = () => {
  closeRequestForm();
  inputTermValue.value = prettifyYears(rangeTerm.value);
  calculateMonthlyPayment();
};

const changeInputTermValue = () => {
  closeRequestForm();
  let inputTermCurrentValue = parseInt(clearString(inputTermValue.value), 10);
  rangeTerm.value = inputTermCurrentValue;
  calculateMonthlyPayment();

  // if (inputTermValue.value === ` лет`) {
  //   cleanOfferInputs();
  // }
};

const minAndMaxTermHandler = () => {
  let inputTermCurrentValue = parseInt(clearString(inputTermValue.value), 10);

  if (inputTermCurrentValue < rangeTermMin) {
    inputTermValue.value = prettifyYears(rangeTermMin);
    rangeTerm.value = rangeTermMin;
  } else if (inputTermCurrentValue > rangeTermMax) {
    inputTermValue.value = prettifyYears(rangeTermMax);
    rangeTerm.value = rangeTermMax;
  }
  calculateMonthlyPayment();
};

const inputCostMortgageChange = () => {
  setMinPercentValue();
  setPercentValue();
};

const contributionPercentHandler = () => {
  setPercentValue();
  calculatePercentRate();
};

const creditMortgageCalculator = () => {
  closeRequestForm();
  setSlyleDefaulForMortgage();
  setMinContributionValue();
  setMinPercentValue();
  setMinPercentValueForOffer();
  getCreditMortgageSum();
  calculateMonthlyPayment();
  setMinCreditTerm();
  inputMortgageCost.addEventListener(`input`, inputCostMortgageChange);
  buttonBiggerMortgage.addEventListener(`click`, scaleBiggerMortgageHandler);
  buttonSmallerMortgage.addEventListener(`click`, scaleSmallerMortgageHandler);
  rangeContributionPercent.addEventListener(`input`, contributionPercentHandler);
  inputMortgageContribution.addEventListener(`input`, changeInputContributionValue);
  inputMortgageContribution.addEventListener(`change`, minAndMaxUserContributionInput);
  rangeTerm.addEventListener(`input`, changeCreditTerm);
  inputTermValue.addEventListener(`input`, changeInputTermValue);
  inputTermValue.addEventListener(`change`, minAndMaxTermHandler);
};

export {
  mortgageCredit, creditMortgageCalculator, inputMortgageCost, scaleValueMin, scaleValueMax, mortgageCostMinAndMaxValue
};
