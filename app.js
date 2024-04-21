let result = 0;
bonus.value = 0;

function rollDice(num1, num2) {
    for (let i = 0; i < num1; i++) {
        result += Math.floor(Math.random() * num2) + 1;
    }
}


function displayRollResults(num1, num2) {
    rollDice(num1, num2) + bonus.value;
    document.getElementById("resultDisplay").innerHTML = result;
    result = 0;
}