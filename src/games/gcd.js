import { cons } from '@hexlet/pairs'

import startGame from '../index.js'
import { randomInt, createQuestion } from '../cli.js'

const MIN = 1
const LIMIT = 100
const clause = 'Find the greatest common divisor of given numbers.'

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b))

const generateData = () => {
  const a = randomInt(MIN, LIMIT)
  const b = randomInt(MIN, LIMIT)
  const question = createQuestion(a, b)
  const correctAnswer = getGCD(a, b).toString()

  return cons(question, correctAnswer)
}

export default () => startGame(clause, generateData)
