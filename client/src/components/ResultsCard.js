import React from 'react';
import './Results.css';

const ResultsCard = props => {
  if (props.answer.img) {
    return (
      <div className='results-card'>
        <h4>{props.question}</h4>
        <div
          className='results-card-photo'
          style={{
            background: `url('${props.answer.img}') center center no-repeat`,
            backgroundSize: 'cover'
          }}
        ></div>
        <p className='small-answer'>{props.answer.text}</p>
      </div>
    );
  }
  return (
    <div className='results-card'>
      <h4>{props.question}</h4>
      <span className='big-answer'>{props.answer.text}</span>
    </div>
  );
};

export default ResultsCard;
