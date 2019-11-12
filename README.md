Quizzical - a buzzfeed quiz app
==============

Problem overview
===
The goal of the project is to reverse engineer the BuzzFeed website, scrape relevant information and present it in a new interface.
For example, let's take this page - https://www.buzzfeed.com/ajs023/whats-your-2010s-song-250dv4dgms. This page contains a series of questions, and each question has several potential answers represented by an image. We want to render only this part as a stand-alone application. When the user clicks on an image, the web app should remember the choice and move on to the next question. After the user completed all the questions the web app should display their choices and send an email to ____ with the selections.
Please note that this is not about displaying the original website and blocking some of the content, it needs to be a completely new web app that just uses the content from the original website. Also, it should work for any quiz on BuzzFeed by having a page with an input box that accepts the URL of the original quiz (another example - https://www.buzzfeed.com/evelinamedina/do-you-remember-lyrics-from-high-school-musical?origin=btm-fd) and uses the information to build the new page.
Lastly, the dimensions of the page should be 962x462 (horizontal layout).

Technical Features
========
- React, Redux, Node & Express
- Web scraper uses axios for async calls, and cheerio to parse html (similiar to JQuery syntax)
- Web scraper pulls any image, text, or combination of the two from the answers
- Email utility uses nodemailer module, and send grid API to send an email with the results of the quiz
- UI designed using Sketch for a 962 x 462 screen, and separates the frontend into three sections: /, /quiz, /results
- Input on home route designed to accept any quiz from BuzzFeed (although there may be a weird html format it doesn't cover)
