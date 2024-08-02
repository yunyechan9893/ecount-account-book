import { renewData } from './renewData.js';

let date = new Date();

renewData(date);

const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');

leftBtn.addEventListener('click', () => {
  date = new Date(date.getFullYear(), date.getMonth(), 0);
  renewData(date);
});

rightBtn.addEventListener('click', () => {
  date = new Date(date.getFullYear(), date.getMonth() + 2, 0);

  if (
    date.getFullYear() >= new Date().getFullYear() &&
    date.getMonth() > new Date().getMonth()
  ) {
    date = new Date();
    return;
  }
  renewData(date);
});
