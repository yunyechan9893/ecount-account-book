const express = require('express');
const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server started`);
});

app.get('/', (req, res) => {
  console.log('asfddsf');
  res.send('requested');
});

app.get('/api/records', (req, res) => {
  console.log(req.url);
  res.send('requested');
});
