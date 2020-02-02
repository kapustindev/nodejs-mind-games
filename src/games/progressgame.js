export default () => {
    const rules = 'What number is missing in the progression?';
    const randNumber = (num) => Math.ceil(Math.random() * num);
    const getQuestion = () => {
        const beginOfProgression = randNumber(25);
        const stepOfProgression = randNumber(3);
        const hiddenIndex = Math.floor(Math.random() * 10);
        const resultArray = [];
        for (let i = beginOfProgression; i < beginOfProgression + (10 * stepOfProgression); i += stepOfProgression) {
            if (i !== beginOfProgression + (hiddenIndex * stepOfProgression)) {
                resultArray.push(i);
            } else {
                resultArray.push('..');
            }
        }
        return resultArray.join(' ');
    };
    const getCorrectAnswer = (str) => {
        const arr = str.split(' ');
        const hiddenIndex = arr.indexOf('..');
        let correctAnswer = 0;
        let step = 0;
        if (arr[hiddenIndex - 2] !== undefined) {
            step = Number(arr[hiddenIndex - 1]) - Number(arr[hiddenIndex - 2]);
            correctAnswer = Number(arr[hiddenIndex - 1]) + step;
        } else {
            step = Number(arr[hiddenIndex + 2]) - Number(arr[hiddenIndex +1]);
            correctAnswer = Number(arr[hiddenIndex + 1]) - step;
        }
        return correctAnswer.toString();
    };
    
    const result = [rules, getQuestion, getCorrectAnswer];
    return result;
  };
  