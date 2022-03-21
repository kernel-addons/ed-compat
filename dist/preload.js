/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/preload/fs.coffee":
/*!*******************************!*\
  !*** ./src/preload/fs.coffee ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\nvar handleStat, ignore, key, keys, noop, overrides, indexOf = [].indexOf;\n\nkeys = Object.keys((fs__WEBPACK_IMPORTED_MODULE_0___default()));\nignore = [\n    \"promises\"\n];\nnoop = function(value) {\n    return value;\n};\nhandleStat = function(ret) {\n    return {\n        ...ret,\n        isFile: ret.isFile.bind(ret),\n        isDirectory: ret.isDirectory.bind(ret)\n    };\n};\noverrides = {\n    stat: handleStat,\n    statSync: handleStat\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.fromEntries(function() {\n    var i, len, results;\n    results = [];\n    for(i = 0, len = keys.length; i < len; i++){\n        key = keys[i];\n        if (indexOf.call(ignore, key) >= 0) {\n            continue;\n        }\n        results.push(function() {\n            var original, override, type;\n            original = (fs__WEBPACK_IMPORTED_MODULE_0___default())[key];\n            type = typeof original;\n            override = overrides[key] || noop;\n            if (type === \"number\" || type === \"object\" || type === \"undefined\") {\n                return [\n                    key,\n                    original\n                ];\n            } else if (type === \"function\") {\n                return [\n                    key,\n                    function(...args) {\n                        return override(Reflect.apply(original, this, args));\n                    }\n                ];\n            }\n        }());\n    }\n    return results;\n}()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC9mcy5jb2ZmZWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsVUFBQSxFQUFBQyxNQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxFQUFBQyxJQUFBLEVBQUFDLFNBQUEsRUFBQUMsT0FBQSxNQUFBQSxPQUFBO0FBQUE7QUFFT0gsSUFBQSxHQUFBSyxNQUFBLENBQUFMLElBQUEsQ0FBQUksMkNBQUE7QUFDRU4sTUFBQTtJQUFBO0FBQUE7QUFFRkcsSUFBQSxXQUFXLENBQUFLLEtBQUE7SUFBWCxPQUFBQSxLQUFBO0FBQUE7QUFFTVQsVUFBUyxZQUFBVSxHQUFBO0lBQUEsTUFDZixFQURlO1dBRWxCQSxHQUFBO1FBQ0FDLE1BQUEsRUFBQUQsR0FBQSxDQUFBQyxNQUFpQixDQUFBQyxJQUFBLENBQUFGLEdBQUE7UUFIQ0csV0FBQSxFQUFBSCxHQUFBLENBQUFHLFdBQUEsQ0FBQUQsSUFBQSxDQUFBRixHQUFBO0lBQVQ7QUFBQTtBQU9UTCxTQUFNO0lBQ05TLElBQUEsRUFBQWQsVUFBVTtJQURWZSxRQUFBLEVBQUFmLFVBQUE7QUFBQTtBQUdXLGlFQUFBUSxNQUFBLENBQUFRLFdBQUE7SUFDWCxJQUFBQyxDQUFBLEVBQUFDLEdBQUEsRUFBQUMsT0FBQTtJQUFBQSxPQUFBO0lBQUEsSUFBQUYsQ0FBQSxNQUFBQyxHQUFBLEdBQUFmLElBQUEsQ0FBQWlCLE1BQUEsRUFBQUgsQ0FBQSxHQUFBQyxHQUFBLEVBQUFELENBQUE7UUFDSWYsR0FBQSxHQUFBQyxJQUFBLENBQUFjLENBQUE7UUFBQSxJQUFBWCxPQUFBLENBQUFlLElBQUEsQ0FBQXBCLE1BQUEsRUFBQUMsR0FBQTtZQUFBO1FBQUE7UUFFUmlCLE9BQUEsQ0FBQUcsSUFBQTtZQUFZLElBQUFDLFFBQVcsRUFBR0MsUUFBRCxFQUFBQyxJQUFBO1lBQ2JGLFFBQU8sR0FBQWhCLDJDQUFBLENBQU9MLEdBQUE7WUFDZHVCLElBQUEsU0FBVyxDQUFBRixRQUFVO1lBRXJCQyxRQUFHLEdBQUFuQixTQUFRLENBQVJILEdBQUEsS0FBb0JFLElBQUE7WUFBdkIsSUFBQXFCLElBQUEsS0FBb0UsQ0FBTSxXQUExRUEsSUFBQSxpQkFBQUEsSUFBQTtnQkFBQSxNQUNLLEVBQUF2QjtvQkFBQUEsR0FBRztvQkFBQXFCLFFBQVE7Z0JBQUE7WUFBWCxTQUEyQixFQUFBRSxJQUFBO2dCQUFBO29CQUU1QnZCLEdBQUE7b0JBQUEsWUFDSXdCLElBQUEsRUFBUzt3QkFBd0IsTUFBeEIsQ0FBQUYsUUFBQSxDQUFBRyxPQUFBLENBQUFDLEtBQUEsQ0FBQUwsUUFBQSxFQUE4QixJQUE5QixFQURiRyxJQUY0QjtvQkFBM0I7Z0JBQUE7WUFOTjtRQUZQO0lBQUE7SUFBQSxNQURXLENBQUFQLE9BQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VkLWNvbXBhdC8uL3NyYy9wcmVsb2FkL2ZzLmNvZmZlZT84MmE3Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBoYW5kbGVTdGF0LCBpZ25vcmUsIGtleSwga2V5cywgbm9vcCwgb3ZlcnJpZGVzLFxuICBpbmRleE9mID0gW10uaW5kZXhPZjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5rZXlzID0gT2JqZWN0LmtleXMoZnMpO1xuXG5pZ25vcmUgPSBbXCJwcm9taXNlc1wiXTtcblxubm9vcCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmhhbmRsZVN0YXQgPSBmdW5jdGlvbihyZXQpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5yZXQsXG4gICAgaXNGaWxlOiByZXQuaXNGaWxlLmJpbmQocmV0KSxcbiAgICBpc0RpcmVjdG9yeTogcmV0LmlzRGlyZWN0b3J5LmJpbmQocmV0KVxuICB9O1xufTtcblxub3ZlcnJpZGVzID0ge1xuICBzdGF0OiBoYW5kbGVTdGF0LFxuICBzdGF0U3luYzogaGFuZGxlU3RhdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyb21FbnRyaWVzKChmdW5jdGlvbigpIHtcbiAgdmFyIGksIGxlbiwgcmVzdWx0cztcbiAgcmVzdWx0cyA9IFtdO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoaW5kZXhPZi5jYWxsKGlnbm9yZSwga2V5KSA+PSAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmVzdWx0cy5wdXNoKChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvcmlnaW5hbCwgb3ZlcnJpZGUsIHR5cGU7XG4gICAgICBvcmlnaW5hbCA9IGZzW2tleV07XG4gICAgICB0eXBlID0gdHlwZW9mIG9yaWdpbmFsO1xuICAgICAgb3ZlcnJpZGUgPSBvdmVycmlkZXNba2V5XSB8fCBub29wO1xuICAgICAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIgfHwgdHlwZSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBba2V5LCBvcmlnaW5hbF07XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gb3ZlcnJpZGUoUmVmbGVjdC5hcHBseShvcmlnaW5hbCxcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGFyZ3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfSkoKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59KSgpKTtcbiJdLCJuYW1lcyI6WyJoYW5kbGVTdGF0IiwiaWdub3JlIiwia2V5Iiwia2V5cyIsIm5vb3AiLCJvdmVycmlkZXMiLCJpbmRleE9mIiwiZnMiLCJPYmplY3QiLCJ2YWx1ZSIsInJldCIsImlzRmlsZSIsImJpbmQiLCJpc0RpcmVjdG9yeSIsInN0YXQiLCJzdGF0U3luYyIsImZyb21FbnRyaWVzIiwiaSIsImxlbiIsInJlc3VsdHMiLCJsZW5ndGgiLCJjYWxsIiwicHVzaCIsIm9yaWdpbmFsIiwib3ZlcnJpZGUiLCJ0eXBlIiwiYXJncyIsIlJlZmxlY3QiLCJhcHBseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/preload/fs.coffee\n");

/***/ }),

/***/ "./src/preload/index.coffee":
/*!**********************************!*\
  !*** ./src/preload/index.coffee ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fs */ \"./src/preload/fs.coffee\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nelectron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(\"custom-devtools-warning\");\nelectron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld(\"__ED_NATIVE__\", {\n    fs: _fs__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    path: (path__WEBPACK_IMPORTED_MODULE_2___default()),\n    current: path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, \"..\")\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC9pbmRleC5jb2ZmZWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUFBLHdEQUFBO0FBR0lDLHFFQUFBO0lBQ0FDLEVBQUEsRUFBQUEsMkNBQU07SUFDTkMsSUFBQSxFQUFBQSw2Q0FBUztJQUhiRyxPQUFBLEVBQUFILG1EQUFBLENBQUFLLFNBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VkLWNvbXBhdC8uL3NyYy9wcmVsb2FkL2luZGV4LmNvZmZlZT9mYWRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGlwY1JlbmRlcmVyLFxuICBjb250ZXh0QnJpZGdlXG59IGZyb20gXCJlbGVjdHJvblwiO1xuXG5pbXBvcnQgZnMgZnJvbSBcIi4vZnNcIjtcblxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaXBjUmVuZGVyZXIuaW52b2tlKFwiY3VzdG9tLWRldnRvb2xzLXdhcm5pbmdcIik7XG5cbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoXCJfX0VEX05BVElWRV9fXCIsIHtcbiAgZnM6IGZzLFxuICBwYXRoOiBwYXRoLFxuICBjdXJyZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uXCIpXG59KTtcbiJdLCJuYW1lcyI6WyJpcGNSZW5kZXJlciIsImNvbnRleHRCcmlkZ2UiLCJmcyIsInBhdGgiLCJpbnZva2UiLCJleHBvc2VJbk1haW5Xb3JsZCIsImN1cnJlbnQiLCJyZXNvbHZlIiwiX19kaXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/preload/index.coffee\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ var __webpack_exports__ = __webpack_require__("./src/preload/index.coffee");
/******/ var __webpack_export_target__ = exports;
/******/ for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 
