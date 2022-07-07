//test3

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

}

// check if the game has been won or lost

let checkWin = () => {

}

// listen for the start game button to be pressed

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    console.log('test');
});

// listen for the onscreen keyboard to be clicked

qwerty.addEventListener('click', e => {

});