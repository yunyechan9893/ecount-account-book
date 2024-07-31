const express = require('express');
const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server started`);
});

app.get('/', (req, res) => {
  res.send('requested');
});
