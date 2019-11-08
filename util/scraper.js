const axios = require('axios');
const cheerio = require('cheerio');

module.exports = (req, res, next) => {
  res.send(req.body.url);
};
