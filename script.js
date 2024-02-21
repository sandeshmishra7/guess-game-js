let form = document.querySelector('.form');
let input = document.querySelector('.input');
let results = document.querySelector('.results');
let guessData = [];
let guesses = 5;
let num = randomNo();
console.log(num)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    guessTheNumber(num);
    prevGuesses();
    input.value = '';
});

function randomNo() {
    return Math.floor(Math.random() * 20) + 1;
}

function guessTheNumber(randomNumber) {

    let inputVal = parseInt(input.value);

    results.classList.add('para');

    if (inputVal === randomNumber) {
        results.innerHTML = `You guessed it right, the number was ${randomNumber}`;
        document.getElementById('guessPara').style.display = 'none';
        document.querySelector('button').style.display = 'none';
    }

    else if (inputVal < randomNumber) {
        results.innerHTML = `Wrong, Please select a greater number than ${inputVal}`;
        guesses--;
        document.getElementById('guessPara').innerHTML = `You have ${guesses} guesses left`;
        if (guesses === 0) {
            endGame(randomNumber);
        }
    }

    else if (inputVal > randomNumber) {
        results.innerHTML = `Wrong, Please select a smaller number than ${inputVal}`;
        guesses--;
        document.getElementById('guessPara').innerHTML = `You have ${guesses} guesses left`;
        if (guesses === 0) {
            endGame(randomNumber);
        }
    }

    else if (inputVal !== Number) {
        results.innerHTML = `Please enter a valid number`;
    }

    else {
        results.innerHTML = `Wrong, Please select a different number than ${inputVal}`;
        guesses--;
        document.getElementById('guessPara').innerHTML = `You have ${guesses} guesses left`;
        if (guesses === 0) {
            endGame(randomNumber);
        }
    }
}

function prevGuesses() {
    guessData.push(input.value);

    let span = document.querySelector('#span');

    let newGuess = '';

    for (let i = 0; i < guessData.length; i++) {
        newGuess += `${guessData[i]} `;
    }
    span.innerHTML = newGuess;
}

function endGame(correctNumber) {
    results.innerHTML = `You ran out of guesses, The correct number was ${correctNumber}. Try again!`;
    document.querySelector('button').style.display = 'none';
    guesses = 5;
}
