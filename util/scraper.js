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
      const quizTitle = $('.buzz-title').text();
      if ($('.iq-question-header').length === 0) {
        // Quiz is like the 2nd one, it needs to be queried by .subbuzz-quiz__question-header
        console.log($('.subbuzz-quiz__question-header').length);
        res.send('test');
      }

      let questionTitles = [];
      $('.iq-question-header')
        .find('span')
        .each((index, element) => {
          questionTitles.push($(element).text());
        });
      //const questions = $.find('iq-question-header').text();
      /*
      let questions = [];
      $('.iq-question-header').each((i, elem) => {
        console.log(elem.children);
        questions[i] = elem.text();
      });
      const question2 = $('.iq-question-header').html();
*/
      res.send(questionTitles);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};
