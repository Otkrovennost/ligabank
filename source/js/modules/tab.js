const tabs = document.querySelectorAll(`.services__tab-link`);
const servicesContent = document.querySelector(`.services__list`);

const tabElementClick = () => {

  let hideAllTabs = () => {
    tabs.forEach((tab) => {
      tab.parentElement.classList.remove(`services__tab-item--show`);
    });
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      hideAllTabs();
      tab.parentElement.classList.add(`services__tab-item--show`);
      servicesContent.style.transform = `translateX(${-(i * 100)}%)`;
    });
  });
};

export {
  tabs, tabElementClick
};
