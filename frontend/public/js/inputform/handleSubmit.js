export default function handleSubmit() {
  let category = parseCategory();
}

// 카테고리 체크
function parseCategory() {
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
