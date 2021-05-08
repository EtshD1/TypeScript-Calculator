import { combineReducers } from 'redux';
import mainNumberReducer from './mainNumber';
import logs from './logs';

const reducers = combineReducers({
  main: mainNumberReducer,
  log: logs
});

export default reducers;

export type RootState = {
  main: number,
  log: string
}