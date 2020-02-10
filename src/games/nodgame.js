import getEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

// Finding Greatest Common Divisor
const getGCD = (num1, num2) => {
  let stepCount = 0;
  let maxDiv = 0;
  stepCount = num1 > num2 ? num2 : num1;

  for (let divisor = 1; divisor <= stepCount; divisor += 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      maxDiv = divisor;
    }
  }
  return maxDiv;
};

const values = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2).toString();
  return [question, answer];
};

export default () => getEngine(gameDescription, values);
