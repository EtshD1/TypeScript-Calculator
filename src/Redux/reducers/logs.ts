import types from '../types';
import { calc } from '../calc';

type Action = {
  type: string,
  payload?: string
}

const checkDecimal = (str: string) => {
  const plusSplit = str.split('+');
  const minusSplit = plusSplit[plusSplit.length - 1].split('-');
  const divideSplit = minusSplit[minusSplit.length - 1].split('/');
  const multiplySplit = divideSplit[divideSplit.length - 1].split('x');
  return multiplySplit.includes('.') ? true : false;
}

const inputReducer = (state = '', action: Action) => {
  switch (action.type) {
    case types.CALCULATE:
      if (action.payload === '') {
        return '0';
      }
      return calc(`${action.payload}`);
    case types.ADD_NUMBER:
      return `${state}${action.payload}`;
    case types.ADD_DECIMAL:
      if (state === '')
        return '0.'
      if (checkDecimal(state))
        return `${state}`;
      return `${state}.`;
    case types.ADD_OPERATION:
      const lastIndex = state.length - 1;
      if (lastIndex >= 0) {
        if (state[lastIndex] === '+' || state[lastIndex] === '-') {
          if (state[lastIndex - 1].toLocaleLowerCase() === 'x' || state[lastIndex - 1] === '/') {
            if (action.payload === '+') {
              return `${state.slice(0, lastIndex - 1)}${action.payload}`;
            }
            return `${state.slice(0, lastIndex)}${action.payload}`;
          }
          return `${state.slice(0, lastIndex)}${action.payload}`;
        }
        if (state[lastIndex].toLocaleLowerCase() === 'x' || state[lastIndex] === '/')
          if (action.payload === '+') {
            return `${state.slice(0, lastIndex)}${action.payload}`;
          } else {
            return `${state}${action.payload}`;
          }
      }
      else
        return `${state}`;
      return `${state}${action.payload}`;
    case types.CLEAR:
      return '';
  }
  return state;
}

export default inputReducer;