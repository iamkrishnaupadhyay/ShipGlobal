let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

const userGuessInput = document.getElementById("userGuess");
const submitGuessButton = document.getElementById("submitGuess");
const feedbackElement = document.getElementById("feedback");
const attemptsLeftElement = document.getElementById("attemptsLeft");
const restartGameButton = document.getElementById("restartGame");

submitGuessButton.addEventListener("click", function () {
    const userGuess = parseInt(userGuessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackElement.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        feedbackElement.textContent = `Correct! You guessed the number in ${5 - attemptsLeft} attempts.`;
        feedbackElement.classList.remove("end-message");
        submitGuessButton.disabled = true;
        userGuessInput.disabled = true;
    } else if (attemptsLeft === 0) {
        feedbackElement.textContent = "Your attempts are over. Game over!";
        feedbackElement.classList.add("end-message");
        submitGuessButton.disabled = true;
        userGuessInput.disabled = true;
    } else {
        feedbackElement.textContent = userGuess > randomNumber ? "Too high! Think Small number" : "Too low! Think Big number";
        feedbackElement.classList.remove("end-message");
    }

    attemptsLeftElement.textContent = `Attempts left: ${attemptsLeft}`;
});

restartGameButton.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 5;
    userGuessInput.value = "";
    feedbackElement.textContent = "";
    attemptsLeftElement.textContent = `Attempts left: ${attemptsLeft}`;
    submitGuessButton.disabled = false;
    userGuessInput.disabled = false;
});
