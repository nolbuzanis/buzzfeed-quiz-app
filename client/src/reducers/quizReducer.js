import { SUBMIT_ANSWER } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_ANSWER: {
      return { ...state, answer: action.payload };
    }
    default: {
      return state;
    }
  }
};
