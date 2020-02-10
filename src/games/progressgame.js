import getEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

const gameDescription = 'What number is missing in the progression?';

const values = () => {
  const beginOfProgr = getRandomNumber(1, 25);
  const stepOfProgr = getRandomNumber(1, 3);
  const hiddenIndex = getRandomNumber(0, 9);
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

export default () => getEngine(gameDescription, values);
