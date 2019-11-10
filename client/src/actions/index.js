import { SUBMIT_ANSWER, GET_QUIZ } from './types.js';
import axios from 'axios';
import history from '../history';

export const submitAnswer = (questionIndex, answerIndex) => {
  //Store question and answer index
  //Then increment currentQuestion state by 1
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
    console.log(response.data);
    history.push('/quiz');
    dispatch({ type: GET_QUIZ, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
