// 테이블 데이터 동적 생성
export default function tableHandler(datas_10) {
  const mainTable = document.querySelector('.table');

  for (let data of datas_10) {
    let tbody = document.createElement('tbody');

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

    tbody.appendChild(tr);
    mainTable.appendChild(tbody);
  }

  mainTable.appendChild;
}
