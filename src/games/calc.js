import startGame from '../index.js';
import { generateRandomInt, createQuestion } from '../cli.js';

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

const generateData = (min, limit) => {
  const a = generateRandomInt(min, limit);
  const b = generateRandomInt(min, limit);
  const sign = randomSign(min, Object.keys(mapOperatorsToExpressions));

  const question = createQuestion(a, sign, b);
  const correctAnswer = mapOperatorsToExpressions[sign](a, b).toString();

  return { question, correctAnswer };
};

export default () => startGame(description, generateData);
