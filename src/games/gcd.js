import startGame from '../index.js';
import generateRandomInt from '../utils.js';
import { createQuestion } from '../cli.js';

const randomIntEnum = { MIN: 1, MAX: 100 };
const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

const generateRoundQA = () => {
  const a = generateRandomInt(randomIntEnum.MIN, randomIntEnum.MAX);
  const b = generateRandomInt(randomIntEnum.MIN, randomIntEnum.MAX);
  const question = createQuestion(a, b);
  const correctAnswer = getGCD(a, b).toString();

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateRoundQA);
