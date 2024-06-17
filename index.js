const display = document.getElementById("display");
let isRadian = true;
let history = [];

function appendToDisplay(element) {
    display.value += element;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Log the expression being evaluated
        console.log("Expression: ", display.value);
        const result = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
        display.value = result;
        history.push(display.value);
        updateHistory();
    } catch (error) {
        console.error("Calculation error: ", error);
        display.value = "Error";
    }
}

function toggleMode() {
    const basicKeys = document.getElementById('keys-basic');
    const scientificKeys = document.getElementById('keys-scientific');
    if (basicKeys.classList.contains('d-none')) {
        basicKeys.classList.remove('d-none');
        scientificKeys.classList.add('d-none');
    } else {
        basicKeys.classList.add('d-none');
        scientificKeys.classList.remove('d-none');
    }
}

function switchDegreeRadian() {
    const radButton = document.querySelector('#keys-scientific .btn-warning');
    isRadian = !isRadian;
    radButton.textContent = isRadian ? "RAD" : "DEG";
}

function showHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.classList.toggle('d-none');
}

function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = "";
    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${index + 1}: ${item}`;
        historyList.appendChild(li);
    });
}
