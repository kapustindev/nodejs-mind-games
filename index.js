import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};

export const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // Получаем рандомное целое число до 100
  const randNumber = () => Math.ceil(Math.random() * 100);
  // Создаем счетчик очков
  let counter = 0;

  while (counter !== 3) {
    const question = randNumber();
    let correctAnswer = '';
    let wrongAnswer = '';

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (question % 2 === 0) {
      correctAnswer = 'yes';
      wrongAnswer = 'no';
    } else {
      correctAnswer = 'no';
      wrongAnswer = 'yes';
    }

    if (userAnswer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
