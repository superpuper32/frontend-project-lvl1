import readlineSync from 'readline-sync';
import welcomeGreetings, { generateRandomInt } from './cli.js';

const ROUNDS_LIMIT_MIN = 3;
const ROUNDS_LIMIT_MAX = 5;
const ROUNDS_COUNT = generateRandomInt(ROUNDS_LIMIT_MIN, ROUNDS_LIMIT_MAX);

const promptQuestion = (question) => console.log(`Question: ${question}`);

const promptAnswer = () => readlineSync.question('Your answer: ');

const incorrectLog = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
};

const finishGame = (name) => console.log(`Congratulations, ${name}!`);

export default (description, generateQuiz) => {
  const name = welcomeGreetings();
  console.log(description);

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const { question, correctAnswer } = generateQuiz();

    console.log(`Round # ${round} of ${ROUNDS_COUNT}`);
    promptQuestion(question);
    const playerAnswer = promptAnswer();

    if (playerAnswer !== correctAnswer) {
      incorrectLog(playerAnswer, correctAnswer, name);
      return;
    }

    console.log('Correct!');
  }

  finishGame(name);
};
