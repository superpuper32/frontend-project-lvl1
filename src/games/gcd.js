import startGame from '../index.js';
import generateRandomInt from '../utils.js';
import { createQuestion } from '../cli.js';

const RANDOM_INT_MIN = 1;
const RANDOM_INT_MAX = 100;
const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

const generateQuiz = () => {
  const a = generateRandomInt(RANDOM_INT_MIN, RANDOM_INT_MAX);
  const b = generateRandomInt(RANDOM_INT_MIN, RANDOM_INT_MAX);
  const question = createQuestion(a, b);
  const correctAnswer = getGCD(a, b).toString();

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateQuiz);
