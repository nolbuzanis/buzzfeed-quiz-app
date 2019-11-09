import React from 'react';
import './Quiz.css';
import QuizChoice from './QuizChoice';
import { connect } from 'react-redux';

class Quiz extends React.Component {
  renderQuizChoices = choices => {
    console.log(choices);

    if (choices.length > 4) {
      return choices.map(choice => {
        console.log(choice);
        return <QuizChoice text={choice.text} img={choice.img} width={33} />;
      });
    } else {
      return choices.map(choice => {
        return <QuizChoice text={choice.text} img={choice.img} width={50} />;
      });
    }
  };

  render() {
    if (!this.props.quiz.data) {
      return null;
    }
    const { currentQuestion, data } = this.props.quiz;
    return (
      <div>
        <div className='question-header'>{data.questions[currentQuestion]}</div>
        <div className='question-choices'>
          {this.renderQuizChoices(data.answers[currentQuestion])}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quiz: state.quiz };
};

export default connect(mapStateToProps)(Quiz);
