const axios = require('axios');
const cheerio = require('cheerio');

module.exports = (req, res, next) => {
  axios
    .get(req.body.url || req.query.url)
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
      let questionAnswers = new Array();

      if ($('.iq-question-header').length === 0) {
        // If quiz is like the 2nd one, it needs to be queried by .subbuzz-quiz__question-header

        const quizLength = $('.subbuzz-quiz__question').length;
        questionAnswers = new Array(quizLength);
        // Loop through each quiz element
        $('.subbuzz-quiz__question').each((i, element) => {
          //Scrape question titles

          if ($(element).find('.subbuzz__title--question').length !== 0) {
            questionTitles.push(
              $(element)
                .find('.subbuzz__title--question')
                .text()
                .replace(/[\n]/g, '')
                .trim()
            );
          } else {
            questionTitles.push(
              $(element)
                .find('p')
                .text()
                .replace(/[\n]/g, '')
                .trim()
            );
          }

          // Scrap quiz answers
          questionAnswers[i] = new Array();
          $(element)
            .find('.subbuzz-quiz__answer')
            .each((index, element) => {
              questionAnswers[i].push({
                text: $(element)
                  .find('p')
                  .text()
                  .replace(/[\n]/g, '')
                  .trim(),
                img:
                  $(element)
                    .find('img')
                    .attr('data-src') ||
                  $(element)
                    .find('img')
                    .attr('src')
              });
            });
        });
      } else {
        const quizLength = $('.iq-question').length;
        questionAnswers = new Array(quizLength);
        // Loop through each quiz element
        $('.iq-question').each((i, element) => {
          console.log('In element: ', i);
          $(element)
            .find('.iq-question-header')
            .find('span')
            .each((index, element) => {
              questionTitles.push($(element).text());
            });

          // Scrap quiz answers
          questionAnswers[i] = new Array();

          $(element)
            .find('li')
            .each((answerIndex, element) => {
              // Check if photos & text is present
              if (
                $(element).find('.image-tile__image').length !== 0 &&
                $(element).find('.xbold').length !== 0
              ) {
                questionAnswers[i].push({
                  img: $(element)
                    .find('.image-tile__image')
                    .css('background-image')
                    .replace(/url\(|\)/g, ''),
                  text: $(element)
                    .find('.xbold')
                    .text()
                });
              } else if ($(element).find('.xbold').length !== 0) {
                // If multiple text is present, chose only the bolded text which has the answer. Non bolded text is the Unsplash img tag.
                questionAnswers[i].push({
                  text: $(element)
                    .find('.xbold')
                    .text()
                });
              } else {
                questionAnswers[i].push({ text: $(element).text() });
              }
            });
        });
      }

      res.status(200).json({
        title: quizTitle,
        questions: questionTitles,
        answers: questionAnswers
      });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};
