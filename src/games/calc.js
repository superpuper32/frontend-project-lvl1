import startGame from '../index.js';
import generateRandomInt from '../utils.js';

const randomIntEnum = { MIN: 1, MAX: 100 };
const DESCRIPTION = 'What is the result of the expression?';

const mapOperatorToExpression = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateRandomSign = (operators) => {
  const randomIndex = generateRandomInt(randomIntEnum.MIN, operators.length - 1);

  return operators[randomIndex];
};

const generateRoundQA = () => {
  const a = generateRandomInt(randomIntEnum.MIN, randomIntEnum.MAX);
  const b = generateRandomInt(randomIntEnum.MIN, randomIntEnum.MAX);
  const sign = generateRandomSign(Object.keys(mapOperatorToExpression));

  const question = `${a} ${sign} ${b}`;
  const correctAnswer = mapOperatorToExpression[sign](a, b).toString();

  return { question, correctAnswer };
};

export default () => startGame(DESCRIPTION, generateRoundQA);
