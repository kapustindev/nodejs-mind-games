import getEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const getNod = (num1, num2) => {
    let stepCount = 0;
    let maxDiv = 0;
    stepCount = num1 > num2 ? num2 : num1;

    for (let i = 1; i <= stepCount; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        maxDiv = i;
      }
    }
    return maxDiv;
  };

  const values = () => {
    const num1 = getRandomNumber(100);
    const num2 = getRandomNumber(100);
    const question = `${num1} ${num2}`;
    const answer = getNod(num1, num2).toString();
    return [question, answer];
  };
  return getEngine(rules, values);
};
