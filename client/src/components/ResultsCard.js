import React from 'react';
import './Results.css';

const ResultsCard = props => {
  const renderQuestionImg = () => {
    if (props.question.img) {
      return (
        <div
          className='results-card-photo'
          style={{
            background: `url('${props.question.img}') center center no-repeat`,
            backgroundSize: 'cover'
          }}
        ></div>
      );
    }
    return null;
  };

  if (props.answer.img) {
    return (
      <div className='results-card'>
        <h4>{props.question.text}</h4>
        <div
          className='results-card-photo'
          style={{
            background: `url('${props.answer.img}') center center no-repeat`,
            backgroundSize: 'cover'
          }}
        ></div>
        {renderQuestionImg()}
        <p className='small-answer'>{props.answer.text}</p>
      </div>
    );
  }
  return (
    <div className='results-card'>
      <h4>{props.question.text}</h4>
      {renderQuestionImg()}
      <span className='big-answer'>{props.answer.text}</span>
    </div>
  );
};

export default ResultsCard;
