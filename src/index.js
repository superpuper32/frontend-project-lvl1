import promptly from 'promptly';
import welcomeGreetings, { generateRandomInt } from './cli.js';

const { prompt } = promptly;

const MIN = 1;
const LIMIT = 100;
const ROUNDS_LIMIT = 5;

const promptQuestion = (question) => console.log(`Question: ${question}`);

const promptAnswer = () => prompt('Your answer: ');

const incorrectLog = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
};

const finishGame = (name) => console.log(`Congratulations, ${name}!`);

export default async (description, generateData) => {
  const name = await welcomeGreetings();
  console.log(description);
  let count = 0;

  while (count < generateRandomInt(MIN, ROUNDS_LIMIT)) {
    const { question, correctAnswer } = generateData(MIN, LIMIT);

    promptQuestion(question);
    const playerAnswer = await promptAnswer();

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    }

    if (playerAnswer !== correctAnswer) {
      incorrectLog(playerAnswer, correctAnswer, name);
      count = 0;
    }
  }

  finishGame(name);
};
