import tableHandler from './records/tableHandler.js';
import selectAllCheckbox from './records/checkboxHandler.js';

const datas = [
  {
    date: '22.10.22. (토) 23:05',
    asset: '카카오뱅크',
    type: '식비',
    detail: '외식',
    amount: 50000,
  },
  {
    date: '22.10.22. (토) 23:05',
    asset: '카카오뱅크',
    type: '식비',
    detail: '외식',
    amount: 50000,
  },
  {
    date: '22.10.22. (토) 23:05',
    asset: '카카오뱅크',
    type: '식비',
    detail: '외식',
    amount: 50000,
  },
  {
    date: '22.10.22. (토) 23:05',
    asset: '카카오뱅크',
    type: '식비',
    detail: '외식',
    amount: 50000,
  },
];

// ELEMENTS
const mainCheckbox = document.querySelector('.checkbox');

tableHandler(datas);
selectAllCheckbox(mainCheckbox);
