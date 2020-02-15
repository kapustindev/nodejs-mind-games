import runEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

// Finding Greatest Common Divisor
const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

const genGameData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2).toString();
  return [question, answer];
};

export default () => runEngine(gameDescription, genGameData);
