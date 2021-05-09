import types from '../types';
import { calc } from '../calc';

type Action = {
  type: string,
  payload: string
}

const outcomeReducer = (state = '0', action: Action) => {
  switch (action.type) {
    case types.CALCULATE:
      if (action.payload === '') {
        return '0';
      }
      return calc(action.payload);
    case types.ADD_DECIMAL:
      if (state === '')
        return '0.'
      if (state.includes('.'))
        return `${state}`;
      return `${state}.`;
    case types.CLEAR:
      return '0';
    case types.ADD_NUMBER:
      if (state === '/' || state === 'x' || state === '-' || state === '+') {
        return `${parseFloat(action.payload)}`;
      }
      if (state.includes('.')) {
        return `${state}${parseFloat(action.payload)}`;
      }
      return `${parseFloat(state) * 10 + parseFloat(action.payload)}`;
    case types.ADD_OPERATION:
      return action.payload;
  }
  return state;
}

export default outcomeReducer;