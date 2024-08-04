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

/***/ "./public/js/common.js":
/*!*****************************!*\
  !*** ./public/js/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LOG: () => (/* binding */ LOG),\n/* harmony export */   dateToString: () => (/* binding */ dateToString)\n/* harmony export */ });\nasync function LOG(func, ...args) {\r\n  console.log(`==========${func.name}==========`);\r\n  return await func(...args);\r\n}\r\n\r\nfunction dateToString(date) {\r\n  return `${date.getFullYear()}-${(date.getMonth() + 1)\r\n    .toString()\r\n    .padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/common.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSubmit.js */ \"./public/js/inputform/handleSubmit.js\");\n/* harmony import */ var _dateChecker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateChecker.js */ \"./public/js/inputform/dateChecker.js\");\n/* harmony import */ var _timeChecker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeChecker.js */ \"./public/js/inputform/timeChecker.js\");\n/* harmony import */ var _resetInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetInput.js */ \"./public/js/inputform/resetInput.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_dateChecker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_timeChecker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nconst form = document.querySelector('.form');\r\nform.addEventListener('submit', (e) => {\r\n\te.preventDefault();\r\n\t(0,_handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\nconst resetBtn = document.querySelector('#reset-btn');\r\nresetBtn.addEventListener('click', _resetInput_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\r\n// classification에 따른 select option 값 조절\r\nconst classfication = document.querySelectorAll('.classification');\r\n\r\nconst selectBox = document.querySelector('#category');\r\n\r\nlet income = [\r\n\t'식비',\r\n\t'여행,여가',\r\n\t'교통비',\r\n\t'생활용품',\r\n\t'지식,문화',\r\n\t'의복,미용',\r\n\t'수리,수선',\r\n\t'주거,통신',\r\n\t'교육비',\r\n\t'의료,건강,보험',\r\n\t'증여,세금,이자',\r\n\t'경조사비',\r\n\t'아내카드비',\r\n\t'아내사랑해',\r\n];\r\n\r\nlet expenditure = [\r\n\t'월급',\r\n\t'퇴직연금(회사몫)',\r\n\t'비정기소득',\r\n\t'상여금',\r\n\t'배당금',\r\n\t'기타수익',\r\n];\r\n\r\nclassfication.forEach((it) => {\r\n\tit.addEventListener('change', (e) => {\r\n\t\tconst incomes = document.querySelectorAll('.income');\r\n\t\tconst expenditures = document.querySelectorAll('.expenditure');\r\n\r\n\t\tif (e.target.value === 'INCOME') {\r\n\t\t\tselectBox.value = '식비';\r\n\t\t\tincomes.forEach((it) => {\r\n\t\t\t\tit.style.display = 'block';\r\n\t\t\t});\r\n\t\t\texpenditures.forEach((it) => {\r\n\t\t\t\tit.style.display = 'none';\r\n\t\t\t});\r\n\t\t} else {\r\n\t\t\tselectBox.value = '월급';\r\n\t\t\tincomes.forEach((it) => {\r\n\t\t\t\tit.style.display = 'none';\r\n\t\t\t});\r\n\t\t\texpenditures.forEach((it) => {\r\n\t\t\t\tit.style.display = 'block';\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n});\r\n\r\nlet a = 1234567;\r\nconsole.log(a.toLocaleString());\r\nconsole.log(Number(a.toLocaleString()));\r\n\n\n//# sourceURL=webpack://account-book/./public/js/inputform/main.js?");

/***/ }),

/***/ "./public/js/inputform/resetInput.js":
/*!*******************************************!*\
  !*** ./public/js/inputform/resetInput.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ resetInput)\n/* harmony export */ });\nfunction resetInput() {\r\n  const category = document.querySelector('#category');\r\n  const date = document.querySelector('#date');\r\n  const time = document.querySelector('#time');\r\n  const asset = document.querySelector('#asset');\r\n  const classification = document.querySelector('.classification');\r\n  const amount = document.querySelector('#amount');\r\n  const description = document.querySelector('#description');\r\n  const memo = document.querySelector('#memo');\r\n\r\n  classification.checked = true;\r\n  date.value = '';\r\n  time.value = '';\r\n  asset.value = '카카오뱅크';\r\n  category.selectedIndex = 0;\r\n  amount.value = '';\r\n  description.value = '';\r\n  memo.value = '';\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/inputform/resetInput.js?");

/***/ }),

/***/ "./public/js/inputform/timeChecker.js":
/*!********************************************!*\
  !*** ./public/js/inputform/timeChecker.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ timeChecker)\n/* harmony export */ });\nfunction timeChecker() {\r\n  let time = document.querySelector('#time');\r\n\r\n  time.addEventListener('input', () => {\r\n    let value = time.value.replace(/\\D/g, '');\r\n    let length = value.length;\r\n\r\n    // 출력할 결과 변수\r\n    let result = '';\r\n\r\n    if (length < 2) {\r\n      result = value;\r\n    } else {\r\n      result += value.substring(0, 2);\r\n      if (!time.value.endsWith(':')) {\r\n        result += ':';\r\n        result += value.substring(2);\r\n      }\r\n    }\r\n\r\n    time.value = result;\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/inputform/timeChecker.js?");

/***/ }),

/***/ "./public/js/records/checkboxHandler.js":
/*!**********************************************!*\
  !*** ./public/js/records/checkboxHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ selectAllCheckbox)\n/* harmony export */ });\nfunction selectAllCheckbox(mainCheckbox) {\r\n  const checkboxes = document.querySelectorAll('.checkbox');\r\n\r\n  mainCheckbox.addEventListener('click', () => {\r\n    for (let checkbox of checkboxes) {\r\n      checkbox.checked = mainCheckbox.checked;\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/records/checkboxHandler.js?");

/***/ }),

/***/ "./public/js/records/controller.js":
/*!*****************************************!*\
  !*** ./public/js/records/controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCount: () => (/* binding */ getCount),\n/* harmony export */   getFinance: () => (/* binding */ getFinance)\n/* harmony export */ });\n/* harmony import */ var _createTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTable.js */ \"./public/js/records/createTable.js\");\n\r\n\r\nconst URL = 'http://172.29.12.156:3001'\r\n\r\nasync function getCount(date) {\r\n    return new Promise((resolve, reject) => {\r\n        fetch( URL + `/finance/count?date=${date}`, {\r\n            method: 'GET',\r\n            headers: {\r\n                memberId:'1'\r\n            }\r\n        }).then(response => {\r\n            if (!response.ok) {\r\n                throw new Error('Network response was not ok');\r\n            }\r\n            return response.json(); // JSON 형태로 변환\r\n        })\r\n        .then(data => {\r\n            document.querySelector('#all-money').textContent = data.money.all;\r\n            document.querySelector('#income-money').textContent = data.money.income;\r\n            document.querySelector('#expenditure-money').textContent = data.money.expenditure;\r\n            \r\n            document.querySelector('#all-count').textContent = data.count.all;\r\n            document.querySelector('#income-count').textContent = data.count.income;\r\n            document.querySelector('#expenditure-count').textContent = data.count.expenditure;\r\n            \r\n        })\r\n        .catch(error => {\r\n            console.error('There was a problem with the fetch operation:', error);\r\n        })\r\n    });\r\n}\r\n\r\nasync function getFinance(date, type) {\r\n    return new Promise((resolve, reject) => {\r\n        fetch( URL + `/finance?date=${date}&type=${type}`, {\r\n            method: 'GET',\r\n            headers: {\r\n                memberId:'1'\r\n            }\r\n        }).then(response => {\r\n            if (!response.ok) {\r\n                throw new Error('Network response was not ok');\r\n            }\r\n            return response.json(); // JSON 형태로 변환\r\n        })\r\n        .then(data => {\r\n            (0,_createTable_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, type)\r\n        })\r\n        .catch(error => {\r\n            console.error('There was a problem with the fetch operation:', error);\r\n        })\r\n    });\r\n}\n\n//# sourceURL=webpack://account-book/./public/js/records/controller.js?");

/***/ }),

/***/ "./public/js/records/createTable.js":
/*!******************************************!*\
  !*** ./public/js/records/createTable.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tableHandler)\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common.js */ \"./public/js/common.js\");\n/* harmony import */ var _getDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDate.js */ \"./public/js/records/getDate.js\");\n\r\n\r\n\r\n// 테이블 데이터 동적 생성\r\nasync function tableHandler(data, type) {\r\n  const mainTable = document.querySelector('.table-body');\r\n\r\n  const rows = Array.from(mainTable.querySelectorAll('tr'));\r\n\r\n  rows.forEach((row, index) => {\r\n    if (index > 0) { \r\n      mainTable.removeChild(row);\r\n    }\r\n  });\r\n \r\n  if (data == undefined) {\r\n    return;\r\n  }\r\n\r\n  console.log(data)\r\n  for (let datum of data) {\r\n    console.log(datum.classification, type)\r\n\r\n    if (type != \"ALL\" && datum.classification != type) {\r\n      continue;\r\n    }\r\n\r\n    function createTd(value) {\r\n      let td = document.createElement('td');\r\n      td.textContent = value\r\n      return td;\r\n    }\r\n\r\n    let tr = document.createElement('tr');\r\n    tr.classList.add('row');\r\n\r\n    let checkBox = document.createElement('input');\r\n    checkBox.setAttribute('type', 'checkbox');\r\n    checkBox.classList.add('btn');\r\n    checkBox.classList.add('checkbox');\r\n\r\n    let checkBoxTd = document.createElement('td');\r\n\r\n    checkBoxTd.appendChild(checkBox);\r\n\r\n    tr.appendChild(checkBoxTd);\r\n\r\n    const date = makeCustomDate(datum.transaction_date)\r\n    const dateTd = createTd(date)\r\n    tr.appendChild(dateTd);\r\n\r\n    const assetTd = createTd(datum.asset)\r\n    tr.appendChild(assetTd);\r\n\r\n    const categoryTypeTd = createTd(datum.category.category_type)\r\n    tr.appendChild(categoryTypeTd);\r\n\r\n    const categoryTd = createTd(datum.category.middle_category)\r\n    tr.appendChild(categoryTd);\r\n\r\n    // const descriptionTd = createTd(datum.description)\r\n    // tr.appendChild(descriptionTd);\r\n\r\n    const amountTd = createTd(datum.amount)\r\n    tr.appendChild(amountTd);\r\n\r\n    mainTable.appendChild(tr);\r\n  }\r\n}\r\n\r\n\r\nfunction makeCustomDate(standardDate) {\r\n  const date = new Date(standardDate);\r\n\r\n  // 요일 배열을 정의합니다.\r\n  const daysOfWeek = [\"일\", \"월\", \"화\", \"수\", \"목\", \"금\", \"토\"];\r\n\r\n  // 년, 월, 일, 요일, 시간, 분을 추출합니다.\r\n  const year = date.getUTCFullYear();\r\n  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1\r\n  const day = String(date.getUTCDate()).padStart(2, '0');\r\n  const dayOfWeek = daysOfWeek[date.getUTCDay()];\r\n  const hours = String(date.getUTCHours()).padStart(2, '0');\r\n  const minutes = String(date.getUTCMinutes()).padStart(2, '0');\r\n\r\n  // 원하는 형식으로 날짜 문자열을 생성합니다.\r\n  return`${year}-${month}-${day}(${dayOfWeek}) ${hours}:${minutes}`;\r\n}\n\n//# sourceURL=webpack://account-book/./public/js/records/createTable.js?");

/***/ }),

/***/ "./public/js/records/getDate.js":
/*!**************************************!*\
  !*** ./public/js/records/getDate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMonthly: () => (/* binding */ getMonthly),\n/* harmony export */   getYear: () => (/* binding */ getYear)\n/* harmony export */ });\nfunction getMonthly() {\r\n  let date = (new Date().getMonth() + 1).toString();\r\n\r\n  if (date.length == 1) {\r\n    date = \"0\" + date;\r\n  }\r\n\r\n  return date\r\n}\r\n\r\nfunction getYear() {\r\n  return new Date().getFullYear()\r\n}\n\n//# sourceURL=webpack://account-book/./public/js/records/getDate.js?");

/***/ }),

/***/ "./public/js/records/main.js":
/*!***********************************!*\
  !*** ./public/js/records/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTable.js */ \"./public/js/records/createTable.js\");\n/* harmony import */ var _checkboxHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkboxHandler.js */ \"./public/js/records/checkboxHandler.js\");\n/* harmony import */ var _getDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDate.js */ \"./public/js/records/getDate.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller.js */ \"./public/js/records/controller.js\");\n\r\n\r\n\r\n\r\n\r\nvar type = 'ALL';\r\n\r\n// ELEMENTS\r\nconst mainCheckbox = document.querySelector('.checkbox');\r\nconst registBtn = document.querySelector('.registBtn');\r\n\r\n(0,_checkboxHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mainCheckbox);\r\n\r\nconst date = document.querySelector('.date');\r\ndate.textContent = (0,_getDate_js__WEBPACK_IMPORTED_MODULE_2__.getYear)() + '-' + (0,_getDate_js__WEBPACK_IMPORTED_MODULE_2__.getMonthly)();\r\n(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getCount)(date.textContent);\r\n\r\nconst dateElement = document.querySelector('.date');\r\nconst decreasementButton = document.getElementById('prev');\r\nconst incrementButton = document.getElementById('next');\r\n\r\nlet currentDate = new Date(dateElement.textContent + '-01');\r\n\r\nfunction updateDate() {\r\n\tconst year = currentDate.getFullYear();\r\n\tconst month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월을 두 자리 숫자로 포맷\r\n\r\n\t// 날짜를 HTML 요소에 업데이트합니다.\r\n\tdateElement.textContent = `${year}-${month}`;\r\n\treturn `${year}-${month}`;\r\n}\r\n\r\nfunction increaseMonth() {\r\n\tcurrentDate.setMonth(currentDate.getMonth() + 1);\r\n\tconst date = updateDate();\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getCount)(date);\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(date, type);\r\n}\r\n\r\nfunction decreaseMonth() {\r\n\tcurrentDate.setMonth(currentDate.getMonth() - 1);\r\n\tconst date = updateDate();\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getCount)(date);\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(date, type);\r\n}\r\n\r\nincrementButton.addEventListener('click', increaseMonth);\r\ndecreasementButton.addEventListener('click', decreaseMonth);\r\n\r\nconst allButton = document.getElementById('all');\r\nconst incomeButton = document.getElementById('income');\r\nconst expenditureButton = document.getElementById('expenditure');\r\n\r\nfunction clickAll() {\r\n\ttype = 'ALL';\r\n\tconst date = updateDate();\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(date, type);\r\n}\r\n\r\nfunction clickIncome() {\r\n\ttype = 'INCOME';\r\n\tconst date = updateDate();\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(date, type);\r\n}\r\n\r\nfunction clickExpenditure() {\r\n\ttype = 'EXPENDITURE';\r\n\tconst date = updateDate();\r\n\t(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(date, type);\r\n\tconsole.log(type);\r\n}\r\n\r\n(0,_controller_js__WEBPACK_IMPORTED_MODULE_3__.getFinance)(updateDate(), type);\r\n\r\nallButton.addEventListener('click', clickAll);\r\nincomeButton.addEventListener('click', clickIncome);\r\nexpenditureButton.addEventListener('click', clickExpenditure);\r\n\n\n//# sourceURL=webpack://account-book/./public/js/records/main.js?");

/***/ }),

/***/ "./public/js/statistics/getMonthlyData.js":
/*!************************************************!*\
  !*** ./public/js/statistics/getMonthlyData.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMonthlyData)\n/* harmony export */ });\n// date는 Date 타입 매개변수\r\nasync function getMonthlyData(date) {\r\n  let now = new Date();\r\n\r\n  const URL = 'http://172.29.12.156:3001';\r\n  // const URL = 'http://localhost:3001';\r\n\r\n  if (!date) {\r\n    date = `${now.getFullYear()}-${(now.getMonth() + 1)\r\n      .toString()\r\n      .padStart(2, 0)}-${now.getDate().toString().padStart(2, 0)}`;\r\n  } else {\r\n    date = `${date.getFullYear()}-${(date.getMonth() + 1)\r\n      .toString()\r\n      .padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;\r\n  }\r\n\r\n  const result = await fetch(`${URL}/finance?date=${date}`, {\r\n    method: 'GET',\r\n    headers: {\r\n      memberId: 1,\r\n    },\r\n  });\r\n\r\n  return await result.json();\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/statistics/getMonthlyData.js?");

/***/ }),

/***/ "./public/js/statistics/main.js":
/*!**************************************!*\
  !*** ./public/js/statistics/main.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renewData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renewData.js */ \"./public/js/statistics/renewData.js\");\n\r\n\r\nlet date = new Date();\r\n\r\n(0,_renewData_js__WEBPACK_IMPORTED_MODULE_0__.renewData)(date);\r\n\r\nconst leftBtn = document.querySelector('#left-btn');\r\nconst rightBtn = document.querySelector('#right-btn');\r\n\r\nleftBtn.addEventListener('click', () => {\r\n  date = new Date(date.getFullYear(), date.getMonth(), 0);\r\n  (0,_renewData_js__WEBPACK_IMPORTED_MODULE_0__.renewData)(date);\r\n});\r\n\r\nrightBtn.addEventListener('click', () => {\r\n  date = new Date(date.getFullYear(), date.getMonth() + 2, 0);\r\n\r\n  if (\r\n    date.getFullYear() >= new Date().getFullYear() &&\r\n    date.getMonth() > new Date().getMonth()\r\n  ) {\r\n    date = new Date();\r\n    return;\r\n  }\r\n  (0,_renewData_js__WEBPACK_IMPORTED_MODULE_0__.renewData)(date);\r\n});\r\n\n\n//# sourceURL=webpack://account-book/./public/js/statistics/main.js?");

/***/ }),

/***/ "./public/js/statistics/renewData.js":
/*!*******************************************!*\
  !*** ./public/js/statistics/renewData.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renewData: () => (/* binding */ renewData)\n/* harmony export */ });\n/* harmony import */ var _getMonthlyData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMonthlyData.js */ \"./public/js/statistics/getMonthlyData.js\");\n/* harmony import */ var _renewHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renewHeader.js */ \"./public/js/statistics/renewHeader.js\");\n\r\n\r\n\r\nasync function renewData(date) {\r\n  const data = await (0,_getMonthlyData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date);\r\n\r\n  (0,_renewHeader_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(date);\r\n\r\n  const amounts = document.querySelectorAll('.amount');\r\n  const ratios = document.querySelectorAll('.ratio');\r\n\r\n  let nodeArray = Array(amounts.length).fill(0);\r\n\r\n  data.forEach((it) => {\r\n    const { amount, category } = it;\r\n\r\n    nodeArray[order.get(category.major_category)] += amount;\r\n    nodeArray[order.get(category.middle_category)] += amount;\r\n\r\n    if (category.category_type === '지출') {\r\n      // 지출 -> EXPENDITURE\r\n      nodeArray[0] += amount;\r\n      if (category.major_category === '고정생활비') {\r\n        nodeArray[19] += amount;\r\n      } else {\r\n        nodeArray[18] += amount;\r\n      }\r\n    } else if (category.category_type === '수입') {\r\n      // 수입 -> INCOME\r\n      nodeArray[20] += amount;\r\n      if (category.major_category === '월급여') {\r\n        nodeArray[29] += amount;\r\n      } else if (category.major_category === '비정기소득') {\r\n        nodeArray[28] += amount;\r\n      }\r\n    }\r\n  });\r\n\r\n  nodeArray.forEach((it, idx) => {\r\n    amounts[idx].textContent = `${it.toLocaleString()} 원`;\r\n  });\r\n\r\n  nodeArray[30] = nodeArray[20] - nodeArray[0];\r\n\r\n  amounts[30].textContent = nodeArray[30].toLocaleString() + ' 원';\r\n\r\n  for (let i = 0; i < 20; i++) {\r\n    if (nodeArray[0] === 0) {\r\n      ratios[i].textContent = `0 %`;\r\n      continue;\r\n    }\r\n\r\n    ratios[i].textContent = `${((nodeArray[i] / nodeArray[0]) * 100).toFixed(\r\n      1\r\n    )} %`;\r\n  }\r\n\r\n  for (let i = 20; i < 30; i++) {\r\n    if (nodeArray[20] === 0) {\r\n      ratios[i].textContent = `0 %`;\r\n      continue;\r\n    }\r\n    ratios[i].textContent = `${((nodeArray[i] / nodeArray[20]) * 100).toFixed(\r\n      1\r\n    )} %`;\r\n  }\r\n\r\n  ratios[30].textContent = `${((nodeArray[30] / nodeArray[20]) * 100).toFixed(\r\n    1\r\n  )} %`;\r\n\r\n  if (nodeArray[20] === 0) {\r\n    ratios[30].textContent = '0 %';\r\n  }\r\n}\r\n\r\nlet order = [\r\n  '총비용', // 0\r\n  '유동생활비', // 1\r\n  '식비',\r\n  '여행,여가',\r\n  '교통비',\r\n  '생활용품',\r\n  '지식,문화',\r\n  '의복,미용',\r\n  '수리,수선',\r\n  '고정생활비', // 9\r\n  '주거,통신',\r\n  '교육비',\r\n  '의료,건강,보험',\r\n  '증여,세금,기타비용',\r\n  '증여,세금,이자',\r\n  '경조사비',\r\n  '아내카드비',\r\n  '아내사랑해',\r\n  '총유동지출', // 18\r\n  '총고정지출', // 19\r\n  '총수익', //20\r\n  '월급여',\r\n  '월급',\r\n  '퇴직연금(회사몫)',\r\n  '비정기소득',\r\n  '상여금',\r\n  '배당금',\r\n  '기타수익',\r\n  '총유동수익', // 28\r\n  '총고정수익', // 29\r\n  '총단기순손익', // 30\r\n];\r\n\r\norder = order.map((it, idx) => [it, idx]);\r\norder = new Map(order);\r\n\n\n//# sourceURL=webpack://account-book/./public/js/statistics/renewData.js?");

/***/ }),

/***/ "./public/js/statistics/renewHeader.js":
/*!*********************************************!*\
  !*** ./public/js/statistics/renewHeader.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renewHeader)\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common.js */ \"./public/js/common.js\");\n\r\n\r\nfunction renewHeader(date) {\r\n  if (!(date instanceof Date)) {\r\n    date = new Date();\r\n  }\r\n\r\n  const start = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.dateToString)(date).slice(0, 8) + '01';\r\n  const end = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.dateToString)(\r\n    new Date(\r\n      Math.min(\r\n        new Date(\r\n          (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.dateToString)(date).slice(0, 8) +\r\n            new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()\r\n        ),\r\n        Date.now()\r\n      )\r\n    )\r\n  );\r\n\r\n  const period = document.querySelector('#period');\r\n  period.textContent = `${start} ~ ${end}`;\r\n}\r\n\n\n//# sourceURL=webpack://account-book/./public/js/statistics/renewHeader.js?");

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
/******/ 	__webpack_require__("./public/js/inputform/main.js");
/******/ 	__webpack_require__("./public/js/records/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/statistics/main.js");
/******/ 	
/******/ })()
;