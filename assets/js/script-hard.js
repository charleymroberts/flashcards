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

let wordPair;
let question;

function displayQuestion() {
    let iNumber = Math.floor(Math.random() * fruitDictionary.length);
    wordPair = fruitDictionary[iNumber];
    question = wordPair.lang2;
    document.getElementById('question-text').textContent = question;
}

document.addEventListener("DOMContentLoaded", function() {
     displayQuestion();
     document.getElementById('user-answer').focus();
     document.getElementById('user-answer').addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                checkAnswer();
            }
        })
     document.getElementById("submit").addEventListener("click", checkAnswer);
}
)

function checkAnswer() {
    let userInput = document.getElementById('user-answer').value;
    let userInputLowerCase = userInput.toLowerCase();
    let rightAnswer = wordPair.lang1;
    if (String(userInputLowerCase) === String(rightAnswer)) {
        alert("Yay, you got it right");
    } else {
        alert(`You said ${userInput}. The computer said... ${rightAnswer}.`);
    }
    displayQuestion();
}