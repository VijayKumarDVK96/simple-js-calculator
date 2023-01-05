let display = document.getElementById('result');
let input = 0;

/*
01 - Create a function, if first inputted numbers display in the screen and coming up next append it to the screen
*/

function type(el) {
    if (input == 0) {
        input = el.innerText;
    } else {
        input += el.innerText;
    }

    display.innerText = input;
}

/*
02 - Clear button - Reset the screen to 0 and input value to 0
*/

document.getElementById("clear").addEventListener('click', function () {
    display.innerText = 0;
    input = 0;
});

/*
03 - By clicking equal, will evaluate the arithmetic operations, if it is not a number or infinity then should display as Math error, else if the result has more decimal numbers round off maximum to 15 and display to the screen, else display the result to the screen
*/

document.getElementById("equal").addEventListener('click', function () {
    let result = 0;
    result = eval(display.innerText);
    
    if (isNaN(result) || result == 'Infinity') {
        display.innerText = 'Math Error';
    } else {
        result = (result % 1 === 0) ? result : result.toFixed(15);
        display.innerText = result;
    }


    input = result;
});

/*
04 - Delete button delete the last digit of the displayed number and append it back to the screen
*/

document.getElementById("delete").addEventListener('click', function () {
    display = document.getElementById('result');
    result = display.innerText.slice(0, -1);
    display.innerText = result;
    input = result;
});