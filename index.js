import readlineSync from 'readline-sync';

export const askForName = () => {
    var userName = readlineSync.question('May I have your name? ');
    return console.log(`Hello, ${userName}!`);
};