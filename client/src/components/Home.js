import React from 'react';
import './Home.css';
import newspaperBG from '../img/newspaper-background.jpg';
import { connect } from 'react-redux';
import { generateQuiz } from '../actions';

class Start extends React.Component {
  state = {
    urlInput: ''
  };

  showErrors = () => {
    if (this.props.quiz.error) {
      return (
        <p style={{ paddingTop: '20px', color: '#bb0000', textAlign: 'right' }}>
          {this.props.quiz.error}
        </p>
      );
    }
  };

  render() {
    return (
      <div>
        <div
          className='hero-img'
          style={{
            background: `url(${newspaperBG}) center center no-repeat`,
            backgroundSize: 'cover'
          }}
        >
          <div className='hero-overlay'></div>
        </div>
        <div className='home-container'>
          <h1>quizzical.</h1>

          <h3>
            a <span style={{ color: '#EE3322' }}>BuzzFeed</span> quiz app
          </h3>
          <div className='input-container'>
            {this.showErrors()}
            <input
              className='url-input'
              type='text'
              placeholder='https://www.buzzfeed.com/d29d…'
              value={this.state.urlInput}
              onChange={e => this.setState({ urlInput: e.target.value })}
            ></input>
            <button
              className='start-quiz-button'
              onClick={() => this.props.generateQuiz(this.state.urlInput)}
            >
              Take Quiz
            </button>
          </div>
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
  { generateQuiz }
)(Start);
