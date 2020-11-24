import startGame from '../index.js';
import { generateRandomInt, createQuestion } from '../cli.js';

const description = 'What number is missing in the progression?';
const SEQUENCE_LENGTH = 10;

const createSequence = (initial, difference, length) => Array(length)
  .fill(initial)
  .map((term, index) => term + difference * index);

const generateData = (min, limit) => {
  const initial = generateRandomInt(min, limit);
  const difference = generateRandomInt(min, limit);
  const index = generateRandomInt(0, SEQUENCE_LENGTH - 1);
  const sequence = createSequence(initial, difference, SEQUENCE_LENGTH);
  const correctAnswer = sequence[index].toString();
  sequence[index] = '..';
  const question = createQuestion(...sequence);

  return { question, correctAnswer };
};

export default () => startGame(description, generateData);
