import { SUBMIT_ANSWER, GET_QUIZ } from './types.js';
import axios from 'axios';

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
    dispatch({ type: GET_QUIZ, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
