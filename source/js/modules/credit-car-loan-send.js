import {
  prettifyRubbles, prettifyYears, clearString
} from "./inputs-entry.js";
import {
  creditOffer
} from "./data.js";
import {
  showMessageError, hideMessageError, hideOfferForm, showOfferForm, setDataInMessageErrorCarLoan
} from "./calculator-helper.js";
import {
  inputCreditSum, inputCreditPercent, inputCreditMonthlyPayment, inputCreditIncome, inputCreditSumLabel, requestInputCreditName, requestCostObject, requestContribution, requestCreditTerm, requestCostObjectName, requestContributionItem
} from "./credit-mortgage-send.js";
import {
  inputCarLoanCost, inputCarLoanContribution, inputCarLoanTermValue, scaleValueCostMin, scaleValueCostMax, carLoanCostMinAndMaxValue
} from "./credit-car-loan.js";
import {
  ERROR_BORDER, openRequestForm
} from "./request.js";
const carLoanCredit = document.querySelector(`.car-loan`);
const MIN_CREDIT_AUTO_SUM = 200000;
const checkInsuranceCar = carLoanCredit.querySelector(`.car-loan__checker input[name=insurance-car]`);
const checkInsuranceLife = carLoanCredit.querySelector(`.car-loan__checker input[name=insurance-life]`);

const cleanOfferInputs = () => {
  inputCreditMonthlyPayment.value = `рублей`;
  inputCreditIncome.value = `рублей`;
};

const minCreditCarLoanSumHandler = () => {
  let inputCurrentValue = parseInt(clearString(inputCarLoanCost.value), 10);
  let currentCreditSum = parseInt(clearString(inputCreditSum.value), 10);

  if (inputCarLoanContribution.value === inputCarLoanCost.value || currentCreditSum < MIN_CREDIT_AUTO_SUM || inputCurrentValue < 4) {
    hideOfferForm();
    showMessageError();
    setDataInMessageErrorCarLoan();
  } else {
    hideMessageError();
    showOfferForm();
  }
};

const getCreditCarLoanSum = () => {
  let inputCarLoanContributionValue = parseInt(clearString(inputCarLoanContribution.value), 10);

  let inputCurrentValue = parseInt(clearString(inputCarLoanCost.value), 10);
  let currentCreditSum = inputCurrentValue - inputCarLoanContributionValue;
  inputCreditSumLabel.innerHTML = creditOffer.carLoan.creditName;
  inputCreditSum.value = prettifyRubbles(currentCreditSum);
  minCreditCarLoanSumHandler();
};

const calculatePercentRateForCarLoan = () => {
  let inputCurrentValue = parseInt(clearString(inputCarLoanCost.value), 10);

  if (checkInsuranceCar.checked && checkInsuranceLife.checked) {
    inputCreditPercent.value = `3,50%`;
  } else if (checkInsuranceCar.checked || checkInsuranceLife.checked) {
    inputCreditPercent.value = `8,50%`;
  } else if (inputCurrentValue >= 2000000) {
    inputCreditPercent.value = `15,00%`;
  } else {
    inputCreditPercent.value = `16,00%`;
  }
  calculateMonthlyPaymentForCarLoan();
};

const calculateMonthlyPaymentForCarLoan = () => {
  let creditTerm = parseInt(clearString(inputCarLoanTermValue.value), 10);
  let creditSumValue = parseInt(clearString(inputCreditSum.value), 10);
  let creditPeriod = creditTerm * 12;
  let monthlyPercentValue;
  let monthlyPayment;
  let currentPercentValue;

  if (inputCreditPercent.length === 5) {
    currentPercentValue = parseFloat(inputCreditPercent.value.replace(`,`, `.`).slice(0, 4));
  } else {
    currentPercentValue = parseFloat(inputCreditPercent.value.replace(`,`, `.`).slice(0, 5));
  }

  monthlyPercentValue = currentPercentValue / 100 / 12;
  monthlyPayment = creditSumValue * (monthlyPercentValue + (monthlyPercentValue / (Math.pow((1 + monthlyPercentValue), creditPeriod) - 1)));
  inputCreditMonthlyPayment.value = prettifyRubbles(monthlyPayment.toFixed());

  calculateIncomeForCarLoanCredit();
};

const calculateIncomeForCarLoanCredit = () => {
  let creditMonthlyPayment = parseInt(clearString(inputCreditMonthlyPayment.value), 10);
  let incomeForCredit = creditMonthlyPayment * 100 / 45;

  inputCreditIncome.value = prettifyRubbles(incomeForCredit.toFixed());
};

const issueRequestCarLoanHandler = (evt) => {
  evt.preventDefault();
  let inputCurrentValue = parseInt(clearString(inputCarLoanCost.value), 10);
  let inputCarLoanContributionValue = parseInt(clearString(inputCarLoanContribution.value), 10);
  let inputTermCurrentValue = parseInt(clearString(inputCarLoanTermValue.value), 10);

  if (inputCurrentValue >= scaleValueCostMin && inputCurrentValue <= scaleValueCostMax) {
    openRequestForm();
    requestInputCreditName.value = creditOffer.carLoan.creditGoal;
    requestCostObjectName.innerHTML = creditOffer.carLoan.creditCostObject;
    requestCostObject.value = prettifyRubbles(inputCurrentValue);
    requestContributionItem.style.display = `flex`;
    requestContribution.value = prettifyRubbles(inputCarLoanContributionValue);
    requestCreditTerm.value = prettifyYears(inputTermCurrentValue);
  } else {
    inputCarLoanCost.style.border = ERROR_BORDER;
    carLoanCostMinAndMaxValue.style.color = `#c4151c`;
  }
};

const setSlyleDefaulForCarLoan = () => {
  inputCarLoanCost.style.border = null;
  carLoanCostMinAndMaxValue.style.color = `#707c87`;
};

export {
  calculatePercentRateForCarLoan, calculateMonthlyPaymentForCarLoan, calculateIncomeForCarLoanCredit, setSlyleDefaulForCarLoan, getCreditCarLoanSum, cleanOfferInputs, inputCreditMonthlyPayment, inputCreditIncome, checkInsuranceCar, checkInsuranceLife, issueRequestCarLoanHandler
};
