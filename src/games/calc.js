import startGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const RandomInt = { MIN: 1, MAX: 100 };
const DESCRIPTION = 'What is the result of the expression?';
const ROUNDS_COUNT = 3;

const mapOperatorToExpression = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomSign = (operators) => {
  const randomIndex = generateRandomInt(0, operators.length - 1);

  return operators[randomIndex];
};

const generateRound = () => {
  const a = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const b = generateRandomInt(RandomInt.MIN, RandomInt.MAX);
  const sign = getRandomSign(Object.keys(mapOperatorToExpression));

  const question = `${a} ${sign} ${b}`;
  const correctAnswer = mapOperatorToExpression[sign](a, b).toString();

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, ROUNDS_COUNT, generateRound);
