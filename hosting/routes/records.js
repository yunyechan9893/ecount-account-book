const express = require('express');
const router = express.Router();
const http = require('http');

router.get('/', (req, res) => {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  //   },
  // };

  // const request = http.request(
  //   'http://localhost:3001/api/records',
  //   options,
  //   (res) => {}
  // );

  res.render('record', {
    willReplace: {
      title: '타이틀',
      message: '메세지',
    },
  });
});

module.exports = router;
