import { cons } from '@hexlet/pairs'

import startGame from '../index.js'
import {
  randomInt,
  isEven,
} from '../cli.js'

const clause = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateData = (min, limit) => {
  const question = randomInt(min, limit)
  const correctAnswer = isEven(question) ? 'yes' : 'no'

  return cons(question, correctAnswer)
}

export default () => startGame(clause, generateData)
