//array of questions and answer dictionaries

let fruitDictionary = [
    {lang1: "strawberry", lang2: "la fraise"},
    {lang1: "raspberry", lang2: "la framboise"},
    {lang1: "peach", lang2: "la pêche"},
    {lang1: "blueberry", lang2: "la myrtille"},
    {lang1: "apple", lang2: "la pomme"},
    {lang1: "pear", lang2: "la poire"},
    {lang1: "cherry", lang2: "la cerise"},
    {lang1: "grape", lang2: "le raisin"},
    {lang1: "plum", lang2: "la prune"},
    {lang1: "raisin", lang2: "le raisin sec"},
    {lang1: "banana", lang2: "la banane"},
    {lang2: "pineapple", lang2: "l'ananas"}
]

// displays game info to user  

let language = "French"
document.getElementById('language').textContent = language;
let gameTitle = "fruits"
document.getElementById('game-title').textContent = gameTitle;
let gameMode = "hard"
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
        })
     document.getElementById("submit-arrow").addEventListener("click", checkAnswer);
}
)

// checks answer and increments score and number of questions asked  

let score = 0;
let questionNumber = 1;
let questionsInTotal = 10;

document.getElementById('total').textContent = questionsInTotal;

function checkAnswer() {
    let userInput = document.getElementById('user-answer').value;
    let userInputLowerCase = userInput.toLowerCase();
    let rightAnswer = wordPair.lang1;
    if (String(userInputLowerCase) === String(rightAnswer)) {
        alert("Yay, you got it right!");
        score += 1;
        document.getElementById('correct-answers').textContent = score;
    } else {
        alert(`You answered ${userInput}. The correct answer is: ${rightAnswer}. Keep trying!`);
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
    questionsInTotal = 1;
    document.getElementById('current-question-number').textContent = questionsInTotal;
    displayQuestion();
}

