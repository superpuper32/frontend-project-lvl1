import startGame from '../index.js';
import generateRandomInt from '../utils.js';

const randomIntEnum = { MIN: 1, MAX: 1000 };
const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRoundQA = () => {
  const question = generateRandomInt(randomIntEnum.MIN, randomIntEnum.MAX);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateRoundQA);
