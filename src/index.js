import { car, cdr } from '@hexlet/pairs'

import welcomeGreetings, {
  promptQuestion,
  promptAnswer,
  incorrectLog,
  finishGame,
} from './cli.js'

const ROUNDS = 3

export default async (clause, generateData) => {
  const name = await welcomeGreetings()
  let count = 0

  console.log(clause)

  while (count < ROUNDS) {
    const gameData = generateData()
    const question = car(gameData)
    const correctAnswer = cdr(gameData)
    promptQuestion(question)
    const playerAnswer = await promptAnswer()

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      count += 1
    } else {
      incorrectLog(playerAnswer, correctAnswer, name)
      count = 0
    }
  }

  finishGame(name)
}
