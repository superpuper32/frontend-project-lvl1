import { cons } from '@hexlet/pairs'

import startGame from '../index.js'
import { randomInt, createQuestion } from '../cli.js'

const clause = 'What is the result of the expression?'

const expressions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const randomSign = (min, operators) => {
  const random = randomInt(min, operators.length - 1)

  return operators[random]
}

const generateData = (min, limit) => {
  const a = randomInt(min, limit)
  const b = randomInt(min, limit)
  const sign = randomSign(min, Object.keys(expressions))

  const question = createQuestion(a, sign, b)
  const correctAnswer = expressions[sign](a, b).toString()

  return cons(question, correctAnswer)
}

export default () => startGame(clause, generateData)
