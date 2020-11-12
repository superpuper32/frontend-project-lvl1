import promptly from 'promptly'

const { prompt } = promptly

export default async () => {
  console.log('Welcome to the Brain Games!')
  const name = await prompt('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const checkEven = (num) => num % 2 === 0

const promptAnswer = () => prompt('Your answer: ')

const finishGame = (name) => console.log(`Congratulations, ${name}!`)

export {
  randomInt,
  checkEven,
  promptAnswer,
  finishGame,
}
