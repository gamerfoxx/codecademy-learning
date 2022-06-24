const Calculate = {
	sum(inputArray) {
    let totalSum = 0;
    totalSum = inputArray.reduce((previousValue, currentValue) => previousValue + currentValue);
    return totalSum;
	}
}

module.exports = Calculate;