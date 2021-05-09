import types from '../types';

type Action = {
  type: string,
  payload: string
}

const calc = (str: string) => {
  return add(str);
}

const multiply = (str: string) => {
  const numbers = str.split('x');
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const x = parseFloat(numbers[i]);
    result = `${parseFloat(result) * x}`;
  }
  return `${result}`;
}

const divide = (str: string) => {
  const numbers = str.split('/').map(numb => multiply(numb));
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const x = parseFloat(numbers[i]);
    result = `${parseFloat(result) / x}`;
  }
  return `${result}`;
}

const add = (str: string) => {
  const NumbersArrays = str
    .split('+')
    .map(numb => {
      if (numb.includes('-')) {
        const negative = numb.split('-');
        const first = negative[0]
        if (first[first.length - 1] === '/' || first[first.length - 1] === 'x') {
          return [`${negative[0]}-${negative[1]}`];
        }
        // console.log([negative[0], `-${negative[1]}`]);
        return [negative[0], `-${negative[1]}`];
      }
      return [numb];
    });
  const signedNumbers: Array<string> = new Array<string>();
  NumbersArrays.forEach((arr) => {
    arr.forEach((numberString) => {
      signedNumbers.push(numberString);
    })
  });


  const numbers = signedNumbers.map(numb => divide(numb));
  let result = 0;
  for (const i of numbers) {
    const x = parseFloat(i);
    result = result + x;
  }
  return `${result}`;
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