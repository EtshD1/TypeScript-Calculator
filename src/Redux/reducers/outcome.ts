import types from '../types';

type Action = {
  type: string,
  payload?: string
}

const outcomeReducer = (state = '0', action: Action) => {
  switch (action.type) {
    case types.EDIT_NUMBER:
      if (state === '0' || state === '+' || state === '-' || state === 'x' || state === '/') {
        return action.payload;
      }
      return `${state}${action.payload}`;
    case types.ADD_OPERATION:
      return action.payload;
    case types.CLEAR:
      return '0';
    case types.ADD_DECIMAL:
      if (state.includes('.'))
        return state;
      return `${state}.`;
    case types.CALCULATE:
      return action.payload;
  }
  return state;
}

export default outcomeReducer;