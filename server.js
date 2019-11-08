const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

const scraper = require('./util/scraper');
app.get('/quiz', scraper);

app.get('/', (req, res, next) => {
  res.send('Home Route');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res, next) => {
  console.log('Server running on port: ', PORT);
});
