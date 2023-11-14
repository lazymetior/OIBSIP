const tempInput = document.getElementById('tempInput');
const unitSelect = document.getElementById('unitSelect');
const convertButton = document.getElementById('convertButton');
const result = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const inputValue = parseFloat(tempInput.value);

    if (isNaN(inputValue)) {
        result.innerHTML = '<span class="error-message">Please enter a valid number.</span>';
        return;
    }

    const selectedUnit = unitSelect.value;
    let convertedValue = 0;
    let resultUnit = '';

    if (selectedUnit === 'celsius') {
        convertedValue = (inputValue * 9/5) + 32;
        resultUnit = 'Fahrenheit';
    } else if (selectedUnit === 'fahrenheit') {
        convertedValue = (inputValue - 32) * 5/9;
        resultUnit = 'Celsius';
    }

    result.textContent = `${inputValue} ${selectedUnit} is ${convertedValue.toFixed(2)} ${resultUnit}`;
});