import {
  prettifyRubbles, prettifyYears, clearString
} from "./inputs-entry.js";
import {
  creditOffer
} from "./data.js";
import {
  showMessageError, hideMessageError, hideOfferForm, showOfferForm, setDataInMessageErrorMortgage
} from "./calculator-helper.js";
import {
  inputMortgageCost, scaleValueMin, scaleValueMax, mortgageCostMinAndMaxValue
} from "./credit-mortgage.js";
import {
  ERROR_BORDER, openRequestForm
} from "./request.js";
const MATERNAL_CAPITAL = 470000;
const MIN_CREDIT_SUM = 500000;
const mortgageCredit = document.querySelector(`.mortgage`);
const inputMortgageContribution = mortgageCredit.querySelector(`.mortgage__item input[name=mortgage-contribution]`);
const rangeContributionPercent = mortgageCredit.querySelector(`.mortgage__item input[name=contribution-range]`);
const inputTermValue = mortgageCredit.querySelector(`.mortgage__item input[name=mortgage-time]`);
const checkMaternalCapital = mortgageCredit.querySelector(`.mortgage__checker input[name=maternal]`);
const offerForm = document.querySelector(`.offer form`);
const inputCreditSum = offerForm.querySelector(`.offer__item input[name=credit-name]`);
const inputCreditPercent = offerForm.querySelector(`.offer__item input[name=credit-percent]`);
const inputCreditMonthlyPayment = offerForm.querySelector(`.offer__item input[name=credit-monthly-payment]`);
const inputCreditIncome = offerForm.querySelector(`.offer__item input[name=credit-income]`);
const inputCreditSumLabel = offerForm.querySelector(`.offer__item label[data-name=credit-name]`);
const requestForm = document.querySelector(`.request`);
const requestInputCreditName = requestForm.querySelector(`.request__item input[name=request-credit-name]`);
const requestCostObject = requestForm.querySelector(`.request__item input[name=request-object-cost]`);
const requestContribution = requestForm.querySelector(`.request__item input[name=request-first-contribution]`);
const requestCreditTerm = requestForm.querySelector(`.request__item input[name=request-credit-term]`);
const requestCostObjectName = requestForm.querySelector(`.request__item label[data-cost-name=request-cost-name]`);
const requestContributionItem = requestForm.querySelector(`.request__item--contribution`);

const cleanOfferInputs = () => {
  inputCreditMonthlyPayment.value = `рублей`;
  inputCreditIncome.value = `рублей`;
  inputCreditSumLabel.innerHTML = creditOffer.mortgage.creditName;
};

const minCreditMortgageSumHandler = () => {
  let inputCurrentValue = parseInt(clearString(inputMortgageCost.value), 10);
  let currentCreditSum = parseInt(clearString(inputCreditSum.value), 10);

  if (inputMortgageContribution.value === inputMortgageCost.value || currentCreditSum < MIN_CREDIT_SUM || inputCurrentValue < 4) {
    showMessageError();
    setDataInMessageErrorMortgage();
    hideOfferForm();
  } else {
    hideMessageError();
    showOfferForm();
  }
};

const getCreditMortgageSum = () => {
  let inputMortgageContributionValue = parseInt(clearString(inputMortgageContribution.value), 10);

  let inputCurrentValue = parseInt(clearString(inputMortgageCost.value), 10);
  let currentCreditSum = inputCurrentValue - inputMortgageContributionValue;

  if (checkMaternalCapital.checked) {
    currentCreditSum = inputCurrentValue - inputMortgageContributionValue - MATERNAL_CAPITAL;
  } else {
    currentCreditSum = inputCurrentValue - inputMortgageContributionValue;
  }

  inputCreditSum.value = prettifyRubbles(currentCreditSum);
  inputCreditSumLabel.innerHTML = creditOffer.mortgage.creditName;

  checkMaternalCapital.addEventListener(`click`, () => {
    if (checkMaternalCapital.checked) {
      currentCreditSum = inputCurrentValue - inputMortgageContributionValue - MATERNAL_CAPITAL;
      inputCreditSum.value = prettifyRubbles(currentCreditSum);
    } else {
      currentCreditSum = inputCurrentValue - inputMortgageContributionValue;
      inputCreditSum.value = prettifyRubbles(currentCreditSum);
    }
    minCreditMortgageSumHandler();
    calculateMonthlyPayment();
  });

  minCreditMortgageSumHandler();
};

const calculatePercentRate = () => {
  let currentPercent = parseInt(rangeContributionPercent.value, 10);

  if (currentPercent >= 15) {
    inputCreditPercent.value = `8,50%`;
  } else if (currentPercent < 15) {
    inputCreditPercent.value = `9,40%`;
  }
};

const calculateMonthlyPayment = () => {
  let creditTerm = parseInt(clearString(inputTermValue.value), 10);
  let currentPercentValue = parseInt(rangeContributionPercent.value, 10);
  let creditSumValue = parseInt(clearString(inputCreditSum.value), 10);

  let creditPeriod = creditTerm * 12;
  let monthlyPercentValue;
  let monthlyPayment;

  if (currentPercentValue >= 15) {
    monthlyPercentValue = 0.007083;
  } else if (currentPercentValue < 15) {
    monthlyPercentValue = 0.00783;
  }

  monthlyPayment = creditSumValue * (monthlyPercentValue + (monthlyPercentValue / (Math.pow((1 + monthlyPercentValue), creditPeriod) - 1)));
  inputCreditMonthlyPayment.value = prettifyRubbles(monthlyPayment.toFixed());

  calculateIncomeForCredit();
};

const calculateIncomeForCredit = () => {
  let creditMonthlyPayment = parseInt(clearString(inputCreditMonthlyPayment.value), 10);
  let incomeForCredit = creditMonthlyPayment * 100 / 45;

  inputCreditIncome.value = prettifyRubbles(incomeForCredit.toFixed());
};

const issueRequestHandler = (evt) => {
  evt.preventDefault();
  let inputCurrentValue = parseInt(clearString(inputMortgageCost.value), 10);
  let inputMortgageContributionValue = parseInt(clearString(inputMortgageContribution.value), 10);
  let inputTermCurrentValue = parseInt(clearString(inputTermValue.value), 10);
  if (inputCurrentValue >= scaleValueMin && inputCurrentValue <= scaleValueMax) {
    openRequestForm();
    requestInputCreditName.value = creditOffer.mortgage.creditGoal;
    requestCostObjectName.innerHTML = creditOffer.mortgage.creditCostObject;
    requestCostObject.value = prettifyRubbles(inputCurrentValue);
    requestContributionItem.style.display = `flex`;
    requestContribution.value = prettifyRubbles(inputMortgageContributionValue);
    requestCreditTerm.value = prettifyYears(inputTermCurrentValue);
  } else {
    inputMortgageCost.style.border = ERROR_BORDER;
    mortgageCostMinAndMaxValue.style.color = `#c4151c`;
  }
};

const setSlyleDefaulForMortgage = () => {
  inputMortgageCost.style.border = null;
  mortgageCostMinAndMaxValue.style.color = `#707c87`;
};

export {
  calculatePercentRate, calculateMonthlyPayment, calculateIncomeForCredit, getCreditMortgageSum, cleanOfferInputs, inputCreditIncome, setSlyleDefaulForMortgage, offerForm, inputCreditSum, inputCreditPercent, inputCreditMonthlyPayment, inputCreditSumLabel, requestForm, requestInputCreditName, requestCostObject, requestContribution, requestCreditTerm, requestCostObjectName, requestContributionItem, issueRequestHandler
};
