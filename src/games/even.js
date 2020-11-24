import startGame from '../index.js';
import { generateRandomInt } from '../cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateData = (min, limit) => {
  const question = generateRandomInt(min, limit);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => startGame(description, generateData);
