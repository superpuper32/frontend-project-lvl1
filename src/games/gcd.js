import startGame from '../index.js';
import { generateRandomInt, createQuestion } from '../cli.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

const generateData = (min, limit) => {
  const a = generateRandomInt(min, limit);
  const b = generateRandomInt(min, limit);
  const question = createQuestion(a, b);
  const correctAnswer = getGCD(a, b).toString();

  return { question, correctAnswer };
};

export default () => startGame(description, generateData);
