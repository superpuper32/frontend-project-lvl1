import startGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const RandomInt = { MIN: 1, MAX: 100 };
const PROGRESSION_LENGTH = 10;
const DESCRIPTION = 'What number is missing in the progression?';

const createProgression = (start, step, length) => Array(length)
  .fill(start)
  .map((term, index) => term + step * index);

const createQuestion = (progression) => Array.from(progression).join(' ');

const generateRound = () => {
  const start = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const step = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const hiddenElementIndex = generateRandomInt(0, PROGRESSION_LENGTH - 1);
  const progression = createProgression(start, step, PROGRESSION_LENGTH);
  const correctAnswer = progression[hiddenElementIndex].toString();
  const progressionWithHiddenElement = [...progression];
  progressionWithHiddenElement[hiddenElementIndex] = '..';
  const question = createQuestion(progressionWithHiddenElement);

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateRound);
