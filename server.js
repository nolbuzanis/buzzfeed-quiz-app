const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

app.listen(PORT, (req, res, next) => {
  console.log('Server running on port: ', PORT);
});
