/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/common.js":
/*!*****************************!*\
  !*** ./public/js/common.js ***!
  \*****************************/
/***/ (() => {

eval("/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n/******/ (() => { // webpackBootstrap\n/******/ \t\"use strict\";\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./public/js/_common.js\":\n/*!******************************!*\\\n  !*** ./public/js/_common.js ***!\n  \\******************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   LOG: () => (/* binding */ LOG),\\n/* harmony export */   dateToString: () => (/* binding */ dateToString)\\n/* harmony export */ });\\nasync function LOG(func, ...args) {\\r\\n\\tconsole.log(`==========${func.name}==========`);\\r\\n\\treturn await func(...args);\\r\\n}\\r\\n\\r\\nfunction dateToString(date) {\\r\\n\\treturn `${date.getFullYear()}-${(date.getMonth() + 1)\\r\\n\\t\\t.toString()\\r\\n\\t\\t.padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;\\r\\n}\\r\\n\\n\\n//# sourceURL=webpack://account-book/./public/js/_common.js?\");\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The require scope\n/******/ \tvar __nested_webpack_require_1692__ = {};\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t(() => {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__nested_webpack_require_1692__.d = (exports, definition) => {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__nested_webpack_require_1692__.o(definition, key) && !__nested_webpack_require_1692__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t(() => {\n/******/ \t\t__nested_webpack_require_1692__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/make namespace object */\n/******/ \t(() => {\n/******/ \t\t// define __esModule on exports\n/******/ \t\t__nested_webpack_require_1692__.r = (exports) => {\n/******/ \t\t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t\t}\n/******/ \t\t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/************************************************************************/\n/******/ \t\n/******/ \t// startup\n/******/ \t// Load entry module and return exports\n/******/ \t// This entry module can't be inlined because the eval devtool is used.\n/******/ \tvar __nested_webpack_exports__ = {};\n/******/ \t__webpack_modules__[\"./public/js/_common.js\"](0, __nested_webpack_exports__, __nested_webpack_require_1692__);\n/******/ \t\n/******/ })()\n;\n\n//# sourceURL=webpack://account-book/./public/js/common.js?");

/***/ }),

/***/ "./public/js/records/checkboxHandler.js":
/*!**********************************************!*\
  !*** ./public/js/records/checkboxHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ selectAllCheckbox)\n/* harmony export */ });\nfunction selectAllCheckbox(mainCheckbox) {\r\n  const checkboxes = document.querySelectorAll('.checkbox');\r\n\r\n  mainCheckbox.addEventListener('click', () => {\r\n    for (let checkbox of checkboxes) {\r\n      checkbox.checked = mainCheckbox.checked;\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/records/checkboxHandler.js?");

/***/ }),

/***/ "./public/js/records/controller.js":
/*!*****************************************!*\
  !*** ./public/js/records/controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCount: () => (/* binding */ getCount),\n/* harmony export */   getFinance: () => (/* binding */ getFinance)\n/* harmony export */ });\n/* harmony import */ var _createTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTable.js */ \"./public/js/records/createTable.js\");\n\r\n\r\nconst URL = 'http://172.29.12.156:3001';\r\n// const URL = 'http://localhost:3001';\r\n\r\nasync function getCount(date) {\r\n  return new Promise((resolve, reject) => {\r\n    fetch(URL + `/finance/count?date=${date}`, {\r\n      method: 'GET',\r\n      headers: {\r\n        memberId: '1',\r\n      },\r\n    })\r\n      .then((response) => {\r\n        if (!response.ok) {\r\n          throw new Error('Network response was not ok');\r\n        }\r\n        return response.json(); // JSON 형태로 변환\r\n      })\r\n      .then((data) => {\r\n        document.querySelector('#all-money').textContent = data.money.all;\r\n        document.querySelector('#income-money').textContent = data.money.income;\r\n        document.querySelector('#expenditure-money').textContent =\r\n          data.money.expenditure;\r\n\r\n        document.querySelector('#all-count').textContent = data.count.all;\r\n        document.querySelector('#income-count').textContent = data.count.income;\r\n        document.querySelector('#expenditure-count').textContent =\r\n          data.count.expenditure;\r\n      })\r\n      .catch((error) => {\r\n        console.error('There was a problem with the fetch operation:', error);\r\n      });\r\n  });\r\n}\r\n\r\nasync function getFinance(date, type) {\r\n  return new Promise((resolve, reject) => {\r\n    fetch(URL + `/finance?date=${date}&type=${type}`, {\r\n      method: 'GET',\r\n      headers: {\r\n        memberId: '1',\r\n      },\r\n    })\r\n      .then((response) => {\r\n        if (!response.ok) {\r\n          throw new Error('Network response was not ok');\r\n        }\r\n        return response.json(); // JSON 형태로 변환\r\n      })\r\n      .then((data) => {\r\n        (0,_createTable_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, type);\r\n      })\r\n      .catch((error) => {\r\n        console.error('There was a problem with the fetch operation:', error);\r\n      });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/records/controller.js?");

/***/ }),

/***/ "./public/js/records/createTable.js":
/*!******************************************!*\
  !*** ./public/js/records/createTable.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tableHandler)\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common.js */ \"./public/js/common.js\");\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDate.js */ \"./public/js/records/getDate.js\");\n\r\n\r\n\r\n// 테이블 데이터 동적 생성\r\nasync function tableHandler(data, type) {\r\n  const mainTable = document.querySelector('.table-body');\r\n\r\n  const rows = Array.from(mainTable.querySelectorAll('tr'));\r\n\r\n  rows.forEach((row, index) => {\r\n    if (index > 0) { \r\n      mainTable.removeChild(row);\r\n    }\r\n  });\r\n \r\n  if (data == undefined) {\r\n    return;\r\n  }\r\n\r\n  console.log(data)\r\n  for (let datum of data) {\r\n    console.log(datum.classification, type)\r\n\r\n    if (type != \"ALL\" && datum.classification != type) {\r\n      continue;\r\n    }\r\n\r\n    function createTd(value) {\r\n      let td = document.createElement('td');\r\n      td.textContent = value\r\n      return td;\r\n    }\r\n\r\n    let tr = document.createElement('tr');\r\n    tr.classList.add('row');\r\n\r\n    let checkBox = document.createElement('input');\r\n    checkBox.setAttribute('type', 'checkbox');\r\n    checkBox.classList.add('btn');\r\n    checkBox.classList.add('checkbox');\r\n\r\n    let checkBoxTd = document.createElement('td');\r\n\r\n    checkBoxTd.appendChild(checkBox);\r\n\r\n    tr.appendChild(checkBoxTd);\r\n\r\n    const date = makeCustomDate(datum.transaction_date)\r\n    const dateTd = createTd(date)\r\n    tr.appendChild(dateTd);\r\n\r\n    const assetTd = createTd(datum.asset)\r\n    tr.appendChild(assetTd);\r\n\r\n    const categoryTypeTd = createTd(datum.category.category_type)\r\n    tr.appendChild(categoryTypeTd);\r\n\r\n    const categoryTd = createTd(datum.category.middle_category)\r\n    tr.appendChild(categoryTd);\r\n\r\n    // const descriptionTd = createTd(datum.description)\r\n    // tr.appendChild(descriptionTd);\r\n\r\n    const amountTd = createTd(datum.amount)\r\n    tr.appendChild(amountTd);\r\n\r\n    mainTable.appendChild(tr);\r\n  }\r\n}\r\n\r\n\r\nfunction makeCustomDate(standardDate) {\r\n  const date = new Date(standardDate);\r\n\r\n  // 요일 배열을 정의합니다.\r\n  const daysOfWeek = [\"일\", \"월\", \"화\", \"수\", \"목\", \"금\", \"토\"];\r\n\r\n  // 년, 월, 일, 요일, 시간, 분을 추출합니다.\r\n  const year = date.getUTCFullYear();\r\n  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1\r\n  const day = String(date.getUTCDate()).padStart(2, '0');\r\n  const dayOfWeek = daysOfWeek[date.getUTCDay()];\r\n  const hours = String(date.getUTCHours()).padStart(2, '0');\r\n  const minutes = String(date.getUTCMinutes()).padStart(2, '0');\r\n\r\n  // 원하는 형식으로 날짜 문자열을 생성합니다.\r\n  return`${year}-${month}-${day}(${dayOfWeek}) ${hours}:${minutes}`;\r\n}\n\n//# sourceURL=webpack://account-book/./public/js/records/createTable.js?");

/***/ }),

/***/ "./public/js/records/getDate.js":
/*!**************************************!*\
  !*** ./public/js/records/getDate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMonthly: () => (/* binding */ getMonthly),\n/* harmony export */   getYear: () => (/* binding */ getYear)\n/* harmony export */ });\nfunction getMonthly() {\r\n  let date = (new Date().getMonth() + 1).toString();\r\n\r\n  if (date.length == 1) {\r\n    date = \"0\" + date;\r\n  }\r\n\r\n  return date\r\n}\r\n\r\nfunction getYear() {\r\n  return new Date().getFullYear()\r\n}\n\n//# sourceURL=webpack://account-book/./public/js/records/getDate.js?");

/***/ }),

/***/ "./public/js/records/main.js":
/*!***********************************!*\
  !*** ./public/js/records/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTable.js */ \"./public/js/records/createTable.js\");\n/* harmony import */ var _checkboxHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkboxHandler.js */ \"./public/js/records/checkboxHandler.js\");\n/* harmony import */ var _getDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDate.js */ \"./public/js/records/getDate.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller.js */ \"./public/js/records/controller.js\");\n\r\n\r\n\r\n\r\n\r\nvar type = 'ALL';\r\n\r\n// ELEMENTS\r\nconst mainCheckbox = document.querySelector('.checkbox');\r\nconst registBtn = document.querySelector('.registBtn');\r\n\r\n(0,_checkboxHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mainCheckbox);\r\n\r\nconst date = document.querySelector('.date');\r\ndate.textContent = (0,_getDate_js__WEBPACK_IMPORTED_MODULE_2__.getYear)() + '-' + (0,_getDate_js__WEBPACK_IMPORTED_MODULE_2__.getMonthly)();\r\n(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getCount)(date.textContent);\r\n\r\nconst dateElement = document.querySelector('.date');\r\nconst decreasementButton = document.getElementById('prev');\r\nconst incrementButton = document.getElementById('next');\r\n\r\nlet currentDate = new Date(dateElement.textContent + '-01');\r\n\r\nfunction updateDate() {\r\n\tconst year = currentDate.getFullYear();\r\n\tconst month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월을 두 자리 숫자로 포맷\r\n\r\n\t// 날짜를 HTML 요소에 업데이트합니다.\r\n\tdateElement.textContent = `${year}-${month}`;\r\n\treturn `${year}-${month}`;\r\n}\r\n\r\nfunction increaseMonth() {\r\n\tcurrentDate.setMonth(currentDate.getMonth() + 1);\r\n\tconst date = updateDate();\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getCount)(date);\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(date, type);\r\n}\r\n\r\nfunction decreaseMonth() {\r\n\tcurrentDate.setMonth(currentDate.getMonth() - 1);\r\n\tconst date = updateDate();\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getCount)(date);\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(date, type);\r\n}\r\n\r\nincrementButton.addEventListener('click', increaseMonth);\r\ndecreasementButton.addEventListener('click', decreaseMonth);\r\n\r\nconst allButton = document.getElementById('all');\r\nconst incomeButton = document.getElementById('income');\r\nconst expenditureButton = document.getElementById('expenditure');\r\n\r\nfunction clickAll() {\r\n\ttype = 'ALL';\r\n\tconst date = updateDate();\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(date, type);\r\n}\r\n\r\nfunction clickIncome() {\r\n\ttype = 'INCOME';\r\n\tconst date = updateDate();\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(date, type);\r\n}\r\n\r\nfunction clickExpenditure() {\r\n\ttype = 'EXPENDITURE';\r\n\tconst date = updateDate();\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(date, type);\r\n\tconsole.log(type);\r\n}\r\n\r\n(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(updateDate(), type);\r\n\r\nallButton.addEventListener('click', clickAll);\r\nincomeButton.addEventListener('click', clickIncome);\r\nexpenditureButton.addEventListener('click', clickExpenditure);\r\n\n\n//# sourceURL=webpack://account-book/./public/js/records/main.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/records/main.js");
/******/ 	
/******/ })()
;