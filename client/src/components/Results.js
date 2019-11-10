import React from 'react';
import ResultsCard from './ResultsCard';
import './Results.css';
import { connect } from 'react-redux';

class Results extends React.Component {
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
