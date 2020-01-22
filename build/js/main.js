/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/modules/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/modules/index.js":
/*!************************************!*\
  !*** ./source/js/modules/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ \"./source/js/modules/nav.js\");\n/* harmony import */ var _popup_login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-login.js */ \"./source/js/modules/popup-login.js\");\n/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab.js */ \"./source/js/modules/tab.js\");\n\n\n\nvar openLoginLink = document.querySelector(\".nav__user-link\");\nvar navItemLinks = document.querySelectorAll(\".nav__link\");\nvar submitForm = document.querySelector(\"form\");\n_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"navMain\"].classList.add(\"nav--closed\");\n\nif (_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"navMain\"]) {\n  _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"navToggler\"].addEventListener(\"click\", _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"openMenu\"]);\n  navItemLinks.forEach(function (elem) {\n    elem.addEventListener(\"click\", _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"openMenu\"]);\n    Object(_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"scrollToContent\"])();\n  });\n}\n\nif (openLoginLink) {\n  openLoginLink.addEventListener(\"click\", _popup_login_js__WEBPACK_IMPORTED_MODULE_1__[\"popupOpenHandler\"]);\n}\n\nif (submitForm) {\n  submitForm.addEventListener(\"submit\", _popup_login_js__WEBPACK_IMPORTED_MODULE_1__[\"saveInLocalStorageHandler\"]);\n}\n\nif (_popup_login_js__WEBPACK_IMPORTED_MODULE_1__[\"eyeIcon\"]) {\n  _popup_login_js__WEBPACK_IMPORTED_MODULE_1__[\"eyeIcon\"].addEventListener(\"mousedown\", _popup_login_js__WEBPACK_IMPORTED_MODULE_1__[\"showPasswordHandler\"]);\n}\n\nif (_tab_js__WEBPACK_IMPORTED_MODULE_2__[\"tabs\"]) {\n  Object(_tab_js__WEBPACK_IMPORTED_MODULE_2__[\"tabElementClick\"])();\n}\n\n//# sourceURL=webpack:///./source/js/modules/index.js?");

/***/ }),

/***/ "./source/js/modules/nav.js":
/*!**********************************!*\
  !*** ./source/js/modules/nav.js ***!
  \**********************************/
/*! exports provided: navMain, navToggler, openMenu, scrollToContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navMain\", function() { return navMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navToggler\", function() { return navToggler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openMenu\", function() { return openMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollToContent\", function() { return scrollToContent; });\nvar navMain = document.querySelector(\".nav\");\nvar navToggler = document.querySelector(\".nav__toggler\");\n\nvar openMenu = function openMenu() {\n  if (navMain.classList.contains(\"nav--closed\")) {\n    navMain.classList.remove(\"nav--closed\");\n    navMain.classList.add(\"nav--opened\");\n  } else {\n    navMain.classList.add(\"nav--closed\");\n    navMain.classList.remove(\"nav--opened\");\n  }\n};\n\nvar scrollToContent = function scrollToContent() {\n  var anchors = document.querySelectorAll(\"a[href*=\\\"#\\\"]\");\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    var _loop = function _loop() {\n      var anchor = _step.value;\n      anchor.addEventListener(\"click\", function (evt) {\n        evt.preventDefault();\n        var blockId = anchor.getAttribute(\"href\");\n\n        if (blockId !== \"#\") {\n          document.querySelector(\"\" + blockId).scrollIntoView({\n            behavior: \"smooth\",\n            block: \"start\"\n          });\n        }\n      });\n    };\n\n    for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      _loop();\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack:///./source/js/modules/nav.js?");

/***/ }),

/***/ "./source/js/modules/popup-login.js":
/*!******************************************!*\
  !*** ./source/js/modules/popup-login.js ***!
  \******************************************/
/*! exports provided: eyeIcon, popupOpenHandler, saveInLocalStorageHandler, showPasswordHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eyeIcon\", function() { return eyeIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popupOpenHandler\", function() { return popupOpenHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveInLocalStorageHandler\", function() { return saveInLocalStorageHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showPasswordHandler\", function() { return showPasswordHandler; });\n/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll.js */ \"./source/js/modules/scroll.js\");\n\nvar ESC_KEYCODE = 27;\nvar popupElement = document.querySelector(\".popup-login\");\nvar popupClose = popupElement.querySelector(\".popup-login__close\");\nvar popupSubmitBtn = popupElement.querySelector(\".popup-login__submit\");\nvar userName = popupElement.querySelector(\"[name = login]\");\nvar userPassword = popupElement.querySelector(\"[name = password]\");\nvar eyeIcon = popupElement.querySelector(\".form__icon\");\nvar storageName = localStorage.getItem(\"login\");\nvar storagePassword = localStorage.getItem(\"password\");\n\nvar popupCloserHandler = function popupCloserHandler() {\n  popupElement.classList.remove(\"popup-login--show\");\n  Object(_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"enableScrolling\"])();\n};\n\nvar saveInLocalStorageHandler = function saveInLocalStorageHandler() {\n  if (userName.value || userPassword.value) {\n    localStorage.setItem(\"login\", userName.value);\n    localStorage.setItem(\"password\", userPassword.value);\n    popupCloserHandler();\n  }\n};\n\nvar getInLocalStorage = function getInLocalStorage() {\n  if (storageName || storagePassword) {\n    userName.value = storageName;\n    userPassword.value = storagePassword;\n    popupSubmitBtn.focus();\n  }\n};\n\nvar closeByEsc = function closeByEsc() {\n  document.addEventListener(\"keydown\", function (evt) {\n    if (evt.keyCode === ESC_KEYCODE) {\n      popupCloserHandler();\n    }\n  });\n};\n\nvar CloseOnClickOutsideHandler = function CloseOnClickOutsideHandler(e) {\n  var target = e.target;\n\n  if (target.classList.contains(\"popup-login__overlay\")) {\n    popupCloserHandler();\n  }\n};\n\nvar showPasswordHandler = function showPasswordHandler(evt) {\n  evt.preventDefault();\n  userPassword.setAttribute(\"type\", \"text\");\n\n  var onMouseUp = function onMouseUp(upEvt) {\n    upEvt.preventDefault();\n    userPassword.setAttribute(\"type\", \"password\");\n    document.removeEventListener(\"mouseup\", onMouseUp);\n  };\n\n  document.addEventListener(\"mouseup\", onMouseUp);\n};\n\nvar popupOpenHandler = function popupOpenHandler() {\n  if (popupElement) {\n    popupElement.classList.add(\"popup-login--show\");\n    userName.focus();\n    getInLocalStorage();\n    Object(_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"disableScrolling\"])();\n  }\n\n  popupClose.addEventListener(\"click\", popupCloserHandler);\n  closeByEsc();\n  document.addEventListener(\"click\", CloseOnClickOutsideHandler);\n};\n\n\n\n//# sourceURL=webpack:///./source/js/modules/popup-login.js?");

/***/ }),

/***/ "./source/js/modules/scroll.js":
/*!*************************************!*\
  !*** ./source/js/modules/scroll.js ***!
  \*************************************/
/*! exports provided: disableScrolling, enableScrolling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disableScrolling\", function() { return disableScrolling; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableScrolling\", function() { return enableScrolling; });\nvar body = document.querySelector(\"body\");\n\nvar getScrollbarWidth = function getScrollbarWidth() {\n  var outer = document.createElement(\"div\");\n  outer.style.visibility = \"hidden\";\n  outer.style.overflow = \"scroll\";\n  outer.style.msOverflowStyle = \"scrollbar\";\n  body.appendChild(outer);\n  var inner = document.createElement(\"div\");\n  outer.appendChild(inner);\n  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;\n  outer.parentNode.removeChild(outer);\n  return scrollbarWidth;\n};\n\nvar disableScrolling = function disableScrolling() {\n  var scrollWidth = getScrollbarWidth();\n  body.setAttribute(\"style\", \"padding-right:\".concat(scrollWidth, \"px;\"));\n  body.classList.add(\"no-scroll\");\n};\n\nvar enableScrolling = function enableScrolling() {\n  body.removeAttribute(\"style\");\n  body.classList.remove(\"no-scroll\");\n};\n\n\n\n//# sourceURL=webpack:///./source/js/modules/scroll.js?");

/***/ }),

/***/ "./source/js/modules/tab.js":
/*!**********************************!*\
  !*** ./source/js/modules/tab.js ***!
  \**********************************/
/*! exports provided: tabs, tabElementClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabs\", function() { return tabs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabElementClick\", function() { return tabElementClick; });\nvar tabs = document.querySelectorAll(\".services__tab-link\");\nvar servicesContent = document.querySelector(\".services__list\");\n\nvar tabElementClick = function tabElementClick() {\n  var hideAllTabs = function hideAllTabs() {\n    tabs.forEach(function (tab) {\n      tab.parentElement.classList.remove(\"services__tab-item--show\");\n    });\n  };\n\n  tabs.forEach(function (tab, i) {\n    tab.addEventListener(\"click\", function (evt) {\n      evt.preventDefault();\n      hideAllTabs();\n      tab.parentElement.classList.add(\"services__tab-item--show\");\n      servicesContent.style.transform = \"translateX(\".concat(-(i * 100), \"%)\");\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack:///./source/js/modules/tab.js?");

/***/ })

/******/ });