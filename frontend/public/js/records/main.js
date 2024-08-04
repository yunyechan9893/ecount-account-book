import tableHandler from './createTable.js';
import selectAllCheckbox from './checkboxHandler.js';
import { getMonthly, getYear } from './getDate.js';
import { getCount, getFinance } from './controller.js';

var type = 'ALL';

// ELEMENTS
const mainCheckbox = document.querySelector('.checkbox');
const registBtn = document.querySelector('.registBtn');

selectAllCheckbox(mainCheckbox);

const date = document.querySelector('.date');
date.textContent = getYear() + '-' + getMonthly();
getCount(date.textContent);

const dateElement = document.querySelector('.date');
const decreasementButton = document.getElementById('prev');
const incrementButton = document.getElementById('next');

let currentDate = new Date(dateElement.textContent + '-01');

function updateDate() {
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월을 두 자리 숫자로 포맷

	// 날짜를 HTML 요소에 업데이트합니다.
	dateElement.textContent = `${year}-${month}`;
	return `${year}-${month}`;
}

function increaseMonth() {
	currentDate.setMonth(currentDate.getMonth() + 1);
	const date = updateDate();
	getCount(date);
	getFinance(date, type);
}

function decreaseMonth() {
	currentDate.setMonth(currentDate.getMonth() - 1);
	const date = updateDate();
	getCount(date);
	getFinance(date, type);
}

incrementButton.addEventListener('click', increaseMonth);
decreasementButton.addEventListener('click', decreaseMonth);

const allButton = document.getElementById('all');
const incomeButton = document.getElementById('income');
const expenditureButton = document.getElementById('expenditure');

function clickAll() {
	type = 'ALL';
	const date = updateDate();
	getFinance(date, type);
}

function clickIncome() {
	type = 'INCOME';
	const date = updateDate();
	getFinance(date, type);
}

function clickExpenditure() {
	type = 'EXPENDITURE';
	const date = updateDate();
	getFinance(date, type);
	console.log(type);
}

getFinance(updateDate(), type);

allButton.addEventListener('click', clickAll);
incomeButton.addEventListener('click', clickIncome);
expenditureButton.addEventListener('click', clickExpenditure);
