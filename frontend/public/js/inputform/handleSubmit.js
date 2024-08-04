import resetInput from './resetInput.js';

export default async function handleSubmit() {
	const classification = handleClassification();
	const transactionDate = handleDate();
	const asset = document.querySelector('#asset').value;
	const category = document.querySelector('#category').value;
	const amount = +document.querySelector('#amount').value;
	const description = document.querySelector('#description').value;
	const memo = document.querySelector('#memo').value;

	const URL = 'http://172.29.12.156:3001';

	console.log(transactionDate);
	console.log(new Date(transactionDate));
	// 유효성 검사 로직
	if (isNaN(new Date(transactionDate))) {
		alert('날짜가 올바르지 않아요!');
		return;
	}

	const obj = {
		memberId: 1,
		transactionDate,
		category,
		description,
		amount,
		memo,
		asset,
		classification,
	};

	const result = await fetch(`${URL}/finances`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(obj),
	});

	if (result.status === 200) {
		resetInput();
	}
}

// 카테고리 체크
function handleClassification() {
	const classifications = document.getElementsByName('classification');
	let result;

	classifications.forEach((it) => {
		if (it.checked) {
			result = it.value;
			return;
		}
	});

	return result;
}

// 날짜 변환
function handleDate() {
	const date = document.querySelector('#date');
	const time = document.querySelector('#time');

	if (!date.value || !time.value) {
		return NaN;
	}

	return `${date.value} ${time.value}:00`;
}
