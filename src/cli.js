import promptly from 'promptly'

const { prompt } = promptly

export default async () => {
  console.log('Welcome to the Brain Games!')
  const name = await prompt('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const isEven = (num) => num % 2 === 0

const promptQuestion = (question) => console.log(`Question: ${question}`)

const promptAnswer = () => prompt('Your answer: ')

const finishGame = (name) => console.log(`Congratulations, ${name}!`)

export {
  randomInt,
  isEven,
  promptQuestion,
  promptAnswer,
  finishGame,
}
