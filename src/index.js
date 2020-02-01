import readlineSync from 'readline-sync';

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // Выводим условия игры
  console.log(game[0]);
  // Создаем счетчик очков
  let counter = 0;

  while (counter !== 3) {
    // Получаем вопрос
    const getQuestion = game[1];
    const question = getQuestion();
    // Получаем правильный ответ
    const getAnswer = game[2];
    const correctAnswer = getAnswer(question);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      const wrongAnswer = userAnswer;
      return console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
