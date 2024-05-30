const display = document.getElementById("display");

function appendToDisplay(element) {
    display.value += element;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/x/g, '×').replace(/÷/g, '÷'));
    } catch (error) {
        display.value = "Error";
    }
}


function flipDisplay()
{

}