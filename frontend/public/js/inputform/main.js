import handleSubmit from './handleSubmit.js';
import dateChecker from './dateChecker.js';
import timeChecker from './timeChecker.js';
import resetInput from './resetInput.js';

dateChecker();
timeChecker();

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	handleSubmit();
});

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', resetInput);

// classification에 따른 select option 값 조절
const classfication = document.querySelectorAll('.classification');

const selectBox = document.querySelector('#category');

let income = [
	'식비',
	'여행,여가',
	'교통비',
	'생활용품',
	'지식,문화',
	'의복,미용',
	'수리,수선',
	'주거,통신',
	'교육비',
	'의료,건강,보험',
	'증여,세금,이자',
	'경조사비',
	'아내카드비',
	'아내사랑해',
];

let expenditure = [
	'월급',
	'퇴직연금(회사몫)',
	'비정기소득',
	'상여금',
	'배당금',
	'기타수익',
];

classfication.forEach((it) => {
	it.addEventListener('change', (e) => {
		const incomes = document.querySelectorAll('.income');
		const expenditures = document.querySelectorAll('.expenditure');

		if (e.target.value === 'INCOME') {
			selectBox.value = '식비';
			incomes.forEach((it) => {
				it.style.display = 'block';
			});
			expenditures.forEach((it) => {
				it.style.display = 'none';
			});
		} else {
			selectBox.value = '월급';
			incomes.forEach((it) => {
				it.style.display = 'none';
			});
			expenditures.forEach((it) => {
				it.style.display = 'block';
			});
		}
	});
});

let a = 1234567;
console.log(a.toLocaleString());
console.log(Number(a.toLocaleString()));
