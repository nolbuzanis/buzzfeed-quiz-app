const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const scraper = require('./util/scraper');
app.get('/api/quiz', scraper);

const emailer = require('./util/mailer');
app.post('/email', emailer);

if (process.env.NODE_ENV === 'production') {
  // Serve any production assets like our main.css or main.js
  app.use(express.static('client/build'));
  // Handle all routing --> serve up index.html if it doesn't recognize the route
  const path = require('path');
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res, next) => {
  console.log('Server running on port: ', PORT);
});
