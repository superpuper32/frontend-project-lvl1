import readlineSync from 'readline-sync';
import greetPlayer, { generateRandomInt } from './cli.js';

const ROUNDS_LIMIT_MIN = 3;
const ROUNDS_LIMIT_MAX = 5;
const ROUNDS_COUNT = generateRandomInt(ROUNDS_LIMIT_MIN, ROUNDS_LIMIT_MAX);

export default (description, generateQuiz) => {
  const name = greetPlayer();
  console.log(description);

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const { question, correctAnswer } = generateQuiz();

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
