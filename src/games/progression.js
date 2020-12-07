import startGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const RandomInt = { MIN: 1, MAX: 100 };
const SEQUENCE_LENGTH = 10;
const DESCRIPTION = 'What number is missing in the progression?';
const ROUNDS_COUNT = 3;

const createProgression = (start, step, length) => Array(length)
  .fill(start)
  .map((term, index) => term + step * index);

const generateRound = () => {
  const start = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const step = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const indexToHidden = generateRandomInt(0, SEQUENCE_LENGTH - 1);
  const progression = createProgression(start, step, SEQUENCE_LENGTH);
  const correctAnswer = progression[indexToHidden].toString();
  progression[indexToHidden] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, ROUNDS_COUNT, generateRound);
