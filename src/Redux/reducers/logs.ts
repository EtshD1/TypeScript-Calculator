import types from '../types';

type Action = {
  type: string,
  payload: string
}

const mainNumberReducer = (state = '', action: Action) => {
  switch (action.type) {
    case types.ADD_NUMBER:
      return `${state}${action.payload}`;
    case types.ADD_OPERATION:
      const length = state.length - 1;
      if (state[length] === '*' || state[length] === '/' || state[length] === '+' || state[length] === '-')
        return `${state.slice(0, length)}${action.payload}`;
      return `${state}${action.payload}`;
  }
  return state;
}

export default mainNumberReducer;