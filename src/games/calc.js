import { cons } from '@hexlet/pairs'

import startGame from '../index.js'
import { randomInt } from '../cli.js'

const MIN = 1
const LIMIT = 100
const clause = 'What is the result of the expression?'

const expressions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const randomSign = (operators) => {
  const random = randomInt(MIN, operators.length - 1)

  return operators[random]
}

// const createQuestion = (a, b, sign) => `${a} ${sign} ${b}`
const createQuestion = (...letters) => letters.join(' ')

const generateData = () => {
  const a = randomInt(MIN, LIMIT)
  const b = randomInt(MIN, LIMIT)
  const sign = randomSign(Object.keys(expressions))

  const question = createQuestion(a, sign, b)
  const correctAnswer = expressions[sign](a, b).toString()

  return cons(question, correctAnswer)
}

export default () => startGame(clause, generateData)
