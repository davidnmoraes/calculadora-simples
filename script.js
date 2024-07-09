let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function deleteult() {
    display.value = '';
}

function reiniciar() {
    display.value = '';
}

function deletenum() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = '[Erro!]';
    }
}

function invertersinal() {
    if (display.value) {
        display.value = String(-parseFloat(display.value));
    }
}