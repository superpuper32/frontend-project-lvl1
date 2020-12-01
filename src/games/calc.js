import startGame from '../index.js';
import generateRandomInt from '../utils.js';

const RANDOM_INT_MIN = 1;
const RANDOM_INT_MAX = 100;
const DESCRIPTION = 'What is the result of the expression?';

const mapOperatorToExpression = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateRandomSign = (operators) => {
  const randomIndex = generateRandomInt(RANDOM_INT_MIN, operators.length - 1);

  return operators[randomIndex];
};

const generateQuiz = () => {
  const a = generateRandomInt(RANDOM_INT_MIN, RANDOM_INT_MAX);
  const b = generateRandomInt(RANDOM_INT_MIN, RANDOM_INT_MAX);
  const sign = generateRandomSign(Object.keys(mapOperatorToExpression));

  const question = `${a} ${sign} ${b}`;
  const correctAnswer = mapOperatorToExpression[sign](a, b).toString();

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateQuiz);
