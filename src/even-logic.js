import promptly from 'promptly';

const { log } = console;
const { prompt } = promptly;

export default async () => {
  log('Welcome to the Brain Games!');

  const name = await prompt('May I have your name? ');

  log(`Hello, ${name}`);
  log('Answer "yes" if the number is even, otherwise answer "no".');

  log('Question: number ');
  const answer = await prompt('Your answer: ');
  log(answer);
};
