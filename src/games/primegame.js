export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const randNumber = () => Math.ceil(Math.random() * 100);
  const getCorrectAnswer = (num) => {
    const arrOfDivisors = [];
    for (let i = 2; i <= num; i += 1) {
      if (num % i === 0) {
        arrOfDivisors.push(i);
      }
    }
    return arrOfDivisors.length > 1 ? 'no' : 'yes';
  };
  const result = [rules, randNumber, getCorrectAnswer];
  return result;
};
