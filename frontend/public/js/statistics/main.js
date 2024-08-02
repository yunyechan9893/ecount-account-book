async function getData() {
  const data = await fetch('http://localhost:3001/finance?date=2024-08-02', {
    method: 'GET',
    headers: {
      memberId: 1,
    },
  });
}

getData();
