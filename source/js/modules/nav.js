const navMain = document.querySelector(`.nav`);
const navToggler = document.querySelector(`.nav__toggler`);

let openMenu = function () {
  if (navMain.classList.contains(`nav--closed`)) {
    navMain.classList.remove(`nav--closed`);
    navMain.classList.add(`nav--opened`);

  } else {
    navMain.classList.add(`nav--closed`);
    navMain.classList.remove(`nav--opened`);
  }
};

export { navMain, navToggler, openMenu }
