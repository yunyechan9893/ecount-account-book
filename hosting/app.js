const express = require('express');
const app = express();
const PORT = 3000;

// Template Engine
const fs = require('fs');
app.engine('ntl', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    let rendered = content.toString();
    let willReplace = options.willReplace;

    for (let key of Object.keys(willReplace)) {
      let value = willReplace[key];
      rendered = rendered.replace(`#${key}#`, `<h1>${value}</h1>`);
    }

    return callback(null, rendered);
  });
});
app.set('views', './views'); // specify the views directory
app.set('view engine', 'ntl'); // register the template engine

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log('serverstarted');
});

// routes
const recordsRouter = require('./routes/records');
const statisticsRouter = require('./routes/statistics');

app.use('/records', recordsRouter);
app.use('/statistics', statisticsRouter);

app.get('/', (req, res) => {
  res.redirect('/records');
});

const http = require('http');

app.get('/api/records', (req, res) => {
  console.log('req');
  const options = {
    port: 3001,
    path: '/',
    method: 'GET',
    hostname: 'localhost',
  };

  const request = http.request(options, (response) => {
    console.log(response);
  });
  console.log(request);
});
