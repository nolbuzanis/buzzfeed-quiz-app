import { SUBMIT_ANSWER, GET_QUIZ } from '../actions/types';

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
    default: {
      return state;
    }
  }
};
