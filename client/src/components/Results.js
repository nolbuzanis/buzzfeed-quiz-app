import React from 'react';
import ResultsCard from './ResultsCard';
import './Results.css';

class Results extends React.Component {
  render() {
    return (
      <div>
        <div className='results-header'>Your Results!</div>
        <div className='results-content'>
          <ResultsCard />
        </div>
      </div>
    );
  }
}

export default Results;
