import { LOG } from '../common.js';
import getMonthlyData from './getMonthlyData.js';

// 테이블 데이터 동적 생성
export default async function tableHandler(month) {
  const mainTable = document.querySelector('.table-body');

  let datas = await getMonthlyData(month);

  if (!datas) return;

  for (let data of datas) {
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('btn');
    checkBox.classList.add('checkbox');

    let tr = document.createElement('tr');
    tr.classList.add('row');

    let td = document.createElement('td');
    td.appendChild(checkBox);

    tr.appendChild(td);

    for (let key in data) {
      let td = document.createElement('td');
      td.textContent =
        typeof data[key] === 'number'
          ? `${data[key].toLocaleString()} 원`
          : data[key];
      tr.appendChild(td);
    }
    mainTable.appendChild(tr);
  }
}
