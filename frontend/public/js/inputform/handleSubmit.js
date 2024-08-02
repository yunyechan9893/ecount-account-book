export default function handleSubmit() {
  let category = handleCategory();
  let date = handleDate();
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

function handleDate() {
  const date = document.querySelector('.date');
  const time = document.querySelector('.time');

  console.log(new Date('2023/12/11'));
  console.log(new Date('2023/12/11'));
}
