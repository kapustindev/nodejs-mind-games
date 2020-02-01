export default () => {
  const rules = 'What is the result of the expression?';
  const randNumber = () => Math.ceil(Math.random() * 100);
  const randOperation = () => {
    const operations = ['+', '-', '*'];

    const getRandChar = () => {
      const operationIndex = Math.floor(Math.random() * Math.floor(operations.length));
      return operations[operationIndex];
    };

    return `${randNumber()} ${getRandChar()} ${randNumber()}`;
  };
  const calcAnswer = (str) => {
    const resultArr = str.split(' ');
    const num1 = Number(resultArr[0]);
    const num2 = Number(resultArr[2]);
    let answer = '';
    switch (resultArr[1]) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      default:
        break;
    }
    return answer.toString();
  };

  const result = [rules, randOperation, calcAnswer];
  return result;
};
