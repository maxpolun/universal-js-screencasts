'use strict';

let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('hello world.');
});

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`--- started server on port ${port} ---`);
});
