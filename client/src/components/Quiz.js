import React from 'react';
import './Quiz.css';
import QuizChoice from './QuizChoice';
import { connect } from 'react-redux';
import { submitAnswer } from '../actions';

class Quiz extends React.Component {
  state = { randColor: '' };
  componentDidMount() {
    this.setState({
      randColor: `rgba(${Math.random() * 255}, ${Math.random() *
        255}, ${Math.random() * 255})`
    });
  }

  onSubmitAnswer = (answerIndex, questionIndex) => {
    console.log(answerIndex, questionIndex);
    this.props.submitAnswer(questionIndex, answerIndex);
  };

  renderQuizChoices = choices => {
    if (!choices) {
      // Undefined, return null
      return null;
    }

    if (choices.length > 4) {
      return choices.map((choice, index) => {
        return (
          <QuizChoice
            text={choice.text}
            img={choice.img}
            width={33}
            key={index}
            randColor={this.state.randColor}
            onclick={() =>
              this.onSubmitAnswer(index, this.props.quiz.currentQuestion)
            }
          />
        );
      });
    } else {
      return choices.map((choice, index) => {
        return (
          <QuizChoice
            text={choice.text}
            img={choice.img}
            width={50}
            key={index}
            randColor={this.state.randColor}
            onclick={() =>
              this.onSubmitAnswer(index, this.props.quiz.currentQuestion)
            }
          />
        );
      });
    }
  };

  render() {
    if (!this.props.quiz.data) {
      return null;
    }
    const { currentQuestion, data } = this.props.quiz;

    if (currentQuestion + 1 > data.questions.length) {
      this.props.history.push('/results');
    }

    return (
      <div>
        <div
          className='question-header'
          style={{ color: this.state.randColor }}
        >
          {data.questions[currentQuestion]}
        </div>
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

export default connect(
  mapStateToProps,
  { submitAnswer }
)(Quiz);
