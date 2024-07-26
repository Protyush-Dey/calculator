

function clearScreen() {
    document.getElementById('calculator-screen').value = '';
}

function backspace() {
    let screen = document.getElementById('calculator-screen');
    screen.value = screen.value.slice(0, -1);
}

function appendValue(value) {
    let screen = document.getElementById('calculator-screen');
    screen.value += value;
}

function calculate() {
    let screen = document.getElementById('calculator-screen');
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        alert('Invalid Calculation');
        screen.value = '';
    }
}
