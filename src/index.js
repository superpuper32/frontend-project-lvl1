import readlineSync from 'readline-sync';
import welcomeGreetings, { generateRandomInt } from './cli.js';

const RANDOM_INT_MIN = 1;
const RANDOM_INT_MAX = 1000;
const ROUNDS_LIMIT_MIN = 3;
const ROUNDS_LIMIT_MAX = 5;

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

  for (let round = 1; round < generateRandomInt(ROUNDS_LIMIT_MIN, ROUNDS_LIMIT_MAX); round += 1) {
    const { question, correctAnswer } = generateQuiz(RANDOM_INT_MIN, RANDOM_INT_MAX);

    console.log(`Round # ${round}`);
    promptQuestion(question);
    const playerAnswer = promptAnswer();

    if (playerAnswer !== correctAnswer) {
      incorrectLog(playerAnswer, correctAnswer, name);
      round = 1;
    }

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    }
  }

  finishGame(name);
};
