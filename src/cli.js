import readlineSync from 'readline-sync';

export const generateRandomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const createQuestion = (...letters) => letters.join(' ');

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
