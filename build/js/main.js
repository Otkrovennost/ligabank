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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ \"./source/js/modules/nav.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./source/js/modules/popup.js\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.js */ \"./source/js/modules/local-storage.js\");\n\n\n\n\n\nvar openLoginLink = document.querySelector('.nav__user-link');\nvar navItemLinks = document.querySelectorAll('.nav__link');\n_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"navMain\"].classList.add('nav--closed');\n_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"navMain\"].classList.remove('nav--nojs');\n\nif (_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"navMain\"]) {\n  _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"navToggler\"].addEventListener('click', _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"openMenu\"]);\n  navItemLinks.forEach(function (elem) {\n    elem.addEventListener('click', _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"openMenu\"]);\n  });\n}\n\nif (openLoginLink) {\n  openLoginLink.addEventListener('click', _popup_js__WEBPACK_IMPORTED_MODULE_1__[\"popupOpenHandler\"]);\n}\n\nif (_popup_js__WEBPACK_IMPORTED_MODULE_1__[\"eyeIcon\"]) {\n  _popup_js__WEBPACK_IMPORTED_MODULE_1__[\"eyeIcon\"].addEventListener('mousedown', _popup_js__WEBPACK_IMPORTED_MODULE_1__[\"showPasswordHandler\"]);\n}\n\n//# sourceURL=webpack:///./source/js/modules/index.js?");

/***/ }),

/***/ "./source/js/modules/local-storage.js":
/*!********************************************!*\
  !*** ./source/js/modules/local-storage.js ***!
  \********************************************/
/*! exports provided: localStorageUse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"localStorageUse\", function() { return localStorageUse; });\nvar popupElement = document.querySelector('.popup');\nvar inputs = popupElement.querySelectorAll('input');\nvar data = localStorage.getItem(inputs);\nvar localStorageUse = function localStorageUse() {\n  var save = function save(data) {\n    localStorage.setItem(inputs, JSON.stringify(data));\n  };\n\n  var onChange = function onChange(event) {\n    var element = event.target,\n        name = element.name,\n        value = element.value;\n    data[name] = value;\n    save(data);\n  };\n\n  if (data) {\n    data = JSON.parse(data);\n  } else {\n    save(data = {});\n  }\n\n  Array.prototype.forEach.call(inputs, function (element) {\n    var name = element.name;\n    var value = element.value;\n\n    if (data[name] === value) {\n      element.textContent = data[name];\n    }\n\n    element.addEventListener(\"change\", onChange);\n  });\n};\n\n//# sourceURL=webpack:///./source/js/modules/local-storage.js?");

/***/ }),

/***/ "./source/js/modules/nav.js":
/*!**********************************!*\
  !*** ./source/js/modules/nav.js ***!
  \**********************************/
/*! exports provided: navMain, bodyBlock, navToggler, openMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navMain\", function() { return navMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bodyBlock\", function() { return bodyBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navToggler\", function() { return navToggler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openMenu\", function() { return openMenu; });\nvar bodyBlock = document.getElementsByTagName('body')[0];\nvar navMain = document.querySelector('.nav');\nvar navToggler = document.querySelector('.nav__toggler');\n\nvar openMenu = function openMenu() {\n  if (navMain.classList.contains('nav--closed')) {\n    navMain.classList.remove('nav--closed');\n    navMain.classList.add('nav--opened');\n    bodyBlock.style.overflow = \"hidden\";\n  } else {\n    navMain.classList.add('nav--closed');\n    navMain.classList.remove('nav--opened');\n    bodyBlock.style.overflow = \"auto\";\n  }\n};\n\n\n\n//# sourceURL=webpack:///./source/js/modules/nav.js?");

/***/ }),

/***/ "./source/js/modules/popup.js":
/*!************************************!*\
  !*** ./source/js/modules/popup.js ***!
  \************************************/
/*! exports provided: escKeycode, eyeIcon, popupOpenHandler, showPasswordHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escKeycode\", function() { return escKeycode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eyeIcon\", function() { return eyeIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popupOpenHandler\", function() { return popupOpenHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showPasswordHandler\", function() { return showPasswordHandler; });\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ \"./source/js/modules/nav.js\");\n\nvar escKeycode = 27;\nvar popupElement = document.querySelector('.popup');\nvar popupClose = popupElement.querySelector('.popup__close');\nvar userName = popupElement.querySelector(\"[name=name]\");\nvar eyeIcon = document.querySelector('.login-block__icon');\nvar userPassword = document.querySelector(\"[name=password]\");\n\nvar popupCloserHandler = function popupCloserHandler() {\n  popupElement.classList.remove('popup--show');\n  _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"bodyBlock\"].style.overflow = \"auto\";\n};\n\nvar popupOpenHandler = function popupOpenHandler() {\n  if (popupElement) {\n    popupElement.classList.add('popup--show');\n    _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"bodyBlock\"].style.overflow = \"hidden\";\n    userName.focus();\n  }\n\n  popupClose.addEventListener('click', popupCloserHandler);\n  document.addEventListener('keydown', function (evt) {\n    if (evt.keyCode === escKeycode) {\n      popupElement.classList.remove('popup--show');\n      _nav_js__WEBPACK_IMPORTED_MODULE_0__[\"bodyBlock\"].style.overflow = \"auto\";\n    }\n  });\n};\n\nvar showPasswordHandler = function showPasswordHandler(evt) {\n  evt.preventDefault();\n  userPassword.setAttribute('type', 'text');\n\n  var onMouseUp = function onMouseUp(upEvt) {\n    upEvt.preventDefault();\n    userPassword.setAttribute('type', 'password');\n    document.removeEventListener('mouseup', onMouseUp);\n  };\n\n  document.addEventListener('mouseup', onMouseUp);\n};\n\n\n\n//# sourceURL=webpack:///./source/js/modules/popup.js?");

/***/ })

/******/ });