import React from 'react';
import './Quiz.css';

const QuizChoice = props => {
  return (
    <div
      onClick={props.onclick}
      className={`choice-element ${
        props.width === 50 ? 'width-50' : 'width-33'
      }`}
      style={{
        background: `${
          props.img
            ? `url('${props.img}') center center no-repeat`
            : props.randColor
        }`,
        backgroundSize: `${props.img ? 'cover' : 'auto'}`,
        border: `${props.img ? 'none' : '1px solid black'}`
      }}
    >
      <span>{props.text}</span>
    </div>
  );
};

export default QuizChoice;
