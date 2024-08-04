/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/inputform/dateChecker.js":
/*!********************************************!*\
  !*** ./public/js/inputform/dateChecker.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dateChecker)\n/* harmony export */ });\nfunction dateChecker() {\r\n  let date = document.querySelector('#date');\r\n\r\n  date.addEventListener('input', () => {\r\n    let value = date.value.replace(/\\D/g, '');\r\n    let length = value.length;\r\n\r\n    // 출력할 결과 변수\r\n    let result = '';\r\n\r\n    if (length < 4) {\r\n      result = value;\r\n    } else if (length < 6) {\r\n      result += value.substring(0, 4);\r\n      if (!date.value.endsWith('-')) {\r\n        result += '-';\r\n        result += value.substring(4);\r\n      }\r\n    } else {\r\n      result += value.substring(0, 4);\r\n      result += '-';\r\n      result += value.substring(4, 6);\r\n      if (!date.value.endsWith('-')) {\r\n        result += '-';\r\n        result += value.substring(6);\r\n      }\r\n    }\r\n    date.value = result;\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/inputform/dateChecker.js?");

/***/ }),

/***/ "./public/js/inputform/handleSubmit.js":
/*!*********************************************!*\
  !*** ./public/js/inputform/handleSubmit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleSubmit)\n/* harmony export */ });\n/* harmony import */ var _resetInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetInput.js */ \"./public/js/inputform/resetInput.js\");\n\r\n\r\nasync function handleSubmit() {\r\n\tconst classification = handleClassification();\r\n\tconst transactionDate = handleDate();\r\n\tconst asset = document.querySelector('#asset').value;\r\n\tconst category = document.querySelector('#category').value;\r\n\tconst amount = document.querySelector('#amount').value;\r\n\tconst description = document.querySelector('#description').value;\r\n\tconst memo = document.querySelector('#memo').value;\r\n\r\n\tconst URL = 'http://172.29.12.156:3001';\r\n\r\n\t// 날짜 유효성 검사\r\n\tif (isNaN(new Date(transactionDate))) {\r\n\t\talert('날짜가 올바르지 않아요!');\r\n\t\treturn;\r\n\t}\r\n\r\n\t// 날짜 유효성 검사\r\n\tif (new Date(transactionDate) > new Date()) {\r\n\t\talert('미래의 날짜는 입력할 수 없어요!');\r\n\t\treturn;\r\n\t}\r\n\r\n\t// 금액 유효성 검사\r\n\tif (amount === '') {\r\n\t\talert('금액을 입력해주세요!');\r\n\t\treturn;\r\n\t}\r\n\r\n\tif (+amount < 0) {\r\n\t\talert('금액은 양수로 입력해주세요!');\r\n\t\treturn;\r\n\t}\r\n\r\n\tconst obj = {\r\n\t\tmemberId: 1,\r\n\t\ttransactionDate,\r\n\t\tcategory,\r\n\t\tdescription,\r\n\t\tamount: +amount,\r\n\t\tmemo,\r\n\t\tasset,\r\n\t\tclassification,\r\n\t};\r\n\r\n\tconst result = await fetch(`${URL}/finances`, {\r\n\t\tmethod: 'POST',\r\n\t\theaders: {\r\n\t\t\t'Content-Type': 'application/json',\r\n\t\t},\r\n\t\tbody: JSON.stringify(obj),\r\n\t});\r\n\r\n\tif (result.status === 200) {\r\n\t\t(0,_resetInput_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\t\talert('내역을 성공적으로 등록했어요!');\r\n\t}\r\n}\r\n\r\n// 카테고리 체크\r\nfunction handleClassification() {\r\n\tconst classifications = document.getElementsByName('classification');\r\n\tlet result;\r\n\r\n\tclassifications.forEach((it) => {\r\n\t\tif (it.checked) {\r\n\t\t\tresult = it.value;\r\n\t\t\treturn;\r\n\t\t}\r\n\t});\r\n\r\n\treturn result;\r\n}\r\n\r\n// 날짜 변환\r\nfunction handleDate() {\r\n\tconst date = document.querySelector('#date');\r\n\tconst time = document.querySelector('#time');\r\n\r\n\tif (!date.value || !time.value) {\r\n\t\treturn NaN;\r\n\t}\r\n\r\n\treturn `${date.value} ${time.value}:00`;\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/inputform/handleSubmit.js?");

/***/ }),

/***/ "./public/js/inputform/main.js":
/*!*************************************!*\
  !*** ./public/js/inputform/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSubmit.js */ \"./public/js/inputform/handleSubmit.js\");\n/* harmony import */ var _dateChecker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateChecker.js */ \"./public/js/inputform/dateChecker.js\");\n/* harmony import */ var _timeChecker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeChecker.js */ \"./public/js/inputform/timeChecker.js\");\n/* harmony import */ var _resetInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetInput.js */ \"./public/js/inputform/resetInput.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_dateChecker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_timeChecker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nconst form = document.querySelector('.form');\r\nform.addEventListener('submit', (e) => {\r\n\te.preventDefault();\r\n\t(0,_handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\nconst resetBtn = document.querySelector('#reset-btn');\r\nresetBtn.addEventListener('click', _resetInput_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\r\n// classification에 따른 select option 값 조절\r\nconst classfication = document.querySelectorAll('.classification');\r\n\r\nconst selectBox = document.querySelector('#category');\r\n\r\nlet income = [\r\n\t'식비',\r\n\t'여행,여가',\r\n\t'교통비',\r\n\t'생활용품',\r\n\t'지식,문화',\r\n\t'의복,미용',\r\n\t'수리,수선',\r\n\t'주거,통신',\r\n\t'교육비',\r\n\t'의료,건강,보험',\r\n\t'증여,세금,이자',\r\n\t'경조사비',\r\n\t'아내카드비',\r\n\t'아내사랑해',\r\n];\r\n\r\nlet expenditure = [\r\n\t'월급',\r\n\t'퇴직연금(회사몫)',\r\n\t'비정기소득',\r\n\t'상여금',\r\n\t'배당금',\r\n\t'기타수익',\r\n];\r\n\r\nclassfication.forEach((it) => {\r\n\tit.addEventListener('change', (e) => {\r\n\t\tconst incomes = document.querySelectorAll('.income');\r\n\t\tconst expenditures = document.querySelectorAll('.expenditure');\r\n\r\n\t\tif (e.target.value === 'INCOME') {\r\n\t\t\tselectBox.value = '식비';\r\n\t\t\tincomes.forEach((it) => {\r\n\t\t\t\tit.style.display = 'block';\r\n\t\t\t});\r\n\t\t\texpenditures.forEach((it) => {\r\n\t\t\t\tit.style.display = 'none';\r\n\t\t\t});\r\n\t\t} else {\r\n\t\t\tselectBox.value = '월급';\r\n\t\t\tincomes.forEach((it) => {\r\n\t\t\t\tit.style.display = 'none';\r\n\t\t\t});\r\n\t\t\texpenditures.forEach((it) => {\r\n\t\t\t\tit.style.display = 'block';\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n});\r\n\n\n//# sourceURL=webpack://account-book/./public/js/inputform/main.js?");

/***/ }),

/***/ "./public/js/inputform/resetInput.js":
/*!*******************************************!*\
  !*** ./public/js/inputform/resetInput.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ resetInput)\n/* harmony export */ });\nfunction resetInput() {\r\n\tconst category = document.querySelector('#category');\r\n\tconst date = document.querySelector('#date');\r\n\tconst time = document.querySelector('#time');\r\n\tconst asset = document.querySelector('#asset');\r\n\t// const classification = document.querySelector('.classification');\r\n\tconst amount = document.querySelector('#amount');\r\n\tconst description = document.querySelector('#description');\r\n\tconst memo = document.querySelector('#memo');\r\n\r\n\t// classification.checked = true;\r\n\tdate.value = '';\r\n\ttime.value = '';\r\n\tasset.value = '카카오뱅크';\r\n\tcategory.selectedIndex = category.selectedIndex < 13 ? 0 : 13;\r\n\tamount.value = '';\r\n\tdescription.value = '';\r\n\tmemo.value = '';\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/inputform/resetInput.js?");

/***/ }),

/***/ "./public/js/inputform/timeChecker.js":
/*!********************************************!*\
  !*** ./public/js/inputform/timeChecker.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ timeChecker)\n/* harmony export */ });\nfunction timeChecker() {\r\n  let time = document.querySelector('#time');\r\n\r\n  time.addEventListener('input', () => {\r\n    let value = time.value.replace(/\\D/g, '');\r\n    let length = value.length;\r\n\r\n    // 출력할 결과 변수\r\n    let result = '';\r\n\r\n    if (length < 2) {\r\n      result = value;\r\n    } else {\r\n      result += value.substring(0, 2);\r\n      if (!time.value.endsWith(':')) {\r\n        result += ':';\r\n        result += value.substring(2);\r\n      }\r\n    }\r\n\r\n    time.value = result;\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/inputform/timeChecker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/inputform/main.js");
/******/ 	
/******/ })()
;