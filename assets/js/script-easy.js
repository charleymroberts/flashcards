let fruitDictionary = [
    {lang1: "strawberry", lang2: "la fraise"},
    {lang1: "raspberry", lang2: "la framboise"},
    {lang1: "peach", lang2: "la peche"},
    {lang1: "blueberry", lang2: "la myrtille"},
    {lang1: "apple", lang2: "la pomme"},
    {lang1: "pear", lang2: "la poire"},
    {lang1: "cherry", lang2: "la cerise"},
    {lang1: "grape", lang2: "le raisin"},
    {lang1: "plum", lang2: "la prune"},
    {lang1: "raisin", lang2: "le raisin sec"},
]

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

runMultipleChoice();

let score = 0;
let questionsAsked = 1;
let questionsInTotal = 10;

function checkAnswer() {
    let userInput = this.textContent;
    let rightAnswer = fourChoices[questionPair].lang1;
    if (String(userInput) === String(rightAnswer)) {
        score += 1;
        document.getElementById('correct-answers').textContent = score;
        alert("Yay, you got it right");
    } else {
        alert(`You said ${userInput}. The computer said... ${rightAnswer}.`);
    }

    questionsAsked += 1;
    document.getElementById('current-question-number').textContent = questionsAsked;

    if (questionsAsked > (questionsInTotal)) {
        gameOver();
    }

    runMultipleChoice()
}

let answerButtons = document.getElementsByClassName('answer-button');
for (let ansbutton of answerButtons) {
    ansbutton.addEventListener('click', checkAnswer);
}

function gameOver() {
    alert(`Game over! You answered ${score} questions correctly`);
    score = 0;
    document.getElementById('correct-answers').textContent = score;
    questionsAsked = 1;
    document.getElementById('current-question-number').textContent = questionsAsked;
    runMultipleChoice();
}