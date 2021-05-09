import types from '../types';

type Action = {
  type: string,
  payload?: string
}

const inputReducer = (state: Array<string> = ["0"], action: Action) => {
  switch (action.type) {
    case types.EDIT_NUMBER:
      const lastIndex = state[state.length - 1];
      if (lastIndex === '-' || lastIndex === '+' || lastIndex === 'x' || lastIndex === '/') {
        return [...state, action.payload];
      }
      if (lastIndex === '0') {
        if (action.payload === '0') {
          return state;
        } else {
          return [...state.splice(0, state.length - 1), action.payload];
        }
      }
      return [...state.splice(0, state.length - 1), `${state[state.length - 1] ? state[state.length - 1] : ''}${action.payload}`];
    case types.ADD_OPERATION:
      const lastItem = state[state.length - 1];
      if (state.length === 0) {
        return state;
      }
      if (lastItem === 'x' || lastItem === '/') {
        if (action.payload === '-') {
          return [...state, action.payload];
        } else {
          return [...state.splice(0, state.length - 1), action.payload];
        }
      } else if (lastItem === '+') {
        return [...state.splice(0, state.length - 1), action.payload];
      } else if (lastItem === '-') {
        if (state[state.length - 2] === 'x' || state[state.length - 2] === '/') {
          return [...state.splice(0, state.length - 2), action.payload];
        }
        return [...state.splice(0, state.length - 1), action.payload];
      }
      return [...state, action.payload];
    case types.CLEAR:
      return ['0'];
    case types.CALCULATE:
      return [action.payload];
    case types.ADD_DECIMAL:
      if (state[state.length - 1].includes('.'))
        return state;
      return [...state.splice(0, state.length - 1), `${state[state.length - 1]}.`];
  }
  return state;
}
export default inputReducer;