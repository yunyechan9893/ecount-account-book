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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleSubmit)\n/* harmony export */ });\n/* harmony import */ var _resetInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetInput.js */ \"./public/js/inputform/resetInput.js\");\n\r\n\r\nasync function handleSubmit() {\r\n  const classification = handleClassification();\r\n  const transactionDate = handleDate();\r\n  const asset = document.querySelector('#asset').value;\r\n  const category = document.querySelector('#category').value;\r\n  const amount = document.querySelector('#amount').value;\r\n  const description = document.querySelector('#description').value;\r\n  const memo = document.querySelector('#memo').value;\r\n\r\n  const URL = 'http://172.29.12.156:3001';\r\n  // const URL = 'http://localhost:3001';\r\n\r\n  // 날짜 유효성 검사\r\n  if (isNaN(new Date(transactionDate))) {\r\n    alert('날짜가 올바르지 않아요!');\r\n    return;\r\n  }\r\n\r\n  // 날짜 유효성 검사\r\n  if (new Date(transactionDate) > new Date()) {\r\n    alert('미래의 날짜는 입력할 수 없어요!');\r\n    return;\r\n  }\r\n\r\n  // 금액 유효성 검사\r\n  if (amount === '') {\r\n    alert('금액을 입력해주세요!');\r\n    return;\r\n  }\r\n\r\n  if (+amount < 0) {\r\n    alert('금액은 양수로 입력해주세요!');\r\n    return;\r\n  }\r\n\r\n  const obj = {\r\n    memberId: 1,\r\n    transactionDate,\r\n    category,\r\n    description,\r\n    amount: +amount,\r\n    memo,\r\n    asset,\r\n    classification,\r\n  };\r\n\r\n  const result = await fetch(`${URL}/finances`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(obj),\r\n  });\r\n\r\n  if (result.status === 200) {\r\n    (0,_resetInput_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    alert('내역을 성공적으로 등록했어요!');\r\n  }\r\n}\r\n\r\n// 카테고리 체크\r\nfunction handleClassification() {\r\n  const classifications = document.getElementsByName('classification');\r\n  let result;\r\n\r\n  classifications.forEach((it) => {\r\n    if (it.checked) {\r\n      result = it.value;\r\n      return;\r\n    }\r\n  });\r\n\r\n  return result;\r\n}\r\n\r\n// 날짜 변환\r\nfunction handleDate() {\r\n  const date = document.querySelector('#date');\r\n  const time = document.querySelector('#time');\r\n\r\n  if (!date.value || !time.value) {\r\n    return NaN;\r\n  }\r\n\r\n  return `${date.value} ${time.value}:00`;\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/inputform/handleSubmit.js?");

/***/ }),

/***/ "./public/js/inputform/main.js":
/*!*************************************!*\
  !*** ./public/js/inputform/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSubmit.js */ \"./public/js/inputform/handleSubmit.js\");\n/* harmony import */ var _dateChecker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateChecker.js */ \"./public/js/inputform/dateChecker.js\");\n/* harmony import */ var _timeChecker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeChecker.js */ \"./public/js/inputform/timeChecker.js\");\n/* harmony import */ var _resetInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetInput.js */ \"./public/js/inputform/resetInput.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_dateChecker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_timeChecker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nconst form = document.querySelector('.form');\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  (0,_handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\nconst resetBtn = document.querySelector('#reset-btn');\r\nresetBtn.addEventListener('click', _resetInput_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\r\n// classification에 따른 select option 값 조절\r\nconst classfication = document.querySelectorAll('.classification');\r\n\r\nconst selectBox = document.querySelector('#category');\r\n\r\nlet income = [\r\n  '식비',\r\n  '여행,여가',\r\n  '교통비',\r\n  '생활용품',\r\n  '지식,문화',\r\n  '의복,미용',\r\n  '수리,수선',\r\n  '주거,통신',\r\n  '교육비',\r\n  '의료,건강,보험',\r\n  '증여,세금,이자',\r\n  '경조사비',\r\n  '아내카드비',\r\n  '아내사랑해',\r\n];\r\n\r\nlet expenditure = [\r\n  '월급',\r\n  '퇴직연금(회사몫)',\r\n  '비정기소득',\r\n  '상여금',\r\n  '배당금',\r\n  '기타수익',\r\n];\r\n\r\nclassfication.forEach((it) => {\r\n  it.addEventListener('change', (e) => {\r\n    const incomes = document.querySelectorAll('.expenditure');\r\n    const expenditures = document.querySelectorAll('.income');\r\n\r\n    if (e.target.value === 'INCOME') {\r\n      selectBox.value = '월급';\r\n      incomes.forEach((it) => {\r\n        it.style.display = 'block';\r\n      });\r\n      expenditures.forEach((it) => {\r\n        it.style.display = 'none';\r\n      });\r\n    } else {\r\n      selectBox.value = '식비';\r\n      incomes.forEach((it) => {\r\n        it.style.display = 'none';\r\n      });\r\n      expenditures.forEach((it) => {\r\n        it.style.display = 'block';\r\n      });\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://account-book/./public/js/inputform/main.js?");

/***/ }),

/***/ "./public/js/inputform/resetInput.js":
/*!*******************************************!*\
  !*** ./public/js/inputform/resetInput.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ resetInput)\n/* harmony export */ });\nfunction resetInput() {\r\n  const category = document.querySelector('#category');\r\n  const date = document.querySelector('#date');\r\n  const time = document.querySelector('#time');\r\n  const asset = document.querySelector('#asset');\r\n  // const classification = document.querySelector('.classification');\r\n  const amount = document.querySelector('#amount');\r\n  const description = document.querySelector('#description');\r\n  const memo = document.querySelector('#memo');\r\n\r\n  // classification.checked = true;\r\n  date.value = '';\r\n  time.value = '';\r\n  asset.value = '카카오뱅크';\r\n  category.selectedIndex = category.selectedIndex < 6 ? 0 : 6;\r\n  amount.value = '';\r\n  description.value = '';\r\n  memo.value = '';\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/inputform/resetInput.js?");

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