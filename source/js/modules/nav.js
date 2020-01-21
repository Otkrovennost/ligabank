const navMain = document.querySelector(`.nav`);
const navToggler = document.querySelector(`.nav__toggler`);

let openMenu = () => {
  if (navMain.classList.contains(`nav--closed`)) {
    navMain.classList.remove(`nav--closed`);
    navMain.classList.add(`nav--opened`);

  } else {
    navMain.classList.add(`nav--closed`);
    navMain.classList.remove(`nav--opened`);
  }
};

// let scrollToContent = () => {
//   const anchors = document.querySelectorAll(`a[href*="#"]`)

//   for (let anchor of anchors) {
//     anchor.addEventListener(`click`, function (e) {
//       e.preventDefault()

//       const blockID = anchor.getAttribute(`href`).substr(1)

//       document.getElementById(blockID).scrollIntoView({
//         behavior: `smooth`,
//         block: `start`
//       })
//     })
//   }
// };

export {
  navMain, navToggler, openMenu
};
