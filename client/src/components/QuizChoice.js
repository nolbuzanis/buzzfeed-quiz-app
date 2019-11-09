import React from 'react';
import './Quiz.css';

const QuizChoice = props => {
  return (
    <div
      className={`choice-element column ${
        props.width === 50 ? 'width-50' : 'width-33'
      }`}
      style={{
        background: `url(${
          props.img ? props.img : ''
        }) center center no-repeat`,
        backgroundSize: 'cover'
      }}
    >
      <span>{props.text}</span>
    </div>
  );
};

export default QuizChoice;
