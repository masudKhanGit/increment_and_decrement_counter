/**
 * Date: 23-12-2021
 * Author: Masud Khan
 * Description: Counter Application
 */

// Globals
let result = 0;

// onload function
window.onload = () => {
    main();
}

// main or boot function
function main() {
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const incrementInput = document.getElementById('increment-Inp');
    const decrementInput = document.getElementById('decrement-Inp');
    const showOutput = document.getElementById('show-Output');

    displayOutput(showOutput);
    incrementBtn.addEventListener('click', handleIncrementBtn(incrementInput, showOutput));
    decrementBtn.addEventListener('click', handleDecrementBtn(decrementInput, showOutput));
    incrementInput.addEventListener('keyup', handleInputs);
    decrementInput.addEventListener('keyup', handleInputs);

}

// event handler
function handleInputs(e) {
    if(parseInt(e.target.value) > 100) {
        e.target.value = 100;
    }
    if(parseInt(e.target.value) < 0) {
        e.target.value = 0;
    }
}

function handleIncrementBtn(incrementInput, showOutput) {
    return function() {
        const increment = parseInt(incrementInput.value);
        result += increment;
        displayOutput(showOutput)
    }
}

function handleDecrementBtn(decrementInput, showOutput) {
    return function() {
        const decrement = parseInt(decrementInput.value);
        result -= decrement;
        displayOutput(showOutput);
    }    
}

// DOM functions

// Utils function
function displayOutput(output) {
    if(result < 0) {
        result = 0;
        alert('Result can not be negative number');
    }
    let finalResult = result;
    if(result < 10)
    finalResult = `0${result}`;
    output.innerText = finalResult;
}
