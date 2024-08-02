import handleSubmit from './handleSubmit.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  handleSubmit();
});
