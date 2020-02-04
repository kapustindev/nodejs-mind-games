export default (num, attr = 'ceil') => {
  if (attr === 'floor') {
    return Math.floor(Math.random() * num);
  }
  return Math.ceil(Math.random() * num);
};
