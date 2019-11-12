import React from 'react';
import ResultsCard from './ResultsCard';
import './Results.css';
import { connect } from 'react-redux';
import axios from 'axios';

class Results extends React.Component {
  componentDidMount() {
    if (!this.props.quiz.user) {
      this.props.history.push('/');
    }
    if (this.props.quiz.user) {
      const data = {
        quizTitle: this.props.quiz.data.title,
        results: []
      };
      data.results = this.props.quiz.user.map(q => {
        return {
          question: {
            text: this.props.quiz.data.questions[q.qIndex].text,
            img: this.props.quiz.data.questions[q.qIndex].img
          },
          answer: {
            text: this.props.quiz.data.answers[q.qIndex][q.aIndex].text,
            img: this.props.quiz.data.answers[q.qIndex][q.aIndex].img
          }
        };
      });
      axios
        .post('/email', data)
        .then(() => console.log('Email with quiz results sent!'))
        .catch(err => console.error(err));
    }
  }

  renderResultsGrid = () => {
    const { user, data } = this.props.quiz;
    if (!user) {
      return null;
    }
    return user.map(choice => {
      return (
        <ResultsCard
          key={choice.qIndex}
          question={data.questions[choice.qIndex]}
          answer={data.answers[choice.qIndex][choice.aIndex]}
        />
      );
    });
  };

  render() {
    if (!this.props.quiz.user) {
      return null;
    }

    const { quiz } = this.props;
    return (
      <div>
        <div className='results-header'>
          <h2>Your results!</h2>
          <div className='results-quiz-title'>
            {quiz.data ? quiz.data.title : ''}
          </div>
          <a href='/'>Take another quiz</a>
        </div>
        <div className='results-content'>{this.renderResultsGrid()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quiz: state.quiz };
};

export default connect(mapStateToProps)(Results);
