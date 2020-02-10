import getEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const values = () => {
  const question = getRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => getEngine(gameDescription, values);
