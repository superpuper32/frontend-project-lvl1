import welcomeGreetings, {
  randomInt,
  promptQuestion,
  promptAnswer,
  incorrectLog,
  finishGame,
} from '../cli.js'

const MIN = 1
const LIMIT = 100
const { log } = console

const expressions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const randomSign = (operators) => {
  const random = randomInt(1, operators.length - 1)

  return operators[random]
}

const createQuestion = (a, b, sign) => `${a} ${sign} ${b}`

export default async () => {
  const name = await welcomeGreetings()
  let rounds = 0

  log('What is the result of the expression?')

  while (rounds < 3) {
    const a = randomInt(MIN, LIMIT)
    const b = randomInt(MIN, LIMIT)
    const sign = randomSign(Object.keys(expressions))
    const question = createQuestion(a, b, sign)
    promptQuestion(question)
    const answer = await promptAnswer()

    const correctAnswer = expressions[sign](a, b).toString()
    if (answer === correctAnswer) {
      log('Correct!');
      rounds += 1
    } else {
      incorrectLog(answer, correctAnswer, name)
      rounds = 0
    }
  }

  finishGame(name)
}
