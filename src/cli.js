import promptly from 'promptly';

const { prompt } = promptly;

export const generateRandomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const createQuestion = (...letters) => letters.join(' ');

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
