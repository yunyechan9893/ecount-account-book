// date는 Date 타입 매개변수
export default async function getMonthlyData(date) {
  let now = new Date();

  const URL = 'http://172.29.12.156:3001';

  if (!date) {
    date = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, 0)}-${now.getDate().toString().padStart(2, 0)}`;
  } else {
    date = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;
  }

  const result = await fetch(`${URL}/finance?date=${date}`, {
    method: 'GET',
    headers: {
      memberId: 1,
    },
  });

  return await result.json();
}
