import { LOG } from '../common.js';
import {getMonthly} from './getDate.js';

// 테이블 데이터 동적 생성
export default async function tableHandler(data, type) {
  const mainTable = document.querySelector('.table-body');

  const rows = Array.from(mainTable.querySelectorAll('tr'));

  rows.forEach((row, index) => {
    if (index > 0) { 
      mainTable.removeChild(row);
    }
  });
 
  if (data == undefined) {
    return;
  }

  console.log(data)
  for (let datum of data) {
    console.log(datum.classification, type)

    if (type != "ALL" && datum.classification != type) {
      continue;
    }

    function createTd(value) {
      let td = document.createElement('td');
      td.textContent = value
      return td;
    }

    let tr = document.createElement('tr');
    tr.classList.add('row');

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('btn');
    checkBox.classList.add('checkbox');

    let checkBoxTd = document.createElement('td');

    checkBoxTd.appendChild(checkBox);

    tr.appendChild(checkBoxTd);

    const date = makeCustomDate(datum.transaction_date)
    const dateTd = createTd(date)
    tr.appendChild(dateTd);

    const assetTd = createTd(datum.asset)
    tr.appendChild(assetTd);

    const categoryTypeTd = createTd(datum.category.category_type)
    tr.appendChild(categoryTypeTd);

    const categoryTd = createTd(datum.category.middle_category)
    tr.appendChild(categoryTd);

    // const descriptionTd = createTd(datum.description)
    // tr.appendChild(descriptionTd);

    const amountTd = createTd(datum.amount)
    tr.appendChild(amountTd);

    mainTable.appendChild(tr);
  }
}


function makeCustomDate(standardDate) {
  const date = new Date(standardDate);

  // 요일 배열을 정의합니다.
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  // 년, 월, 일, 요일, 시간, 분을 추출합니다.
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getUTCDate()).padStart(2, '0');
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  // 원하는 형식으로 날짜 문자열을 생성합니다.
  return`${year}-${month}-${day}(${dayOfWeek}) ${hours}:${minutes}`;
}