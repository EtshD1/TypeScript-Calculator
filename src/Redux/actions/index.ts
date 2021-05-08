import types from '../types';

export const AddNumber = (num: number | string) => ({
  type: types.ADD_NUMBER,
  payload: num
});

export const AddOp = (op: string) => ({
  type: types.ADD_OPERATION,
  payload: op
});