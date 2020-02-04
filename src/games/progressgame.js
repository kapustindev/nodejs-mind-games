import getEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

export default () => {
  const rules = 'What number is missing in the progression?';
  const values = () => {
    const beginOfProgr = getRandomNumber(25);
    const stepOfProgr = getRandomNumber(3);
    const hiddenIndex = getRandomNumber(10, 'floor');
    const resultArray = [];
    let answer = 0;
    for (let i = beginOfProgr; i < beginOfProgr + (10 * stepOfProgr); i += stepOfProgr) {
      if (i !== beginOfProgr + (hiddenIndex * stepOfProgr)) {
        resultArray.push(i);
      } else {
        resultArray.push('..');
        answer = i.toString();
      }
    }
    const question = resultArray.join(' ');
    return [question, answer];
  };

  return getEngine(rules, values);
};
