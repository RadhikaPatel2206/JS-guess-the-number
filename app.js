// Variables declared for the app
var guesses = [];
var correctNumber = 0;

// When window loads initially
window.onload = function() {
    resetGame();
}

// Runs when user clicks Check Me button
checkNumber = () => {
    yourNumber = parseInt(document.getElementById("user-number-guess").value);
    if (!isNaN(yourNumber)) {
        checkResult(yourNumber, correctNumber);
        showHistory(yourNumber);
    }
}

// Runs when user clicks Reset button
resetGame = () => {
    correctNumber = getRandomNumber();
    guesses = [];

    document.getElementById("user-number-guess").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("history").innerHTML = "";
}

// Get random number between 1-100
getRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    return number;
}

// Check user guess and correctNumber and call buildResult accordingly to show result
checkResult = (yourNumber, correctNumber) => {
    let status, text;

    if (yourNumber == correctNumber) {
        status = "success";
        text = "You guessed correct";
    } else {
        status = "danger";
        if (yourNumber < correctNumber) {
            text = "Guess too low";
        } else {
            text = "Guess too high";
        }
    }

    buildResult(status, text);
}

// Display result of checkResult function on FrontEnd
buildResult = (status, text) => {
    const html = `
    <div class="alert alert-${status}">
        ${text}
    </div>
    `;

    document.getElementById("result").innerHTML = html;
}

// Show user guess history on FrontEnd
showHistory = (yourNumber) => {
    let html = "";
    guesses.unshift(yourNumber);
    guesses.forEach((guess) => {
        html += `
        <div class="history-data">
            You guesses ${guess}
        </div>
        `;
    })

    document.getElementById("history").innerHTML = html;
}