import startGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const RandomInt = { MIN: 1, MAX: 100 };
const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const generateRound = () => {
  const a = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const b = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const question = `${a} ${b}`;
  const correctAnswer = getGcd(a, b).toString();

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateRound);
