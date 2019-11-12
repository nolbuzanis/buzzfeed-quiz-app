const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const keys = require('../config/keys');

module.exports = (req, res, next) => {
  console.log(req.body);
  let transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: keys.sendGridKey
      }
    })
  );

  let htmlString = `<h1>${req.body.quizTitle}</h1><br />`;
  req.body.results.forEach((result, index) => {
    htmlString += `<h2>${index + 1}: ${
      result.question.text
    }</h2><img style="height:30px;" src=${result.question.img}><p>${
      result.answer.text
    }</p><img src=${result.answer.img}>`;
  });

  let email = {
    from: 'results@quizzical.com',
    to: keys.sendEmailTo,
    subject: 'Quiz Results!',
    html: htmlString
  };

  transporter
    .sendMail(email)
    .then(response => {
      res.status(200).json({ message: 'Email sent!', response: response });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
