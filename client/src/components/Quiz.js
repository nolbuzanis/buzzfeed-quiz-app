import React from 'react';
import './Quiz.css';
import QuizChoice from './QuizChoice';
import { connect } from 'react-redux';

class Quiz extends React.Component {
  render() {
    return (
      <div>
        <div className='question-header'>Quiz question?</div>
        <div className='question-choices ui equal width grid'>
          <div className='equal width row'>
            <QuizChoice />
            <div className='column'>Choice 1</div>
            <div className='column'>Choice 1</div>
          </div>
          <div className='equal width row'>
            <div className='column'>Choice 1</div>
            <div className='column'>Choice 1</div>
            <div className='column'>Choice 1</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quiz: state.quiz };
};

export default connect(mapStateToProps)(Quiz);
