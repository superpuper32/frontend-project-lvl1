import startGame from '../index.js';
import { generateRandomInt, createQuestion } from '../cli.js';

const RANDOM_INT_MIN = 1;
const RANDOM_INT_MAX = 100;
const SEQUENCE_LENGTH = 10;
const description = 'What number is missing in the progression?';

const createSequence = (initial, difference, length) => Array(length)
  .fill(initial)
  .map((term, index) => term + difference * index);

const generateQuiz = () => {
  const initial = generateRandomInt(RANDOM_INT_MIN, RANDOM_INT_MAX);
  const difference = generateRandomInt(RANDOM_INT_MIN, RANDOM_INT_MAX);
  const index = generateRandomInt(0, SEQUENCE_LENGTH - 1);
  const sequence = createSequence(initial, difference, SEQUENCE_LENGTH);
  const correctAnswer = sequence[index].toString();
  sequence[index] = '..';
  const question = createQuestion(...sequence);

  return { question, correctAnswer };
};

export default () => startGame(description, generateQuiz);
