import welcomeGreetings, {
  randomInt,
  isEven,
  promptQuestion,
  promptAnswer,
  incorrectLog,
  finishGame,
} from '../cli.js'

const { log } = console
const MIN = 1
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
    const number = randomInt(MIN, LIMIT)
    promptQuestion(number)
    const answer = await promptAnswer()
    const even = isEven(number)
    const correctAnswer = checkAnswer(answer, even)
    if (correctAnswer) {
      log('Correct!');
      count += 1
    } else {
      incorrectLog(answer, reverseAnswer(answer), name)
      count = 0
    }
  }

  finishGame(name)
}
