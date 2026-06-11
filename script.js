const display = document.getElementById("display");

function appendToDisplay(input) {

    const lastChar = display.value.slice(-1);
    const operator = ["+", "-", "*", "/", "%"];

    if (operator.includes(input)) {

        if (operator.includes(lastChar)) {
            display.value = display.value.slice(0, -1) + input;
            return;
        }
    }
    display.value += input;
}

function allClear() {
    display.value = "";
}

//还没写, 不知道怎么写
function clearEntry() {
    display.value = "";
}

function backspaceDisplay() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    if (display.value === "") {
        return;
    }

    try {
        display.value = eval(display.value);
    } 
    
    catch (error) {
        display.value = "Error";
    }
}

