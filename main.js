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
    selectedDiv.innerHTML += `${stringToPrint} `;
};

const spanishButton = document.getElementById("spanishButton");
const germanButton = document.getElementById("germanButton");
const italianButton = document.getElementById("italianButton");


const spanishTranslate = () => {
    var userInput = document.getElementById('inputText').value;
    var wordList = userInput.split(" ");
    let printThis = '';
    wordList.forEach((word) => {
        // printThis += `<div id='emptyDiv' <p>${spanish[word]}</p></div>`;
        // console.log(spanish[word]);
        printToDom(spanish[word], 'emptyDiv');

        // if (userInput === spanish[word]) {
        //     console.log(`Sorry! ${userInput} is not in the spanish dictionary.`);
        // }
    });
}
// let newString = '';
//   for (let i = 0; i < elizabethSanger.images.length; i++) {
//     newString += `<div class="image">`;



spanishButton.addEventListener("click", spanishTranslate);

// function determineTranslation(language)
// {
    
//     //split the user input
//     //
//     var userInput = document.getElementById('inputText').value;
//     for(var i = 0; i < userInput.length; i++)
//     {
//         var compareWord = userInput[i];

//     }
//     userInput.forEach(element => {
//         var compareWord = element.value;
//     });
//     if(language == "spanish")
//     {

//     }
//     else if(language == "german")
//     {

//     }

//     var wordMatch;
//     switch (language)
//     {
//         case "Spanish":
//                 wordMatch = spanish[userInput];
//                 spanish.foreach((word)=> (if (word.name == "hello")))
//                 if(wordMatch == null || wordMatch == "")
//                 {
//                     wordMatch = "No match found";
//                 }

//                 break;
//     }
// }

// spanishButton.addEventListener("click", determineTranslation("Spanish"));