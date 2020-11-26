import startGame from '../index.js';
import { generateRandomInt, createQuestion } from '../cli.js';

const RANDOM_INT_MIN = 1;
const RANDOM_INT_MAX = 100;
const description = 'What is the result of the expression?';

const mapOperatorsToExpressions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const randomSign = (min, operators) => {
  const randomIndex = generateRandomInt(min, operators.length - 1);

  return operators[randomIndex];
};

const generateQuiz = () => {
  const a = generateRandomInt(RANDOM_INT_MIN, RANDOM_INT_MAX);
  const b = generateRandomInt(RANDOM_INT_MIN, RANDOM_INT_MAX);
  const sign = randomSign(RANDOM_INT_MIN, Object.keys(mapOperatorsToExpressions));

  const question = createQuestion(a, sign, b);
  const correctAnswer = mapOperatorsToExpressions[sign](a, b).toString();

  return { question, correctAnswer };
};

export default () => startGame(description, generateQuiz);
