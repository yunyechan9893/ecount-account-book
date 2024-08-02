import handleSubmit from './handleSubmit.js';
import dateChecker from './dateChecker.js';
import timeChecker from './timeChecker.js';

dateChecker();
timeChecker();

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  handleSubmit();
});
