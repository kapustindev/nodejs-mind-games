import runEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const genGameData = () => {
  const num1 = getRandomNumber(0, 25);
  const num2 = getRandomNumber(0, 25);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator).toString();

  return [question, answer];
};

export default () => runEngine(GAME_DESCRIPTION, genGameData);
