import getMonthlyData from './getMonthlyData.js';
import renewHeader from './renewHeader.js';

export async function renewData(date) {
  const data = await getMonthlyData(date);

  renewHeader(data);

  const amounts = document.querySelectorAll('.amount');
  const ratios = document.querySelectorAll('.ratio');

  let nodeArray = Array(amounts.length).fill(0);

  data.forEach((it) => {
    const { amount, category } = it;

    nodeArray[order.get(category.major_category)] += amount;
    nodeArray[order.get(category.middle_category)] += amount;

    if (category.category_type === '지출') {
      nodeArray[0] += amount;
      if (category.major_category === '고정생활비') {
        nodeArray[19] += amount;
      } else {
        nodeArray[18] += amount;
      }
    } else if (category.category_type === '수입') {
      nodeArray[20] += amount;
      if (category.major_category === '월급여') {
        nodeArray[29] += amount;
      } else if (category.major_category === '비정기소득') {
        nodeArray[28] += amount;
      }
    }
  });

  nodeArray.forEach((it, idx) => {
    amounts[idx].textContent = `${it.toLocaleString()} 원`;
  });

  for (let i = 0; i < 20; i++) {
    ratios[i].textContent = `${((nodeArray[i] / nodeArray[0]) * 100).toFixed(
      1
    )} %`;
  }

  for (let i = 20; i < order.size; i++) {
    ratios[i].textContent = `${((nodeArray[i] / nodeArray[20]) * 100).toFixed(
      1
    )} %`;
    console.log(i);
  }
}

let order = [
  '총비용', // 0
  '유동생활비', // 1
  '식비',
  '여행,여가',
  '교통비',
  '생활용품',
  '지식,문화',
  '의복,미용',
  '수리,수선',
  '고정생활비', // 9
  '주거,통신',
  '교육비',
  '의료,건강,보험',
  '증여,세금,기타비용',
  '증여,세금,이자',
  '경조사비',
  '아내카드비',
  '아내사랑해',
  '총유동지출', // 18
  '총고정지출', // 19
  '총수익', //20
  '월급여',
  '월급',
  '퇴직연금(회사몫)',
  '비정기소득',
  '상여금',
  '배당금',
  '기타수익',
  '총유동수익', // 28
  '총고정수익', // 29
];

order = order.map((it, idx) => [it, idx]);
order = new Map(order);
console.log(order);
