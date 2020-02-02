export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const randNumber = () => Math.ceil(Math.random() * 100);
  const getRandNumbers = () => `${randNumber()} ${randNumber()}`;
  const getNod = (str) => {
    const numArray = str.split(' ');
    const num1 = Number(numArray[0]);
    const num2 = Number(numArray[1]);
    let stepCount = 0;
    let maxDiv = 0;
    num1 > num2 ? stepCount = num2 : stepCount = num1;

    for (let i = 1; i <= stepCount; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        maxDiv = i;
      }
    }

    return maxDiv.toString();
  };
  const result = [rules, getRandNumbers, getNod];
  return result;
};
