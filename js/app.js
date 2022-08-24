let buttonParameter = document.querySelector('button');
let startOverlay = document.querySelector('h2.title');
let liClassNameLetter = document.querySelectorAll('li.letter');
let liClassNameShow = document.querySelectorAll('li.show');
let missed = 0;
let overlay = document.querySelector('#overlay');
let phrase = document.querySelector('#phrase');
let phrases = [
    'i can bring you in warm or i can bring you in cold',
    'maybe the force be with you',
    'this is the way',
    'i have spoken',
    'never tell me the odds'
];
let chosenPhrase = phrases[Math.floor(Math.random() * phrases.length)];
let qwerty = document.querySelector('#qwerty');
let startButton = document.querySelector('.btn__reset');

// return a random phrase from an array

let getRandomPhraseAsArray = arr => {
        return phrases[i];
}

// adds the letters of a string to the display

let addPhraseToDisplay = arr => {
    for (let i = 0; i < chosenPhrase.length; i++) {
        let listLi = [
            chosenPhrase[i]
        ];
        listLi.append(chosenPhrase);
    }
    if (listLi) {
        listLi.className = 'letter';
    }
    else {
        listLi.className = 'space';
    }
}

// check if a letter is in the phrase

let checkLetter = button => {
    let checkLetter = document.querySelectorAll('li');
    let match = null;

    for (let i = 0; i < checkLetter.length; i++) {
        if (buttonParameter.textContent == checkLetter[i].textContent) {
            checkLetter[i].className = 'show';
            match = buttonParameter.textContent;
        }
        return match;
    }

    // let li = ;
}

// check if the game has been won or lost

let checkWin = () => {
    
    if (liClassNameShow.length = liClassNameLetter.length) {
        overlay.className = 'win';
        startOverlay.textContent = 'You Won!';
        overlay.style.display = 'flex';
    }
    else if (missed > 4) {
        overlay.className = 'lose';
        startOverlay.textConent ='You Lost!';
        overlay.style.display = 'flex';
    }

}

// listen for the start game button to be pressed

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    console.log('test');
    startButton.className = 'chosen';
});

// listen for the onscreen keyboard to be clicked

qwerty.addEventListener('click', e => {
    if (buttonParameter.className != 'chosen' && buttonParameter.click()) {
        buttonParameter.className = 'chosen';
        let letter = checkLetter();
    }

    e.stopPropagation();
});