import welcomeGreetings, {
  randomInt,
  isEven,
  promptQuestion,
  promptAnswer,
  finishGame,
} from '../cli.js'

const { log } = console
const LIMIT = 100

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

const reverseAnswer = (answer) => (answer === 'yes' ? 'no' : 'yes')

export default async () => {
  const name = await welcomeGreetings()
  let count = 0

  log('Answer "yes" if the number is even, otherwise answer "no".')

  while (count < 3) {
    const number = randomInt(LIMIT)
    promptQuestion(number)
    const answer = await promptAnswer()
    const even = isEven(number)
    const right = checkAnswer(answer, even)
    if (right) {
      log('Correct!');
      count += 1
    } else {
      log(`${answer} is wrong answer ;(. Correct answer was ${reverseAnswer(answer)}`)
      log(`Let's try again, ${name}!`)
      count = 0
    }
  }

  finishGame(name)
}
