const spanish = {
    "food": "comida",
    "is": "es",
    "my": "mi",
    "only":"único",
    "true": "verdadero",
    "love": "amor"
} ;
const german = {
    "food": "Essen",
    "is": "ist",
    "my": "meine",
    "only":"einzige",
    "true": "wahre",
    "love": "Leibe"
} ;
const italian = {
    "food": "il cibo",
    "is": "è",
    "my": "il mio",
    "only": "unico",
    "true": "vero",
    "love": "amore"
} ;

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = `${stringToPrint} `;
};

const spanishButton = document.getElementById("spanishButton");
const germanButton = document.getElementById("germanButton");
const italianButton = document.getElementById("italianButton");

const spanishTranslate = () => {
    var userInput = document.getElementById('inputText').value;
    var wordList = userInput.split(" ");
    var badWords = '';
    var badWordsSplit = badWords.split(" ");
    var goodWords = '';
    wordList.forEach((word) => {
        if (word in spanish) {
            goodWords += `${spanish[word]} `;
        }else if (!(word in spanish)){
            badWords = `${word}`;     
            badWordsSplit.push(badWords);
            badWordsSplit.forEach((term) => {
                if (term in badWordsSplit) {
                badWordsSplit.pop();
                };
            })
    }
    printToDom(`<div>"${userInput}" translates to: "${goodWords}"</div><br>` + `<div>The following words are not in this Spanish dictionary:</div><br>` + `<div> ${badWords}</div>`, 'emptyDiv');
})
}
const germanTranslate = () => {
    var userInput = document.getElementById('inputText').value;
    var wordList = userInput.split(" ");
    var badWords = '';
    var badWordsSplit = badWords.split(" ");
    var goodWords = '';
    wordList.forEach((word) => {
        if (word in german) {
            goodWords += `${german[word]} `;
        }else if (!(word in german)){
            badWords = `${word}`;     
            badWordsSplit.push(badWords);
            badWordsSplit.forEach((term) => {
                if (term in badWordsSplit) {
                badWordsSplit.pop();
                };
            })
    }
    printToDom(`<div>"${userInput}" translates to: "${goodWords}"</div><br>` + `<div>The following words are not in this German dictionary:</div><br>` + `<div> ${badWords}</div>`, 'emptyDiv');
})
}
const italianTranslate = () => {
    var userInput = document.getElementById('inputText').value;
    var wordList = userInput.split(" ");
    var badWords = '';
    var badWordsSplit = badWords.split(" ");
    var goodWords = '';
    wordList.forEach((word) => {
        if (word in italian) {
            goodWords += `${italian[word]} `;
        }else if (!(word in italian)){
            badWords = `${word}`;     
            badWordsSplit.push(badWords);
            badWordsSplit.forEach((term) => {
                if (term in badWordsSplit) {
                badWordsSplit.pop();
                };
            })
    }
    printToDom(`<div>"${userInput}" translates to: "${goodWords}"</div><br>` + `<div>The following words are not in this Italian dictionary:</div><br>` + `<div> ${badWords}</div>`, 'emptyDiv');
})
}


spanishButton.addEventListener("click", spanishTranslate);
germanButton.addEventListener("click", germanTranslate);
italianButton.addEventListener("click", italianTranslate);