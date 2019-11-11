const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const keys = require('../config/keys');

module.exports = (req, res, next) => {
  let transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: keys.sendGridKey
      }
    })
  );

  let email = {
    from: 'results@quizzical.com',
    to: keys.sendEmailTo,
    subject: 'Quiz Results!',
    html: '<h1> Header</h1>'
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
