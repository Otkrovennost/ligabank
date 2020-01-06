'use strict';

(function () {
  var navMain = document.querySelector('.nav');
  var navToggler = document.querySelector('.nav__toggler');

  navMain.classList.add('nav--closed');
  navMain.classList.remove('nav--nojs');

  navToggler.addEventListener('click', function () {
    if (navMain.classList.contains('nav--closed')) {
      navMain.classList.remove('nav--closed');
      navMain.classList.add('nav--opened');

    } else {
      navMain.classList.add('nav--closed');
      navMain.classList.remove('nav--opened');
    }
  });

})();
