/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/main/index.coffee":
/*!*******************************!*\
  !*** ./src/main/index.coffee ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n\nelectron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle(\"custom-devtools-warning\", function({ sender: webContents  }) {\n    webContents.removeAllListeners(\"devtools-opened\");\n    webContents.on(\"devtools-opened\", function() {\n        return webContents.executeJavaScript(`console.log(\"%cHold Up!\", \"color: #FF5200; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;\");\nconsole.log(\"%cIf you're reading this, you're probably smarter than most Discord developers.\", \"font-size: 16px;\");\nconsole.log(\"%cPasting anything in here could actually improve the Discord client.\", \"font-size: 18px; font-weight: bold; color: red;\");\nconsole.log(\"%cUnless you understand exactly what you're doing, keep this window open to browse our bad code.\", \"font-size: 16px;\");\nconsole.log(\"%cIf you don't understand exactly what you're doing, you should come work with us: https://discordapp.com/jobs\", \"font-size: 16px;\");`);\n    });\n    return true;\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9pbmRleC5jb2ZmZWUuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFMkNBLG9EQUFTLHVDQUFWRSxNQUFBLEVBQUFDLFdBQUEsRUFDdEM7SUFDQUEsV0FBVyxDQUFDQyxrQkFBRyxFQUFtQjtJQUFBRCxXQUM5QixDQUFBRSxFQUFBLEVBQVksMEJBQWtCO1FBQUEsT0FBQUYsV0FBQSxDQUFBRyxpQkFBQTs7OztrSkFEbEM7SUFRQTtJQVZKO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZC1jb21wYXQvLi9zcmMvbWFpbi9pbmRleC5jb2ZmZWU/Y2FhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBpcGNNYWluXG59IGZyb20gXCJlbGVjdHJvblwiO1xuXG5pcGNNYWluLmhhbmRsZShcImN1c3RvbS1kZXZ0b29scy13YXJuaW5nXCIsIGZ1bmN0aW9uKHtcbiAgICBzZW5kZXI6IHdlYkNvbnRlbnRzXG4gIH0pIHtcbiAgd2ViQ29udGVudHMucmVtb3ZlQWxsTGlzdGVuZXJzKFwiZGV2dG9vbHMtb3BlbmVkXCIpO1xuICB3ZWJDb250ZW50cy5vbihcImRldnRvb2xzLW9wZW5lZFwiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2ViQ29udGVudHMuZXhlY3V0ZUphdmFTY3JpcHQoYGNvbnNvbGUubG9nKFwiJWNIb2xkIFVwIVwiLCBcImNvbG9yOiAjRkY1MjAwOyAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggYmxhY2s7IGZvbnQtc2l6ZTogNzJweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIpO1xuY29uc29sZS5sb2coXCIlY0lmIHlvdSdyZSByZWFkaW5nIHRoaXMsIHlvdSdyZSBwcm9iYWJseSBzbWFydGVyIHRoYW4gbW9zdCBEaXNjb3JkIGRldmVsb3BlcnMuXCIsIFwiZm9udC1zaXplOiAxNnB4O1wiKTtcbmNvbnNvbGUubG9nKFwiJWNQYXN0aW5nIGFueXRoaW5nIGluIGhlcmUgY291bGQgYWN0dWFsbHkgaW1wcm92ZSB0aGUgRGlzY29yZCBjbGllbnQuXCIsIFwiZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IHJlZDtcIik7XG5jb25zb2xlLmxvZyhcIiVjVW5sZXNzIHlvdSB1bmRlcnN0YW5kIGV4YWN0bHkgd2hhdCB5b3UncmUgZG9pbmcsIGtlZXAgdGhpcyB3aW5kb3cgb3BlbiB0byBicm93c2Ugb3VyIGJhZCBjb2RlLlwiLCBcImZvbnQtc2l6ZTogMTZweDtcIik7XG5jb25zb2xlLmxvZyhcIiVjSWYgeW91IGRvbid0IHVuZGVyc3RhbmQgZXhhY3RseSB3aGF0IHlvdSdyZSBkb2luZywgeW91IHNob3VsZCBjb21lIHdvcmsgd2l0aCB1czogaHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9qb2JzXCIsIFwiZm9udC1zaXplOiAxNnB4O1wiKTtgKTtcbiAgfSk7XG4gIHJldHVybiB0cnVlO1xufSk7XG4iXSwibmFtZXMiOlsiaXBjTWFpbiIsImhhbmRsZSIsInNlbmRlciIsIndlYkNvbnRlbnRzIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwib24iLCJleGVjdXRlSmF2YVNjcmlwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/index.coffee\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval-source-map devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/main/index.coffee");
/******/ var __webpack_export_target__ = exports;
/******/ for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 
