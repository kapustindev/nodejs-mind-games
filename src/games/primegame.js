import getEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const isPrime = (num) => {
    const arrOfDivisors = [];
    for (let i = 2; i <= num; i += 1) {
      if (num % i === 0) {
        arrOfDivisors.push(i);
      }
    }
    return arrOfDivisors.length === 1;
  };

  const values = () => {
    const question = getRandomNumber(100);
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };
  return getEngine(rules, values);
};
