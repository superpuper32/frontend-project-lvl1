import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export default (description, generateRoundQA) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const { question, correctAnswer } = generateRoundQA();

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
