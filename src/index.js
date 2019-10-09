module.exports = function multiply(first, second) {
    let resultArray = [];
    let firstArray = first.split('');
    let secondArray = second.split('');
    firstArray.reverse();
    secondArray.reverse();
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (!resultArray[i + j]) {
                resultArray[i + j] = 0;
            }
            resultArray[i + j] += firstArray[i] * secondArray[j];
        }
    }
    for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] >= 10) {
            if (!resultArray[i + 1]) {
                resultArray[i + 1] = 0;
            }
            resultArray[i + 1] += Math.floor(resultArray[i] / 10);
            resultArray[i] %= 10;
        }
    }
    resultArray.reverse();
    return resultArray.join('');
}