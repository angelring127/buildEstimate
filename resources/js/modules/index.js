
/**
 * modules/index.js
 */
import { combineReducers } from 'redux';
import subject from './subject';
import page from './page';

const rootReducer = combineReducers({
  subject,
  page
});

export default rootReducer;