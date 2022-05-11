/* Use Math.random() * d8 # and then
Math.floor() to turn the result into an integer */
function roll(number) {
    let result = Math.random() * number + 1;
    result = Math.floor(result);
    document.getElementById("resultDisplay").innerHTML = result;
}

