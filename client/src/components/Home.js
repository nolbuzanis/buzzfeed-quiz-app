import React from 'react';
import './Home.css';
import newspaperBG from '../img/newspaper-background.jpg';
import { connect } from 'react-redux';
import { generateQuiz } from '../actions';

class Start extends React.Component {
  state = {
    urlInput: ''
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
            (adj.) <br /> expressing slight uncertainty or amusement.
          </h3>
          <div className='input-container'>
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

export default connect(
  null,
  { generateQuiz }
)(Start);
