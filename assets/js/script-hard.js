// displays game info to user  

let language = "French";
document.getElementById('language').textContent = language;
let gameTitle = "fruits";
document.getElementById('game-title').textContent = gameTitle;
let gameMode = "hard";
document.getElementById('game-mode').textContent = gameMode;

// selects question word 

let wordPair;
let question;

function displayQuestion() {
    let iNumber = Math.floor(Math.random() * fruitDictionary.length);
    wordPair = fruitDictionary[iNumber];
    question = wordPair.lang2;
    document.getElementById('question-text').textContent = question;
}

// event listener for user submitting an answer and to load game when page is first displayed

document.addEventListener("DOMContentLoaded", function() {
     displayQuestion();
     document.getElementById('user-answer').focus();
     document.getElementById('user-answer').addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                checkAnswer();
            }
        });
     document.getElementById("submit-button").addEventListener("click", checkAnswer);
}
);

// checks answer and increments score and number of questions asked  

let score = 0;
let questionNumber = 1;
let questionsInTotal = 10;

document.getElementById('total').textContent = questionsInTotal;

function checkAnswer() {
    let userInput = document.getElementById('user-answer').value;
    let userInputLowerCase = userInput.toLowerCase().trim();
    let rightAnswer = wordPair.lang1;
    if (String(userInputLowerCase) === String(rightAnswer)) {
        alert("Yay, you got it right!");
        score += 1;
        document.getElementById('correct-answers').textContent = score;
    } else {
        alert(`You answered: ${userInput}. The correct answer is: ${rightAnswer}. Keep trying!`);
    }
    questionNumber += 1;
    document.getElementById('current-question-number').textContent = questionNumber;
    document.getElementById('user-answer').value = "";
    document.getElementById('user-answer').focus();

    if (questionNumber > (questionsInTotal)) {
        gameOver();
    }

    displayQuestion();
}

// ends game after specified number of questions have been asked and reloads the game

function gameOver() {
    alert(`Game over! You answered ${score} questions correctly`);
    score = 0;
    document.getElementById('correct-answers').textContent = score;
    questionNumber = 1;
    document.getElementById('current-question-number').textContent = questionNumber;
    displayQuestion();
}

