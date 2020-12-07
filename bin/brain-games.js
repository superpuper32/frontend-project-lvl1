#!/usr/bin/env node
import readlineSync from 'readline-sync';

const startBrainGames = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

startBrainGames();

export default startBrainGames;
