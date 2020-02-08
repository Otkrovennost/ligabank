const navMain = document.querySelector(`.nav`);
const navToggler = document.querySelector(`.nav__toggler`);

const openMenu = () => {
  if (navMain.classList.contains(`nav--closed`)) {
    navMain.classList.remove(`nav--closed`);
    navMain.classList.add(`nav--opened`);

  } else {
    navMain.classList.add(`nav--closed`);
    navMain.classList.remove(`nav--opened`);
  }
};

const scrollToContent = () => {
  const anchors = document.querySelectorAll(`a[href*="#"]`);

  for (let anchor of anchors) {
    anchor.addEventListener(`click`, function (evt) {
      evt.preventDefault();

      const blockId = anchor.getAttribute(`href`);

      if (blockId !== `#`) {
        document.querySelector(`` + blockId).scrollIntoView({
          behavior: `smooth`,
          block: `start`
        });
      }
    });
  }
};

export {
  navMain, navToggler, openMenu, scrollToContent
};
