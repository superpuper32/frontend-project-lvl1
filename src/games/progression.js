import startGame from '../index.js';
import generateRandomInt from '../utils.js';
import { createQuestion } from '../cli.js';

const randomIntEnum = { MIN: 1, MAX: 100 };
const SEQUENCE_LENGTH = 10;
const DESCRIPTION = 'What number is missing in the progression?';

const createSequence = (start, step, length) => Array(length)
  .fill(start)
  .map((term, index) => term + step * index);

const generateRoundQA = () => {
  const start = generateRandomInt(randomIntEnum.MIN, randomIntEnum.MAX);
  const step = generateRandomInt(randomIntEnum.MIN, randomIntEnum.MAX);
  const indexSequence = generateRandomInt(0, SEQUENCE_LENGTH - 1);
  const sequence = createSequence(start, step, SEQUENCE_LENGTH);
  const correctAnswer = sequence[indexSequence].toString();
  const preparedSequence = sequence.map((term, index) => (index === indexSequence ? '..' : term));
  const question = createQuestion(...preparedSequence);

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateRoundQA);
