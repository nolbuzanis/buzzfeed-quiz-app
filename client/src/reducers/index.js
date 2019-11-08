import quizReducer from './quizReducer';
import { combineReducers } from 'redux';

export default combineReducers({ quiz: quizReducer });
