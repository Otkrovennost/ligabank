import {
  prettifyRubbles, prettifyYears, clearString
} from "./inputs-entry.js";
import {
  creditOffer
} from "./data.js";
import {
  inputCreditSum, inputCreditPercent, inputCreditMonthlyPayment, inputCreditIncome, inputCreditSumLabel, requestInputCreditName, requestCostObject, requestCreditTerm, requestCostObjectName, requestContributionItem
} from "./credit-mortgage-send.js";
import {
  inputConsumerCreditCost, inputConsumerTermValue, scaleValueCostConsumerMin, scaleValueCostConsumerMax, consumerCostMinAndMaxValue
} from "./credit-consumer.js";
import {
  ERROR_BORDER, openRequestForm
} from "./request.js";
const consumerCredit = document.querySelector(`.consumer`);
const checkerSalaryProject = consumerCredit.querySelector(`.consumer__checker input[name=salary]`);
let percentDecline;
let percentForCredit;

const cleanOfferInputs = () => {
  inputCreditMonthlyPayment.value = `рублей`;
  inputCreditIncome.value = `рублей`;
};

const getCreditConsumerSum = () => {
  let inputCurrentValue = parseInt(clearString(inputConsumerCreditCost.value), 10);
  inputCreditSumLabel.innerHTML = creditOffer.consumer.creditName;
  inputCreditSum.value = prettifyRubbles(inputCurrentValue);
  setPercentValue();
};

const isSalaryCheckerChecked = () => {
  if (checkerSalaryProject.checked) {
    percentDecline = 0.5;
  } else {
    percentDecline = 0;
  }
  return percentDecline;
};

const calculatePercentRateForConsumer = () => {
  let inputCurrentValue = parseInt(clearString(inputConsumerCreditCost.value), 10);
  isSalaryCheckerChecked();

  if (inputCurrentValue >= 750000 && inputCurrentValue < 2000000) {
    percentForCredit = 12.5 - percentDecline;
  } else if (inputCurrentValue >= 2000000) {
    percentForCredit = 9.5 - percentDecline;
  } else {
    percentForCredit = 15 - percentDecline;
  }
  return percentForCredit;
};

const setPercentValue = () => {
  let currentPercent;
  calculatePercentRateForConsumer();
  currentPercent = String(percentForCredit);

  if (currentPercent.length === 4 || currentPercent.length === 3) {
    currentPercent = currentPercent + `0%`;
  } else {
    currentPercent = currentPercent + `.00%`;
  }
  inputCreditPercent.value = currentPercent.replace(`.`, `,`);
  calculateMonthlyPaymentForConsumer();
};

const calculateMonthlyPaymentForConsumer = () => {
  let creditTerm = parseInt(clearString(inputConsumerTermValue.value), 10);
  let currentPercentValue;
  let creditSumValue = parseInt(clearString(inputCreditSum.value), 10);
  let creditPeriod = creditTerm * 12;
  let monthlyPercentValue;
  let monthlyPayment;

  if (inputCreditPercent.length === 5) {
    currentPercentValue = parseFloat(inputCreditPercent.value.replace(`,`, `.`).slice(0, 4));
  } else {
    currentPercentValue = parseFloat(inputCreditPercent.value.replace(`,`, `.`).slice(0, 5));
  }
  monthlyPercentValue = currentPercentValue / 100 / 12;
  monthlyPayment = creditSumValue * (monthlyPercentValue + (monthlyPercentValue / (Math.pow((1 + monthlyPercentValue), creditPeriod) - 1)));
  inputCreditMonthlyPayment.value = prettifyRubbles(monthlyPayment.toFixed());

  calculateIncomeConsumerCredit();
};

const calculateIncomeConsumerCredit = () => {
  let creditMonthlyPayment = parseInt(clearString(inputCreditMonthlyPayment.value), 10);
  let incomeForCredit = creditMonthlyPayment * 100 / 45;

  inputCreditIncome.value = prettifyRubbles(incomeForCredit.toFixed());
};

const issueRequestConsumerHandler = (evt) => {
  evt.preventDefault();
  let inputCurrentValue = parseInt(clearString(inputConsumerCreditCost.value), 10);
  let inputTermCurrentValue = parseInt(clearString(inputConsumerTermValue.value), 10);
  if (inputCurrentValue >= scaleValueCostConsumerMin && inputCurrentValue <= scaleValueCostConsumerMax) {
    openRequestForm();
    requestInputCreditName.value = creditOffer.consumer.creditGoal;
    requestCostObjectName.innerHTML = creditOffer.consumer.creditCostObject;
    requestCostObject.value = prettifyRubbles(inputCurrentValue);
    requestContributionItem.style.display = `none`;
    requestCreditTerm.value = prettifyYears(inputTermCurrentValue);
  } else {
    inputConsumerCreditCost.style.border = ERROR_BORDER;
    consumerCostMinAndMaxValue.style.color = `#c4151c`;
  }
};

const setSlyleDefaulForConsumer = () => {
  inputConsumerCreditCost.style.border = null;
  consumerCostMinAndMaxValue.style.color = `#707c87`;
};

export {
  getCreditConsumerSum, setPercentValue, checkerSalaryProject, setSlyleDefaulForConsumer, issueRequestConsumerHandler, cleanOfferInputs
};
