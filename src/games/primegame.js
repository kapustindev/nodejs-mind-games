import runEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const divisors = [];
  for (let divisor = 2; divisor <= num; divisor += 1) {
    if (num % divisor === 0) {
      divisors.push(divisor);
    }
  }
  return divisors.length === 1;
};

const genGameData = () => {
  const question = getRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), answer];
};

export default () => runEngine(GAME_DESCRIPTION, genGameData);
