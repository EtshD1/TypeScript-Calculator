import types from '../types';

type Action = {
  type: string,
  payload: number
}

const mainNumberReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case types.ADD_NUMBER:
      return (state * 10) + action.payload;
    case types.SET:
      return action.payload;
  }
  return state;
}

export default mainNumberReducer;