import tableHandler from './createTable.js';
import selectAllCheckbox from './checkboxHandler.js';

// ELEMENTS
const mainCheckbox = document.querySelector('.checkbox');
const registBtn = document.querySelector('.registBtn');

tableHandler();
selectAllCheckbox(mainCheckbox);
