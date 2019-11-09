import { SUBMIT_ANSWER, GET_QUIZ } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_QUIZ: {
      return { ...state, data: action.payload };
    }
    case SUBMIT_ANSWER: {
      return { ...state, answer: action.payload };
    }
    default: {
      return state;
    }
  }
};
