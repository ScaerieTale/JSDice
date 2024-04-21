/* Use Math.random() * d8 # and then
Math.floor() to turn the result into an integer */
function roll(number) {
    let result = Math.random() * number + 1 + parseFloat(bonus.value);
    result = Math.floor(result);
    document.getElementById("resultDisplay").innerHTML = result;
    bonus.value = 0;
}

