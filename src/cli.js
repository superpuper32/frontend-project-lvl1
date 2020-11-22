import promptly from 'promptly'

const { prompt } = promptly

export default async () => {
  console.log('Welcome to the Brain Games!')
  const name = await prompt('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

const randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))

const promptQuestion = (question) => console.log(`Question: ${question}`)

const promptAnswer = () => prompt('Your answer: ')

const createQuestion = (...letters) => letters.join(' ')

const incorrectLog = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
  console.log(`Let's try again, ${name}!`)
}

const finishGame = (name) => console.log(`Congratulations, ${name}!`)

export {
  randomInt,
  promptQuestion,
  promptAnswer,
  createQuestion,
  incorrectLog,
  finishGame,
}
