import { SUBMIT_ANSWER, GET_QUIZ, QUIZ_ERROR } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_QUIZ: {
      return { ...state, data: action.payload, currentQuestion: 0, user: [] };
    }
    case SUBMIT_ANSWER: {
      return {
        ...state,
        user: [...state.user, action.payload],
        currentQuestion: state.currentQuestion + 1
      };
    }
    case QUIZ_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
