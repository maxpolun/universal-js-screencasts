'use strict';

let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('hello world.');
});

app.listen(8080, () => {
  console.log('--- started server on port 8080 ---');
});
