import { SUBMIT_ANSWER, GET_QUIZ, QUIZ_ERROR } from './types.js';
import axios from 'axios';
import history from '../history';

export const submitAnswer = (questionIndex, answerIndex, quizLength) => {
  //Store question and answer index
  //Then increment currentQuestion state by 1

  if (questionIndex + 1 === quizLength) {
    history.push('/results');
  }

  return {
    type: SUBMIT_ANSWER,
    payload: { qIndex: questionIndex, aIndex: answerIndex }
  };
};

export const generateQuiz = url => async dispatch => {
  try {
    const response = await axios.get('/api/quiz', {
      params: {
        url: url
      }
    });
    history.push('/quiz');
    dispatch({ type: GET_QUIZ, payload: response.data });
  } catch (err) {
    console.error(err);
    dispatch({ type: QUIZ_ERROR, payload: 'URL was invalid.' });
  }
};
