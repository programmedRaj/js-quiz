window.addEventListener('load', load);

let time = 5;
var score = 0;
var playState;

var currentWord = document.getElementById('current-word');
var wordInput = document.getElementById('word-input');
const timeLeft = document.querySelector('#time');
var scoreSheet = document.getElementById('score');
var displayState = document.getElementById('message');

var words = ['good', 'bad', 'volvo', 'unicorn' ,'computers','hat',
'river',
'lucky',
'statue',
'generate',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'establishment',
'hero',
'javascript',
'nutrition',
'revolver',
'echo',
'siblings',
'investigate',
'horrendous',
'symptom',
'laughter',
'magic',
'master',
'space',
'definition'];

function load(){

    randomWord(words);
    setInterval('counter()', 1000);
    setInterval('checkStatus()', 50);
    wordInput.addEventListener('input', startMatch);
}

function startMatch(){
    if(matchWords()){
        playState = true;
        time = 5;
        score++;
        randomWord(words);
        wordInput.value = ''

    }
    scoreSheet.innerHTML = score;
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Right!!!';
        return true;
    }
    else{
        message.innerHTML = '';
        return false;
    }
}

function randomWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];


}

function counter(){

    if(time>0){
        time--;
    }
    else if(time === 0){
        playState = false;
    }
    timeLeft.innerHTML = time;

}

function checkStatus(){
    if(playState == false && time == 0){
        displayState.innerHTML = 'Game Over...'
    }
}
