import runEngine from '../index.js';
import getRandomNumber from '../utils/randomnumber.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;

const genGameData = () => {
  const first = getRandomNumber(1, 25);
  const step = getRandomNumber(1, 3);
  const hiddenElementIndex = getRandomNumber(0, PROGRESSION_LENGTH - 1);
  const progression = [];
  for (let i = first; i < first + (PROGRESSION_LENGTH * step); i += step) {
    progression.push(i);
  }
  const answer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => runEngine(GAME_DESCRIPTION, genGameData);
