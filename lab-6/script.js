document.getElementById('sortButton').addEventListener('click', function() {
    const inputArray = document.getElementById('arrayInput').value.split(',').map(Number);
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray.length - i - 1; j++) {
            if (inputArray[j] > inputArray[j + 1]) {
                let temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
            }
        }
    }
    document.getElementById('result').textContent = inputArray.join(', ');
});

document.getElementById('minButton').addEventListener('click', function() {
    const inputArray = document.getElementById('arrayInput').value.split(',').map(Number);
    let minValue = Math.min(...inputArray);
    document.getElementById('minResult').textContent = minValue;
});

document.getElementById('maxButton').addEventListener('click', function() {
    const inputArray = document.getElementById('arrayInput').value.split(',').map(Number);
    let maxValue = Math.max(...inputArray);
    document.getElementById('maxResult').textContent = maxValue;
});
