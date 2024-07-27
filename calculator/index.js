

const display = document.getElementById("display");

function appendToDisplay(input)
{
    display.value += input;
}

function clearN()
{
    display.value = "";
}

function calculate()
{
    display.value = eval(display.value);
}