export default function timeChecker() {
  let time = document.querySelector('#time');

  time.addEventListener('input', () => {
    let value = time.value.replace(/\D/g, '');
    let length = value.length;

    // 출력할 결과 변수
    let result = '';

    if (length < 2) {
      result = value;
    } else {
      result += value.substring(0, 2);
      result += ':';
      result += value.substring(2);
    }

    time.value = result;
  });
}
