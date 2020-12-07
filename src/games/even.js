import startGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const RandomInt = { MIN: 1, MAX: 1000 };
const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const ROUNDS_COUNT = 3;

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, ROUNDS_COUNT, generateRound);
