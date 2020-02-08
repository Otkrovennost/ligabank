const clearString = (str) => {
  return str.replace(/[^+\d]/g, ``);
};

const prettifyRubbles = (value) => {
  const lastLetter = String(value).slice(-1);
  const twoLastLetter = String(value).slice(-2);
  if (twoLastLetter === `11` || twoLastLetter === `12` || twoLastLetter === `13` || twoLastLetter === `14`) {
    return String(value).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + ` `).replace(/^0+/, ``) + ` рублей`;
  } else {
    if (lastLetter === `1`) {
      return String(value).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + ` `).replace(/^0+/, ``) + ` рубль `;
    } else if (lastLetter === `2` || lastLetter === `3` || lastLetter === `4`) {
      return String(value).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + ` `).replace(/^0+/, ``) + ` рубля `;
    } else {
      return String(value).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + ` `).replace(/^0+/, ``) + ` рублей`;
    }
  }
};

const prettifyYears = (value) => {
  const lastLetter = String(value).slice(-1);
  const twoLastLetter = String(value).slice(-2);
  if (twoLastLetter === `11` || twoLastLetter === `12` || twoLastLetter === `13` || twoLastLetter === `14`) {
    return String(value).replace(/^0+/, ``) + ` лет `;
  } else {
    if (lastLetter === `1`) {
      return String(value).replace(/^0+/, ``) + ` год `;
    } else if (lastLetter === `2` || lastLetter === `3` || lastLetter === `4`) {
      return String(value).replace(/^0+/, ``) + ` года`;
    } else {
      return String(value).replace(/^0+/, ``) + ` лет `;
    }
  }
};

const inputValueChange = (inputsName, i, prettifyFunction) => {
  inputsName.forEach((inputName) => {
    inputName.addEventListener(`input`, (evt) => {
      evt.preventDefault();
      let newValue = clearString(inputName.value);
      inputName.value = prettifyFunction(newValue);
      inputName.setSelectionRange((inputName.value.length - i), (inputName.value.length - i));
    });
  });
};

export {
  inputValueChange, prettifyRubbles, prettifyYears, clearString
};
