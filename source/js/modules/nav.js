const bodyBlock = document.getElementsByTagName('body')[0];
let navMain = document.querySelector('.nav');
let navToggler = document.querySelector('.nav__toggler');

let openMenu = function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    bodyBlock.style.overflow = "hidden";

  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    bodyBlock.style.overflow = "auto";
  }
};

export { navMain, bodyBlock, navToggler, openMenu }
