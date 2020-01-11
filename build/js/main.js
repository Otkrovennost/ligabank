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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ \"./source/js/modules/nav.js\");\n/* harmony import */ var _popup_login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-login.js */ \"./source/js/modules/popup-login.js\");\n\n\nvar openLoginLink = document.querySelector(\".nav__user-link\");\nvar navItemLinks = document.querySelectorAll(\".nav__link\");\nvar submitForm = document.querySelector(\"form\");\n_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"navMain\"].classList.add(\"nav--closed\");\n\nif (_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"navMain\"]) {\n  _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"navToggler\"].addEventListener(\"click\", _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"openMenu\"]);\n  navItemLinks.forEach(function (elem) {\n    elem.addEventListener(\"click\", _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"openMenu\"]);\n  });\n}\n\nif (openLoginLink) {\n  openLoginLink.addEventListener(\"click\", _popup_login_js__WEBPACK_IMPORTED_MODULE_1__[\"popupOpenHandler\"]);\n}\n\nif (submitForm) {\n  submitForm.addEventListener(\"submit\", _popup_login_js__WEBPACK_IMPORTED_MODULE_1__[\"saveInLocalStorageHandler\"]);\n}\n\nif (_popup_login_js__WEBPACK_IMPORTED_MODULE_1__[\"eyeIcon\"]) {\n  _popup_login_js__WEBPACK_IMPORTED_MODULE_1__[\"eyeIcon\"].addEventListener(\"mousedown\", _popup_login_js__WEBPACK_IMPORTED_MODULE_1__[\"showPasswordHandler\"]);\n}\n\n//# sourceURL=webpack:///./source/js/modules/index.js?");

/***/ }),

/***/ "./source/js/modules/nav.js":
/*!**********************************!*\
  !*** ./source/js/modules/nav.js ***!
  \**********************************/
/*! exports provided: navMain, navToggler, openMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navMain\", function() { return navMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navToggler\", function() { return navToggler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openMenu\", function() { return openMenu; });\nvar navMain = document.querySelector(\".nav\");\nvar navToggler = document.querySelector(\".nav__toggler\");\n\nvar openMenu = function openMenu() {\n  if (navMain.classList.contains(\"nav--closed\")) {\n    navMain.classList.remove(\"nav--closed\");\n    navMain.classList.add(\"nav--opened\");\n  } else {\n    navMain.classList.add(\"nav--closed\");\n    navMain.classList.remove(\"nav--opened\");\n  }\n};\n\n\n\n//# sourceURL=webpack:///./source/js/modules/nav.js?");

/***/ }),

/***/ "./source/js/modules/popup-login.js":
/*!******************************************!*\
  !*** ./source/js/modules/popup-login.js ***!
  \******************************************/
/*! exports provided: eyeIcon, popupOpenHandler, saveInLocalStorageHandler, showPasswordHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eyeIcon\", function() { return eyeIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popupOpenHandler\", function() { return popupOpenHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveInLocalStorageHandler\", function() { return saveInLocalStorageHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showPasswordHandler\", function() { return showPasswordHandler; });\nvar ESC_KEYCODE = 27;\nvar popupElement = document.querySelector(\".popup-login\");\nvar popupClose = popupElement.querySelector(\".popup-login__close\");\nvar popupSubmitBtn = popupElement.querySelector(\".popup-login__submit\");\nvar userName = popupElement.querySelector(\"[name = login]\");\nvar userPassword = popupElement.querySelector(\"[name = password]\");\nvar eyeIcon = popupElement.querySelector(\".form__icon\"); // const overlayBlock = document.querySelector(`.login`);\n\nvar storageName = localStorage.getItem(\"login\");\nvar storagePassword = localStorage.getItem(\"password\");\n\nvar popupCloserHandler = function popupCloserHandler() {\n  popupElement.classList.remove(\"popup-login--show\"); // overlayBlock.classList.remove(`overlay`);\n};\n\nvar saveInLocalStorageHandler = function saveInLocalStorageHandler() {\n  if (userName.value || userPassword.value) {\n    localStorage.setItem(\"login\", userName.value);\n    localStorage.setItem(\"password\", userPassword.value);\n    popupCloserHandler();\n  }\n};\n\nvar getInLocalStorage = function getInLocalStorage() {\n  if (storageName || storagePassword) {\n    userName.value = storageName;\n    userPassword.value = storagePassword;\n    popupSubmitBtn.focus();\n  }\n};\n\nvar closeByEsc = function closeByEsc() {\n  document.addEventListener(\"keydown\", function (evt) {\n    if (evt.keyCode === ESC_KEYCODE) {\n      popupCloserHandler();\n    }\n  });\n};\n\nvar CloseOnClickOutsideHandler = function CloseOnClickOutsideHandler(e) {\n  var target = e.target;\n\n  if (target.classList.contains(\"popup-login__overlay\")) {\n    popupCloserHandler();\n  }\n};\n\nvar showPasswordHandler = function showPasswordHandler(evt) {\n  evt.preventDefault();\n  userPassword.setAttribute(\"type\", \"text\");\n\n  var onMouseUp = function onMouseUp(upEvt) {\n    upEvt.preventDefault();\n    userPassword.setAttribute(\"type\", \"password\");\n    document.removeEventListener(\"mouseup\", onMouseUp);\n  };\n\n  document.addEventListener(\"mouseup\", onMouseUp);\n};\n\nvar popupOpenHandler = function popupOpenHandler() {\n  if (popupElement) {\n    popupElement.classList.add(\"popup-login--show\"); // overlayBlock.classList.add(`overlay`);\n\n    userName.focus();\n    getInLocalStorage();\n  }\n\n  popupClose.addEventListener(\"click\", popupCloserHandler);\n  closeByEsc();\n  document.addEventListener(\"click\", CloseOnClickOutsideHandler);\n};\n\n\n\n//# sourceURL=webpack:///./source/js/modules/popup-login.js?");

/***/ })

/******/ });