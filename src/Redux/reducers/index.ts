import { combineReducers } from 'redux';
import outcomeReducer from './outcome';
import inputReducer from './logs';

const reducers = combineReducers({
  outcome: outcomeReducer,
  input: inputReducer
});

export default reducers;

export type RootState = {
  outcome: number,
  input: string
}