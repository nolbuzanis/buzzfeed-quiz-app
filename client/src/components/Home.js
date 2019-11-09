import React from 'react';
import './Home.css';
import newspaperBG from './img/newspaper-background.jpg';

const Start = props => {
  return (
    <div>
      <div
        className='hero-img'
        style={{
          background: `url(${newspaperBG}) center center no-repeat`,
          backgroundSize: 'cover'
        }}
      >
        <div className='hero-overlay'></div>
      </div>
      <div className='home-container'>
        <h1>quizzical.</h1>

        <h3>
          (adj.) <br /> expressing slight uncertainty or amusement.
        </h3>
        <div className='input-container'>
          <input
            className='url-input'
            type='text'
            placeholder='https://www.buzzfeed.com/d29d…'
          ></input>
          <button className='start-quiz-button'>Take Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Start;
