import startGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const RandomInt = { MIN: 1, MAX: 100 };
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

const generateRound = () => {
  const question = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateRound);
