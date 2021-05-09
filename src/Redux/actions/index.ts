import types from '../types';

export const AddNumber = (str: string) => ({
  type: types.ADD_NUMBER,
  payload: str
});

export const Calculate = (str: string) => ({
  type: types.CALCULATE,
  payload: str
});

export const AddOp = (str: string) => ({
  type: types.ADD_OPERATION,
  payload: str
});

export const EditNumber = (str: string) => ({
  type: types.EDIT_NUMBER,
  payload: str
});

export const Clear = () => ({
  type: types.CLEAR
});

export const AddDecimal = () => ({
  type: types.ADD_DECIMAL
});