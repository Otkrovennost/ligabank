const mapFiltersBlock = document.querySelector(`.map form`);
const mapRegionsElements = mapFiltersBlock.querySelectorAll(`input[name=region]`);

const getCheckboxesValue = () => {
  let checkboxesValues = [];
  mapRegionsElements.forEach((input) => {
    if (input.checked) {
      checkboxesValues.push(input.value);
    }
  });
  return checkboxesValues;
};

const getArrayCompare = (arr1, arr2) => {
  let flag = false;
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === 0) {
      flag = true;
    }
  }
  return flag;
};

const filterCheckboxes = (data) => {
  return (getArrayCompare(data.id, getCheckboxesValue())) ? data : false;
};

const marksFilterHandler = (data) => {
  let filteredRegion = data.filter((it) => {
    return filterCheckboxes(it);
  });
  return filteredRegion;
};

export {
  marksFilterHandler
};
