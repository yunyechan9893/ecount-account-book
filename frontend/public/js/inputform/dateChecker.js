export default function dateChecker() {
  let date = document.querySelector('#date');

  date.addEventListener('input', () => {
    let value = date.value.replace(/\D/g, '');
    let length = value.length;

    // 출력할 결과 변수
    let result = '';

    if (length < 4) {
      result = value;
    } else if (length < 6) {
      result += value.substring(0, 4);
      if (!date.value.endsWith('/')) {
        result += '/';
        result += value.substring(4);
      }
    } else {
      result += value.substring(0, 4);
      result += '/';
      result += value.substring(4, 6);
      if (!date.value.endsWith('/')) {
        result += '/';
        result += value.substring(6);
      }
    }
    date.value = result;
  });
}
