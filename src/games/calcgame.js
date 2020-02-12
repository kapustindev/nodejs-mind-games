import getEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

const gameDescription = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getOperator = () => operations[getRandomNumber(0, 2)];

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

const values = () => {
  const num1 = getRandomNumber(0, 25);
  const num2 = getRandomNumber(0, 25);
  const operator = getOperator();

  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator).toString();

  return [question, answer];
};

export default () => getEngine(gameDescription, values);
