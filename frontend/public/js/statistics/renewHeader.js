import { dateToString } from '../common.js';

export default function renewHeader(date) {
  if (!(date instanceof Date)) {
    date = new Date();
  }

  const start = dateToString(date).slice(0, 8) + '01';
  const end = dateToString(
    new Date(
      Math.min(
        new Date(
          dateToString(date).slice(0, 8) +
            new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
        ),
        Date.now()
      )
    )
  );

  console.log(start, end);

  const period = document.querySelector('#period');
  period.textContent = `${start} ~ ${end}`;
}
