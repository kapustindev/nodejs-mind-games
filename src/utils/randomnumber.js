export default (num1, num2) => {
  const begin = Math.floor(num1);
  const end = Math.ceil(num2);
  return Math.floor(Math.random() * (end - begin + 1) + begin);
};
