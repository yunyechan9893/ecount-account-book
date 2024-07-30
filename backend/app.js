const express = require('express');
const app = express();
const port = 3000;

// routes
const records = require('./routes/records');
const statistics = require('./routes/statistics');

// app.use('/api/records');

app.use(express.static('../frontend/public'));

app.get('/', (req, res) => {
  res.send('hsadfjsdiofio');
});

app.listen(port, () => {
  console.log('serverstarted');
});
