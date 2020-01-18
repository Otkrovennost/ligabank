const tab = document.querySelectorAll(`.services__tab-item`);
const tabContent = document.querySelectorAll(`.services__item`);

let hideTab = () => {
  tab.forEach((item) => {
    item.classList.remove(`services__tab-item--show`);
  });
  tabContent.forEach((item) => {
    item.classList.remove(`services__item--show`);
  });
};

export {
  tab, tabContent, hideTab
};
