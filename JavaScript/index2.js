function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function calculate() {
    const display = document.getElementById('display');
    const result = eval(display.value);
    display.value = result;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearLastDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}