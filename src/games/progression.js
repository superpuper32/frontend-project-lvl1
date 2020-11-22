import { cons } from '@hexlet/pairs'

import startGame from '../index.js'
import { randomInt, createQuestion } from '../cli.js'

const clause = 'What number is missing in the progression?'

const createSequence = (initial, difference, length) => Array(length)
  .fill(initial)
  .map((term, index) => term + difference * index)

const generateData = (min, limit, length) => {
  const initial = randomInt(min, limit)
  const difference = randomInt(min, limit)
  const ndx = randomInt(0, length - 1)
  const sequence = createSequence(initial, difference, length)
  const correctAnswer = sequence[ndx].toString()
  sequence[ndx] = '..'
  const question = createQuestion(...sequence)

  return cons(question, correctAnswer)
}

export default () => startGame(clause, generateData)
