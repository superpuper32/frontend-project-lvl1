import { cons } from '@hexlet/pairs'

import startGame from '../index.js'
import { randomInt, createQuestion } from '../cli.js'

const clause = 'Find the greatest common divisor of given numbers.'

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b))

const generateData = (min, limit) => {
  const a = randomInt(min, limit)
  const b = randomInt(min, limit)
  const question = createQuestion(a, b)
  const correctAnswer = getGCD(a, b).toString()

  return cons(question, correctAnswer)
}

export default () => startGame(clause, generateData)
