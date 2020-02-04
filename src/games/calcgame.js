import getEngine from '../index.js';
import getRandom from '../utils/randomnumber.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const operations = ['+', '-', '*'];
  const getRandChar = () => operations[getRandom(3, 'floor')];
  const getValues = (num1, num2, oper) => {
    let result = 0;
    switch (oper) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        break;
    }
    return result;
  };

  const values = () => {

    const randNum1 = getRandom(25);
    const randNum2 = getRandom(25);
    const randOper = getRandChar();

    const question = `${randNum1} ${randOper} ${randNum2}`;
    const answer = getValues(randNum1, randNum2, randOper).toString();

    return [question, answer];
  };

  return getEngine(rules, values);
};
