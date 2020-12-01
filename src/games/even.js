import startGame from '../index.js';
import generateRandomInt from '../utils.js';

const RANDOM_INT_MIN = 1;
const RANDOM_INT_MAX = 1000;
const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateQuiz = () => {
  const question = generateRandomInt(RANDOM_INT_MIN, RANDOM_INT_MAX);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateQuiz);
