import getEngine from '../index.js';
import getRandom from '../utils/randomnumber.js';

const gameDescription = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getOperator = () => operations[getRandom(0, 2)];

const calculate = (num1, num2, oper) => {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return console.log(`Operator ${oper} doesn't exist`);
  }
};

const values = () => {
  const randNum1 = getRandom(0, 25);
  const randNum2 = getRandom(0, 25);
  const randOper = getOperator();

  const question = `${randNum1} ${randOper} ${randNum2}`;
  const answer = calculate(randNum1, randNum2, randOper).toString();

  return [question, answer];
};

export default () => getEngine(gameDescription, values);
