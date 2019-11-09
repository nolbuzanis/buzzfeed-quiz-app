import { SUBMIT_ANSWER, GET_QUIZ } from './types.js';
import axios from 'axios';
import history from '../history';

export const submitAnswer = () => {
  console.log();
  return { type: SUBMIT_ANSWER, payload: 'A' };
};

export const generateQuiz = url => async dispatch => {
  try {
    const response = await axios.get('/api/quiz', {
      params: {
        url: url
      }
    });
    console.log(response.data);
    history.push('/quiz');
    dispatch({ type: GET_QUIZ, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
