export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const randNumber = () => Math.ceil(Math.random() * 100);
  const condition = (num) => (num % 2 === 0 ? 'yes' : 'no');
  const result = [rules, randNumber, condition];
  return result;
};
