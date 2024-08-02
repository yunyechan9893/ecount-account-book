const express = require('express');
const app = express();
const PORT = 3000;

// Template Engine
const fs = require('fs');
app.engine('ntl', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    let rendered = content.toString();
    let willReplace = options.willReplace ?? {};

    for (let key of Object.keys(willReplace)) {
      let value = willReplace[key];
      rendered = rendered.replace(`#${key}#`, `<h1>${value}</h1>`);
    }

    return callback(null, rendered);
  });
});

app.set('views', './views');
app.set('view engine', 'ntl');

// STATIC FILE
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log('serverstarted');
});

// ROUTES
const recordsRouter = require('./routes/records');
const statisticsRouter = require('./routes/statistics');
const inputformRouter = require('./routes/inputform');

app.use('/records', recordsRouter);
app.use('/statistics', statisticsRouter);
app.use('/inputform', inputformRouter);

app.get('/', (req, res) => {
  res.redirect('/records');
});
