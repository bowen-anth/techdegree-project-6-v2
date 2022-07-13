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
let qwerty = document.querySelector('#qwerty');
let startButton = document.querySelector('.btn__reset');

// return a random phrase from an array

let getRandomPhraseAsArray = arr => {
        return phrases[Math.floor(Math.random() * phrases.length)];
}

// adds the letters of a string to the display

let addPhraseToDisplay = arr => {

}

// check if a letter is in the phrase

let checkLetter = button => {
    //store li elements here
    let checkLetter = document.querySelectorAll('li');
    let match = 0;

    for (let i = 0; i < checkLetter.length; i++) {
        if (buttonParameter.textContent == checkLetter[i]) {
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

});