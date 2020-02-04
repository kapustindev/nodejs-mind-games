export default (num) => {
  const arrOfDivisors = [];
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      arrOfDivisors.push(i);
    }
  }
  return arrOfDivisors.length === 1;
};
