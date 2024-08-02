export default async function setTableData() {
  // const datas = await fetch 데이터 불러오기

  const costNodes = document.getElementsByClassName('amount');
  const ratioNodes = document.getElementsByClassName('ratio');

  for (let key in datas) {
    let cur = datas[key];
  }
}

const 유동생활비 = new Set([
  '식비',
  '여행,여가',
  '교통비',
  '생활용품',
  '지식,문화',
  '의복,미용',
  '수리,수선',
]);
const 고정생활비 = new Set(['주거,통신', '교육비', '의료,건강,보험']);
const 증여세금기타비용 = new Set(['증여,세금,이자', '경조사비']);
const 아내카드비 = new Set(['아내사랑해']);
const 월급여 = new Set(['월급', '퇴직연금(회사몫)']);
const 비정기소득 = new Set(['상여금', '배당금', '기타수익']);
