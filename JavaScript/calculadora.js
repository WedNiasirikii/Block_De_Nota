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
document.addEventListener("DOMContentLoaded", function () {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("click", function () {
            checkboxes.forEach(function (cb) {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var checkboxClaro = document.getElementById("checkboxClaro");
    var section2 = document.querySelector(".section2");
    var calculator = document.querySelector(".calculator");
    var display = document.querySelector("#display");
    var operadores = document.querySelectorAll(".operador");
    var digito = document.querySelectorAll(".digito");
    var titulo = document.querySelector("#TituloP");
    var selectorOpciones = document.querySelectorAll(".SelectorModeOpcions");

    checkboxClaro.addEventListener("change", function () {
        if (checkboxClaro.checked) {
            section2.style.backgroundColor = "#ffffff";
            calculator.style.backgroundColor = "#fffdfb";
            display.style.backgroundColor = "#8b88845e";
            operadores.forEach(function (operador) {
                operador.style.backgroundColor = "#b73b9b";
            });
            digito.forEach(function (digito) {
                digito.style.backgroundColor = "#74aeb1";
            });
            titulo.style.color = "#000000";
            selectorOpciones.forEach(function (opcion) {
                opcion.style.backgroundColor = "#b73b9b";
            });
            selectorOpciones.forEach(function (opcion) {
                opcion.style.color = "#ffffff";
            });

        } else {
            section2.style.backgroundColor = "#203435";
            calculator.style.backgroundColor = "#a39082";
            display.style.backgroundColor = "#baaea2";
            operadores.forEach(function (operador) {
                operador.style.backgroundColor = "#658963";
            });
            digito.forEach(function (digito) {
                digito.style.backgroundColor = "#a5ba80";
            });
            titulo.style.color = "#ffffff";
            selectorOpciones.forEach(function (opcion) {
                opcion.style.backgroundColor = "#658963";
            });
            selectorOpciones.forEach(function (opcion) {
                opcion.style.color = "#ffffff";
            });

        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var checkboxClaro = document.getElementById("checkboxNormal");
    var section2 = document.querySelector(".section2");
    var calculator = document.querySelector(".calculator");
    var display = document.querySelector("#display");
    var operadores = document.querySelectorAll(".operador");
    var digito = document.querySelectorAll(".digito");
    var selectorOpciones = document.querySelectorAll(".SelectorModeOpcions");
    var titulo = document.querySelector("#TituloP");

    checkboxClaro.addEventListener("change", function () {
        if (checkboxClaro.checked) {
            section2.style.backgroundColor = "#203435";
            calculator.style.backgroundColor = "#a39082";
            display.style.backgroundColor = "#baaea2";
            operadores.forEach(function (operador) {
                operador.style.backgroundColor = "#658963";
            });
            digito.forEach(function (digito) {
                digito.style.backgroundColor = "#a5ba80";
            });
            selectorOpciones.forEach(function (opcion) {
                opcion.style.backgroundColor = "#658963";
                opcion.style.color = "#ffffff";
            });
            titulo.style.color = "#ffffff";
        } else {
            section2.style.backgroundColor = "";
            calculator.style.backgroundColor = "";
            display.style.backgroundColor = "";
            operadores.forEach(function (operador) {
                operador.style.backgroundColor = "";
            });
            digito.forEach(function (digito) {
                digito.style.backgroundColor = "";
            });
            selectorOpciones.forEach(function (opcion) {
                opcion.style.backgroundColor = "";
                opcion.style.color = "";
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var checkboxClaro = document.getElementById("checkboxOscuro");
    var section2 = document.querySelector(".section2");
    var calculator = document.querySelector(".calculator");
    var display = document.querySelector("#display");
    var operadores = document.querySelectorAll(".operador");
    var digito = document.querySelectorAll(".digito");
    var titulo = document.querySelector("#TituloP");
    var selectorOpciones = document.querySelectorAll(".SelectorModeOpcions");

    checkboxClaro.addEventListener("change", function () {
        if (checkboxClaro.checked) {
            section2.style.backgroundColor = "#000000";
            calculator.style.backgroundColor = "#181717";
            display.style.backgroundColor = "#baaea2";
            operadores.forEach(function (operador) {
                operador.style.backgroundColor = "#b73b9b";
            });
            digito.forEach(function (digito) {
                digito.style.backgroundColor = "#626767";
            });
            selectorOpciones.forEach(function (opcion) {
                opcion.style.backgroundColor = "#181717";
                opcion.style.color = "#ffffff";
            });
            titulo.style.color = "#ffffff";
        } else {
            section2.style.backgroundColor = "#203435";
            calculator.style.backgroundColor = "#a39082";
            display.style.backgroundColor = "#baaea2";
            operadores.forEach(function (operador) {
                operador.style.backgroundColor = "#658963";
            });
            digito.forEach(function (digito) {
                digito.style.backgroundColor = "#a5ba80";
            });
            selectorOpciones.forEach(function (opcion) {
                opcion.style.backgroundColor = "#658963";
                opcion.style.color = "#ffffff";
            });
            titulo.style.color = "#ffffff";
        }
    });
});
