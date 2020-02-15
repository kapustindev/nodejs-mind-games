import runEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const genGameData = () => {
  const first = getRandomNumber(1, 25);
  const step = getRandomNumber(1, 3);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const progression = [];
  for (let i = first; i < first + (progressionLength * step); i += step) {
    progression.push(i);
  }
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => runEngine(gameDescription, genGameData);
