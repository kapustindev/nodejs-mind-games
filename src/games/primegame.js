import getEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const arrOfDivisors = [];
  for (let divisor = 2; divisor <= num; divisor += 1) {
    if (num % divisor === 0) {
      arrOfDivisors.push(divisor);
    }
  }
  return arrOfDivisors.length === 1;
};

const values = () => {
  const question = getRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => getEngine(gameDescription, values);
