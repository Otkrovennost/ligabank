import {
  prettifyRubbles, prettifyYears, clearString
} from "./inputs-entry.js";
import {
  closeRequestForm
} from "./request.js";
import {
  getCreditConsumerSum, calculatePercentRateForConsumer, checkerSalaryProject, setSlyleDefaulForConsumer
} from "./credit-consumer-send.js";

const consumerCredit = document.querySelector(`.consumer`);
const consumerCostMinAndMaxValue = consumerCredit.querySelector(`.consumer__item span[data-name=min-and-max-value]`);
const buttonBiggerConsumer = consumerCredit.querySelector(`.range-bar__control--max`);
const buttonSmallerConsumer = consumerCredit.querySelector(`.range-bar__control--min`);
const inputConsumerCreditCost = consumerCredit.querySelector(`.consumer__item input[name=consumer-cost]`);
const inputConsumerTermValue = consumerCredit.querySelector(`.consumer__item input[name=consumer-time]`);
const rangeConsumerTerm = consumerCredit.querySelector(`.consumer__item input[name=consumer-term-range]`);
const scaleValueCostConsumerMin = Number(inputConsumerCreditCost.getAttribute(`data-min`));
const scaleValueCostConsumerMax = Number(inputConsumerCreditCost.getAttribute(`data-max`));
const scaleValueCostConsumerStep = Number(inputConsumerCreditCost.getAttribute(`data-step`));
const rangeConsumerTermMin = Number(rangeConsumerTerm.getAttribute(`data-min`));
const rangeConsumerTermMax = Number(rangeConsumerTerm.getAttribute(`data-max`));

const changeConsumerCostInput = () => {
  setSlyleDefaulForConsumer();
  closeRequestForm();
  getCreditConsumerSum();
};

const scaleBiggerConsumerHandler = () => {
  closeRequestForm();
  setSlyleDefaulForConsumer();
  let scaleControlNumber = parseInt(clearString(inputConsumerCreditCost.value), 10);

  if (scaleControlNumber <= (scaleValueCostConsumerMax - scaleValueCostConsumerStep)) {
    scaleControlNumber += scaleValueCostConsumerStep;
    inputConsumerCreditCost.value = prettifyRubbles(scaleControlNumber);
    getCreditConsumerSum();
  }
};

const scaleSmallerConsumerHandler = () => {
  closeRequestForm();
  setSlyleDefaulForConsumer();
  let scaleControlNumber = parseInt(clearString(inputConsumerCreditCost.value), 10);

  if (scaleControlNumber >= (scaleValueCostConsumerMin + scaleValueCostConsumerStep)) {
    scaleControlNumber -= scaleValueCostConsumerStep;
    inputConsumerCreditCost.value = prettifyRubbles(scaleControlNumber);
    getCreditConsumerSum();
  }
};

const setMinCreditTermConsumer = () => {
  rangeConsumerTerm.value = rangeConsumerTermMin;
  inputConsumerTermValue.value = prettifyYears(rangeConsumerTerm.value);
  getCreditConsumerSum();
};

const changeCreditTermForConsumer = () => {
  closeRequestForm();
  inputConsumerTermValue.value = prettifyYears(rangeConsumerTerm.value);
  getCreditConsumerSum();
};

const changeInputConsumerTermValue = () => {
  closeRequestForm();
  let inputTermCurrentValue = parseInt(clearString(inputConsumerTermValue.value), 10);
  rangeConsumerTerm.value = inputTermCurrentValue;
  getCreditConsumerSum();
};

const minAndMaxTermConsumerHandler = () => {
  let inputTermCurrentValue = parseInt(clearString(inputConsumerTermValue.value), 10);

  if (inputTermCurrentValue < rangeConsumerTermMin) {
    inputConsumerTermValue.value = prettifyYears(rangeConsumerTermMin);
    rangeConsumerTerm.value = rangeConsumerTermMin;
  } else if (inputTermCurrentValue > rangeConsumerTermMax) {
    inputConsumerTermValue.value = prettifyYears(rangeConsumerTermMax);
    rangeConsumerTerm.value = rangeConsumerTermMax;
    getCreditConsumerSum();
  }
};

const creditConsumerCalculator = () => {
  closeRequestForm();
  getCreditConsumerSum();
  setMinCreditTermConsumer();
  getCreditConsumerSum();
  setMinCreditTermConsumer();
  inputConsumerCreditCost.addEventListener(`input`, changeConsumerCostInput);
  buttonBiggerConsumer.addEventListener(`click`, scaleBiggerConsumerHandler);
  buttonSmallerConsumer.addEventListener(`click`, scaleSmallerConsumerHandler);
  rangeConsumerTerm.addEventListener(`change`, changeCreditTermForConsumer);
  inputConsumerTermValue.addEventListener(`input`, changeInputConsumerTermValue);
  inputConsumerTermValue.addEventListener(`change`, minAndMaxTermConsumerHandler);
  checkerSalaryProject.addEventListener(`click`, calculatePercentRateForConsumer);
};

export {
  creditConsumerCalculator, inputConsumerCreditCost, inputConsumerTermValue, consumerCostMinAndMaxValue, scaleValueCostConsumerMin, scaleValueCostConsumerMax
};
