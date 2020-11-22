import { cons } from '@hexlet/pairs'

import startGame from '../index.js'
import { randomInt, createQuestion } from '../cli.js'

const clause = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number < 2) return false

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false
  }

  return true
}

const generateData = (min, limit) => {
  const number = randomInt(min, limit)
  const question = createQuestion(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return cons(question, correctAnswer)
}

export default () => startGame(clause, generateData)
