import resetInput from './resetInput.js';

export default async function handleSubmit() {
  const classification = handleClassification();
  const transactionDate = handleDate();
  const asset = document.querySelector('#asset').value;
  const category = document.querySelector('#category').value;
  const amount = +document.querySelector('#amount').value;
  const description = document.querySelector('#description').value;
  const memo = document.querySelector('#memo').value;

  // 유효성 검사 로직

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

  const result = await fetch('http://localhost:3001/finances', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  console.log(result);
  console.log(resetInput.status);
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

  return `${date.value} ${time.value}:00`;
}
