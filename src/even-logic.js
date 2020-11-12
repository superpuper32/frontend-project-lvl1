import promptly from 'promptly'

import welcomeGreetings from './cli.js'

const { log } = console
const { prompt } = promptly
const LIMIT = 100

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const checkEven = (num) => num % 2 === 0

const checkAnswer = (answer, even) => {
  switch (answer) {
    case 'yes':
      return !!even
    case 'no':
      return !even
    default:
      return false
  }
}

export default async () => {
  const name = await welcomeGreetings()
  let count = 0

  log('Answer "yes" if the number is even, otherwise answer "no".')

  while (count < 3) {
    const number = randomInt(LIMIT)
    log(`Question: ${number}`)
    const answer = await prompt('Your answer: ')
    const even = checkEven(number)
    const right = checkAnswer(answer, even)
    if (right) {
      log('Correct!');
      count += 1
    } else {
      log(`Let's try again, ${name}!`)
      count = 0
    }
  }

  log(`Congratulations, ${name}!`)
};
