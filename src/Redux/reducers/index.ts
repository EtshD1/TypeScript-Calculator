import { combineReducers } from 'redux';

import outcomeReducer from './outcome';
import inputReducer from './input';

export default combineReducers({
  outcome: outcomeReducer,
  input: inputReducer
});

export type RootState = {
  outcome: string,
  input: Array<string>
}