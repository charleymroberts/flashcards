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

