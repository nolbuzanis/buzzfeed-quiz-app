const axios = require('axios');
const cheerio = require('cheerio');

module.exports = (req, res, next) => {
  //res.send(req.body.url);
  axios
    .get(req.body.url)
    .then(response => {
      if (response.status !== 200) {
        //Response was not sucessful, return error
        return res
          .status(500)
          .json({ message: 'internal server error', error: response.error });
      }
      const $ = cheerio.load(response.data);
      // scrape quiz title
      const quizTitle = $('.buzz-title').text();

      let questionTitles = [];

      if ($('.iq-question-header').length === 0) {
        // If quiz is like the 2nd one, it needs to be queried by .subbuzz-quiz__question-header
        $('.subbuzz-quiz__question-header')
          .find('p')
          .each((index, element) => {
            questionTitles.push($(element).text());
          });
      } else {
        $('.iq-question-header')
          .find('span')
          .each((index, element) => {
            questionTitles.push($(element).text());
          });
      }
      res.status(200).json({ title: quizTitle, questions: questionTitles });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};
