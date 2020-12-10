import startGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const RandomInt = { MIN: 1, MAX: 100 };
const DESCRIPTION = 'What is the result of the expression?';

const mapOperatorToExpression = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomOperator = (operators) => {
  const randomIndex = generateRandomInt(0, operators.length - 1);

  return operators[randomIndex];
};

const generateRound = () => {
  const a = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const b = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const operator = getRandomOperator(Object.keys(mapOperatorToExpression));

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = mapOperatorToExpression[operator](a, b).toString();

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateRound);
