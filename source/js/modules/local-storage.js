let popupElement = document.querySelector('.popup');
let inputs = popupElement.querySelectorAll('input');
let data = localStorage.getItem(inputs);

export let localStorageUse = () => {
  var save = (data) => {
    localStorage.setItem(inputs, JSON.stringify(data));
  };

  let onChange = (event) => {
    let element = event.target,
      name = element.name,
      value = element.value;
    data[name] = value;
    save(data);
  };

  if (data) {
    data = JSON.parse(data);
  } else {
    save(data = {});
  }

  Array.prototype.forEach.call(inputs, (element) => {
    let name = element.name;
    let value = element.value;
    if (data[name] === value) {
      element.textContent = data[name];
    }
    element.addEventListener("change", onChange);
  });
};
