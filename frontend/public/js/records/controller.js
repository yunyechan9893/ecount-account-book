import tableHandler from './createTable.js';

// const URL = 'http://172.29.12.156:3001';
const URL = 'http://localhost:3001';

export async function getCount(date) {
  return new Promise((resolve, reject) => {
    fetch(URL + `/finance/count?date=${date}`, {
      method: 'GET',
      headers: {
        memberId: '1',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // JSON 형태로 변환
      })
      .then((data) => {
        document.querySelector('#all-money').textContent = data.money.all;
        document.querySelector('#income-money').textContent = data.money.income;
        document.querySelector('#expenditure-money').textContent =
          data.money.expenditure;

        document.querySelector('#all-count').textContent = data.count.all;
        document.querySelector('#income-count').textContent = data.count.income;
        document.querySelector('#expenditure-count').textContent =
          data.count.expenditure;
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
}

export async function getFinance(date, type) {
  return new Promise((resolve, reject) => {
    fetch(URL + `/finance?date=${date}&type=${type}`, {
      method: 'GET',
      headers: {
        memberId: '1',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // JSON 형태로 변환
      })
      .then((data) => {
        tableHandler(data, type);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
}
