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

export const calc = (str: string) => {
  return add(str);
}