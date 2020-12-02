import startGame from '../index.js';
import generateRandomInt from '../utils.js';
import { createQuestion } from '../cli.js';

const randomIntEnum = { MIN: 1, MAX: 100 };
const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRoundQA = () => {
  const number = generateRandomInt(randomIntEnum.MIN, randomIntEnum.MAX);
  const question = createQuestion(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateRoundQA);
