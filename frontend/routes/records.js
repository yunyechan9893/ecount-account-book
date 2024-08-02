const express = require('express');
const router = express.Router();
const http = require('http');

router.get('/', (req, res) => {
  res.render('records');
});

module.exports = router;
