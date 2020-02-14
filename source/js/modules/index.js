import {
  navMain, navToggler, openMenu, scrollToContent
} from "./nav.js";
import {
  eyeIcon, popupOpenHandler, saveInLocalStorageHandler, showPasswordHandler
} from "./popup-login.js";
import {
  tabs, tabElementClick
} from "./tab.js";
import {
  openCreditMenu, creditGoal
} from "./calculator-main.js";
import {
  inputValueChange, prettifyRubbles, prettifyYears
} from "./inputs-entry.js";
import {
  requestForm, submitRequestForm, changeFormInputsValue
} from "./request.js";
import {
  placeMarks
} from "./data.js";
import {
  marksFilterHandler
} from "./map-filters.js";
const openLoginLink = document.querySelector(`.nav__user-link`);
const navItemLinks = document.querySelectorAll(`.nav__link`);
const teasersLinks = document.querySelectorAll(`.teasers__item`);
const loginFormBlock = document.querySelector(`.popup-login`);
const submitForm = loginFormBlock.querySelector(`form`);
const creditCalculatorBlock = document.querySelector(`.credit`);
const creditBlockInputsForRubbles = document.querySelectorAll(`.credit__item input[data-input-value=rubbles]`);
const creditBlockInputsForYears = document.querySelectorAll(`.credit__item input[data-input-value=years]`);
const mapBlock = document.querySelector(`.map__block`);
const mapFiltersBlock = document.querySelector(`.map form`);

navMain.classList.add(`nav--closed`);

if (navMain) {
  navToggler.addEventListener(`click`, openMenu);

  navItemLinks.forEach(function (elem) {
    elem.addEventListener(`click`, openMenu);
    scrollToContent();
  });
}

if (teasersLinks) {
  teasersLinks.forEach(function (elem) {
    scrollToContent();
  });
}

if (openLoginLink) {
  openLoginLink.addEventListener(`click`, popupOpenHandler);
}

if (submitForm) {
  submitForm.addEventListener(`submit`, saveInLocalStorageHandler);
}

if (eyeIcon) {
  eyeIcon.addEventListener(`mousedown`, showPasswordHandler);
}

if (tabs) {
  tabElementClick();
}

if (creditCalculatorBlock) {
  creditGoal.addEventListener(`click`, openCreditMenu);
}

if (creditBlockInputsForRubbles) {
  inputValueChange(creditBlockInputsForRubbles, 7, prettifyRubbles);
}

if (creditBlockInputsForYears) {
  inputValueChange(creditBlockInputsForYears, 5, prettifyYears);
}

if (requestForm) {
  changeFormInputsValue();
  requestForm.addEventListener(`submit`, submitRequestForm);
}

const initMap = () => {
  ymaps.ready(init);
  function init() {
    let myMap = new ymaps.Map(mapBlock.id, {
      center: [53.8, 38.6],
      zoom: 3,
      controls: [],
      behavior: [`drag`]
    });

    let marks;
    let marksCollection;

    const renderPin = () => {
      myMap.geoObjects.remove(marksCollection);
      marksCollection = new ymaps.GeoObjectCollection();
      marks = marksFilterHandler(placeMarks);

      if (marks.length !== 0) {
        marks.forEach((mark) => {
          let myPlacemark = new ymaps.Placemark([mark.latitude, mark.longitude], {
            hintContent: mark.hintName
          }, {
            iconLayout: `default#image`,
            iconImageHref: `img/content/location.png`,
            iconImageSize: [35, 40],
            iconImageOffset: [-17, -20]
          });
          marksCollection.add(myPlacemark);
        });
        myMap.geoObjects.add(marksCollection);
        myMap.setBounds(marksCollection.getBounds());
      }
    };

    renderPin();

    const filterChangeHandler = () => {
      renderPin();
    };

    mapFiltersBlock.addEventListener(`change`, filterChangeHandler);
  }
};

const documentScrollHandler = (evt) => {
  const map = document.querySelector(`.map`);
  const topPos = map.getBoundingClientRect().top;
  if (topPos <= 400) {
    initMap();
    document.removeEventListener(`scroll`, documentScrollHandler);
  }
};

document.addEventListener(`scroll`, documentScrollHandler);
