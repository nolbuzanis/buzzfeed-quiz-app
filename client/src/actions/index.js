import { SUBMIT_ANSWER } from './types.js';

export const submitAnswer = () => {
  console.log();
  return { type: SUBMIT_ANSWER, payload: 'A' };
};
