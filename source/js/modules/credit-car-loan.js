import {
  prettifyRubbles, prettifyYears, clearString
} from "./inputs-entry.js";
import {
  calculatePercentRateForCarLoan, calculateMonthlyPaymentForCarLoan, getCreditCarLoanSum, checkInsuranceCar, checkInsuranceLife, cleanOfferInputs, setSlyleDefaulForCarLoan
} from "./credit-car-loan-send.js";
import {
  closeRequestForm
} from "./request.js";

const carLoanCredit = document.querySelector(`.car-loan`);
const buttonBiggerCarLoan = carLoanCredit.querySelector(`.range-bar__control--max`);
const buttonSmallerCarLoan = carLoanCredit.querySelector(`.range-bar__control--min`);
const inputCarLoanCost = carLoanCredit.querySelector(`.car-loan__item input[name=car-loan-cost]`);
const carLoanCostMinAndMaxValue = carLoanCredit.querySelector(`.car-loan__item span[data-name=min-and-max-value]`);
const inputCarLoanContribution = carLoanCredit.querySelector(`.car-loan__item input[name=car-loan-contribution]`);
const rangeCarLoanContributionPercent = carLoanCredit.querySelector(`.car-loan__item input[name=car-loan-contribution-range]`);
const percentCarLoanSpanValue = carLoanCredit.querySelector(`.car-loan__item span[data-value=percent]`);
const inputCarLoanTermValue = carLoanCredit.querySelector(`.car-loan__item input[name=car-loan-time]`);
const rangeCarLoanTerm = carLoanCredit.querySelector(`.car-loan__item input[name=car-loan-term-range]`);
const scaleValueCostMin = Number(inputCarLoanCost.getAttribute(`data-min`));
const scaleValueCostMax = Number(inputCarLoanCost.getAttribute(`data-max`));
const scaleValueCostStep = Number(inputCarLoanCost.getAttribute(`data-step`));
const percentCurrent = Number(rangeCarLoanContributionPercent.getAttribute(`data-min`));
const percentMax = Number(rangeCarLoanContributionPercent.getAttribute(`data-max`));
const rangeCarLoanTermMin = Number(rangeCarLoanTerm.getAttribute(`data-min`));
const rangeCarLoanTermMax = Number(rangeCarLoanTerm.getAttribute(`data-max`));
const offerForm = document.querySelector(`.offer form`);
const inputCreditSum = offerForm.querySelector(`.offer__item input[name=credit-name]`);

const scaleBiggerCarLoanHandler = () => {
  closeRequestForm();
  setSlyleDefaulForCarLoan();
  setMinPercentValueForCarLoan();
  let scaleControlNumber = parseInt(clearString(inputCarLoanCost.value), 10);

  if (scaleControlNumber < scaleValueCostMin) {
    inputCarLoanCost.value = prettifyRubbles(scaleValueCostMin);
  } else if (scaleControlNumber <= (scaleValueCostMax - scaleValueCostStep)) {
    scaleControlNumber += scaleValueCostStep;
    inputCarLoanCost.value = prettifyRubbles(scaleControlNumber);
  }
  setPercentValueForCarLoan();
};

const scaleSmallerCarLoanHandler = () => {
  closeRequestForm();
  setSlyleDefaulForCarLoan();
  setMinPercentValueForCarLoan();
  let scaleControlNumber = parseInt(clearString(inputCarLoanCost.value), 10);

  if (scaleControlNumber > scaleValueCostMax) {
    inputCarLoanCost.value = prettifyRubbles(scaleValueCostMax);
  } else if (scaleControlNumber >= (scaleValueCostMin + scaleValueCostStep)) {
    scaleControlNumber -= scaleValueCostStep;
    inputCarLoanCost.value = prettifyRubbles(scaleControlNumber);
  }
  setPercentValueForCarLoan();
  getCreditCarLoanSum();
  calculateMonthlyPaymentForCarLoan();
};

const setMinContributionCarLoan = () => {
  let inputCurrentValue = parseInt(clearString(inputCarLoanCost.value), 10);
  let minContributionValue = (parseInt(clearString(inputCarLoanCost.value), 10) / 100) * percentCurrent;

  if (inputCurrentValue > scaleValueCostMin || inputCurrentValue < scaleValueCostMax) {
    inputCarLoanContribution.value = prettifyRubbles(minContributionValue.toFixed());
  }
};

const setMinPercentValueForCarLoan = () => {
  rangeCarLoanContributionPercent.value = `20`;
  percentCarLoanSpanValue.innerHTML = `20%`;
};

const setPercentValueForCarLoan = () => {
  closeRequestForm();
  setSlyleDefaulForCarLoan();
  let inputValue = inputCarLoanCost.value;
  let currentPercent = rangeCarLoanContributionPercent.value;
  let contributionPercent;

  percentCarLoanSpanValue.innerHTML = currentPercent + ` %`;
  contributionPercent = (parseInt(clearString(inputCarLoanCost.value), 10) / 100) * currentPercent;
  inputCarLoanContribution.value = prettifyRubbles(contributionPercent.toFixed());
  getCreditCarLoanSum();
  calculateMonthlyPaymentForCarLoan();
  calculatePercentRateForCarLoan();

  if (inputValue === ` рублей`) {
    inputCarLoanContribution.value = inputValue;
    inputCreditSum.value = inputValue;
    cleanOfferInputs();
    setMinPercentValueForCarLoan();
  }
};

const changeInputContributionForCarLoan = () => {
  closeRequestForm();
  let inputCostValue = parseInt(clearString(inputCarLoanCost.value), 10);
  let inputUserValue = parseInt(clearString(inputCarLoanContribution.value), 10);
  let inputChangePercent;

  inputChangePercent = Math.floor(inputUserValue * 100 / inputCostValue);
  rangeCarLoanContributionPercent.value = inputChangePercent;
  percentCarLoanSpanValue.innerHTML = String(rangeCarLoanContributionPercent.value) + ` %`;
  getCreditCarLoanSum();
  calculateMonthlyPaymentForCarLoan();

  if (inputCarLoanContribution.value === ` рублей`) {
    inputCreditSum.value = ` рублей`;
    setMinPercentValueForCarLoan();
    cleanOfferInputs();
  }
};

const minAndMaxUserContibutionForCarLoanHandler = () => {
  let inputCurrentValue = parseInt(clearString(inputCarLoanCost.value), 10);
  let inputUserContribution = parseInt(clearString(inputCarLoanContribution.value), 10);
  let userPercent = Math.floor(inputUserContribution * 100 / inputCurrentValue);

  if (userPercent < percentCurrent) {
    userPercent = percentCurrent;
  } else if (userPercent > percentMax) {
    userPercent = percentMax;
  }
  let contributionValue = inputCurrentValue * userPercent / 100;
  inputCarLoanContribution.value = prettifyRubbles(contributionValue.toFixed());
  getCreditCarLoanSum();
  calculateMonthlyPaymentForCarLoan();
};

const setMinCreditTermForCarLoan = () => {
  rangeCarLoanTerm.value = rangeCarLoanTermMin;
  inputCarLoanTermValue.value = prettifyYears(rangeCarLoanTerm.value);
};

const changeCreditTermForCarLoan = () => {
  closeRequestForm();
  inputCarLoanTermValue.value = prettifyYears(rangeCarLoanTerm.value);
  calculateMonthlyPaymentForCarLoan();
};

const changeinputCarLoanTermValueForCarLoan = () => {
  let inputTermCurrentValue = parseInt(clearString(inputCarLoanTermValue.value), 10);
  rangeCarLoanTerm.value = inputTermCurrentValue;
  calculateMonthlyPaymentForCarLoan();
};

const minAndMaxTermCarLoanHandler = () => {
  let inputTermCurrentValue = parseInt(clearString(inputCarLoanTermValue.value), 10);

  if (inputTermCurrentValue < rangeCarLoanTermMin) {
    inputCarLoanTermValue.value = prettifyYears(rangeCarLoanTermMin);
    rangeCarLoanTerm.value = rangeCarLoanTermMin;
  } else if (inputTermCurrentValue > rangeCarLoanTermMax) {
    inputCarLoanTermValue.value = prettifyYears(rangeCarLoanTermMax);
    rangeCarLoanTerm.value = rangeCarLoanTermMax;
  }
  calculateMonthlyPaymentForCarLoan();
};

const inputSumCarLoanChange = () => {
  setMinPercentValueForCarLoan();
  setPercentValueForCarLoan();
};

const creditCarLoanCalculator = () => {
  closeRequestForm();
  setSlyleDefaulForCarLoan();
  setMinContributionCarLoan();
  setMinPercentValueForCarLoan();
  getCreditCarLoanSum();
  calculatePercentRateForCarLoan();
  calculateMonthlyPaymentForCarLoan();
  setMinCreditTermForCarLoan();
  inputCarLoanCost.addEventListener(`input`, inputSumCarLoanChange);
  buttonBiggerCarLoan.addEventListener(`click`, scaleBiggerCarLoanHandler);
  buttonSmallerCarLoan.addEventListener(`click`, scaleSmallerCarLoanHandler);
  rangeCarLoanContributionPercent.addEventListener(`input`, setPercentValueForCarLoan);
  inputCarLoanContribution.addEventListener(`input`, changeInputContributionForCarLoan);
  inputCarLoanContribution.addEventListener(`change`, minAndMaxUserContibutionForCarLoanHandler);
  rangeCarLoanTerm.addEventListener(`input`, changeCreditTermForCarLoan);
  inputCarLoanTermValue.addEventListener(`input`, changeinputCarLoanTermValueForCarLoan);
  inputCarLoanTermValue.addEventListener(`change`, minAndMaxTermCarLoanHandler);
  checkInsuranceCar.addEventListener(`click`, calculatePercentRateForCarLoan);
  checkInsuranceLife.addEventListener(`click`, calculatePercentRateForCarLoan);
};

export {
  creditCarLoanCalculator, inputCarLoanContribution, inputCarLoanTermValue, inputCarLoanCost, scaleValueCostMin, scaleValueCostMax, carLoanCostMinAndMaxValue
};
