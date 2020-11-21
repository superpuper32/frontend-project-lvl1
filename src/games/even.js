import { cons } from '@hexlet/pairs'

import startGame from '../index.js'
import {
  randomInt,
  isEven,
} from '../cli.js'

// const MIN = 1
// const LIMIT = 100
const clause = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateData = (min, limit) => {
  const question = randomInt(min, limit)
  const answer = isEven(question) ? 'yes' : 'no'

  return cons(question, answer)
}

export default () => startGame(clause, generateData)
