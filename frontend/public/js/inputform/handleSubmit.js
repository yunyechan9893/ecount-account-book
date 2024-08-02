export default async function handleSubmit() {
  const category = handleCategory();
  const transactionDate = handleDate();
  const asset = document.querySelector('#asset').value;
  const classification = document.querySelector('#classification').value;
  const amount = document.querySelector('#amount').value;
  const description = document.querySelector('#description').value;
  const memo = document.querySelector('#memo').value;

  // 유효성 검사 로직

  const obj = {
    memberId: 1,
    category,
    transactionDate,
    asset,
    classification,
    amount,
    description,
    memo,
  };

  const result = await fetch('http://localhost:3001/finances', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  console.log(obj);
}

// 카테고리 체크
function handleCategory() {
  const categorys = document.getElementsByName('category');
  let result;

  categorys.forEach((it) => {
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

  return new Date(`${date.value} ${time.value}`);
}
