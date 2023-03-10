// displays game info to user 

let language = "French";
document.getElementById('language').textContent = language;
let gameTitle = "fruits";
document.getElementById('game-title').textContent = gameTitle;
let gameMode = "easy";
document.getElementById('game-mode').textContent = gameMode;

/**
 * selects four entries to display as multiple choice answers and selects one of the four 
 * to display as the question
*/

let fourChoices = [];
let questionPair;

function runMultipleChoice() {
    let num;
    let wordPair;
    fourChoices.length = 0;
    while (fourChoices.length < 4) {
        num = Math.floor(Math.random() * fruitDictionary.length);
        wordPair = fruitDictionary[num];
        if (fourChoices.includes(wordPair)) {
            continue;
        } else {
            fourChoices.push(wordPair);
        }
    }

    questionPair = Math.floor(Math.random() * 4);

    let questionDisplayed = fourChoices[questionPair].lang2;
    document.getElementById('question-text').textContent = questionDisplayed;

    document.getElementById('answer1').textContent = fourChoices[0].lang1;
    document.getElementById('answer2').textContent = fourChoices[1].lang1;
    document.getElementById('answer3').textContent = fourChoices[2].lang1;
    document.getElementById('answer4').textContent = fourChoices[3].lang1;
}

//loads the game initially

runMultipleChoice();

/**
 * checks if the user's answer is correct, increments score and number of questions asked so far,
 * ends the game after the specified number of questions has been asked
 */

let score = 0;
let questionsAsked = 1;
let questionsInTotal = 10;

document.getElementById('total').textContent = questionsInTotal;

function checkAnswer() {
    let userInput = this.textContent;
    let rightAnswer = fourChoices[questionPair].lang1;
    if (String(userInput) === String(rightAnswer)) {
        score += 1;
        document.getElementById('correct-answers').textContent = score;
        alert("Yay, you got it right!");
    } else {
        alert(`You chose: ${userInput}. The correct answer is: ${rightAnswer}. Keep trying!`);
    }

    questionsAsked += 1;
    document.getElementById('current-question-number').textContent = questionsAsked;

    if (questionsAsked > (questionsInTotal)) {
        gameOver();
    }

    runMultipleChoice();
}

//listens for the user selecting an answer

let answerButtons = document.getElementsByClassName('answer-button');
for (let ansbutton of answerButtons) {
    ansbutton.addEventListener('click', checkAnswer);
}

//ends the game, displays the number of correct answers and resets the game

function gameOver() {
    alert(`Game over! You answered ${score} questions correctly`);
    score = 0;
    document.getElementById('correct-answers').textContent = score;
    questionsAsked = 1;
    document.getElementById('current-question-number').textContent = questionsAsked;
    runMultipleChoice();
}