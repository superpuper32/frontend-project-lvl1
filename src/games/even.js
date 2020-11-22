import { cons } from '@hexlet/pairs'

import startGame from '../index.js'
import { randomInt } from '../cli.js'

const clause = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (num) => num % 2 === 0

const generateData = (min, limit) => {
  const question = randomInt(min, limit)
  const correctAnswer = isEven(question) ? 'yes' : 'no'

  return cons(question, correctAnswer)
}

export default () => startGame(clause, generateData)
