/* Use Math.random() * d8 # and then
Math.floor() to turn the result into an integer */
function roll(number) {
    let result = Math.random() * number + 1 + parseFloat(bonus.value);
    result = Math.floor(result);
    document.getElementById("resultDisplay").innerHTML = result;
    bonus.value = 0;
}

function rollMult(num1, num2) {
    let result = 0;
    let rolls = [];
    for (let i = 0; i < num1; i++) {
        rolls.push(Math.random() * num2 + 1);
    }
    for (let j = 0; j < rolls.length; j++) {
        result += rolls[j];
    }
    document.getElementById("resultDisplay").innerHTML = Math.floor(result);
    // TODO: add bonus.value (after finding the issue with inconsistent roll result)
}
