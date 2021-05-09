import types from '../types';

export const AddNumber = (num: number | string) => ({
  type: types.ADD_NUMBER,
  payload: num
});

export const AddOp = (op: string) => ({
  type: types.ADD_OPERATION,
  payload: op
});

export const Clear = () => ({
  type: types.CLEAR
});

export const Calculate = (input: string) => ({
  type: types.CALCULATE,
  payload: input
});

export const AddDecimal = () => ({
  type: types.ADD_DECIMAL
});

