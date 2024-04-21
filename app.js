let result = 0;
bonus.value = 0;

// Generates a random number bwetween num1 (the numberr of dice to throw) and num2 (the value of the di)
function rollDice(num1, num2) {
    for (let i = 0; i < num1; i++) {
        result += Math.floor(Math.random() * num2) + 1;
    }
}

// calls rollDice(), inserting the number of dice (num1) and value (num2)
// and then displays the output in the results display container
function displayRollResults(num1, num2) {
    rollDice(num1, num2) + bonus.value;
    document.getElementById("resultDisplay").innerHTML = result;
    result = 0;
}

// switch between Light and Dark mode
function toggleTheme() { 
    let theme = document.getElementsByTagName('link')[0];
    let img = document.getElementById("theme-img");

    if (theme.getAttribute('href') == 'light-mode.css') { 
        theme.setAttribute('href', 'dark-mode.css');
        img.setAttribute('src', 'light.png');
    } else { 
            theme.setAttribute('href', 'light-mode.css');
        img.setAttribute('src', 'dark.png');

    }
}
     