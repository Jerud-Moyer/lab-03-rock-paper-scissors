// import functions and grab DOM elements
import { getRandomThrow } from './rpsUtils.js';
import { checkResult } from './rpsUtils.js';
const playButton = document.querySelector('#play-button');
const resetButton = document.querySelector('#reset-button');
const results = document.querySelector('#result');
const wins = document.querySelector('#win-tally');
const losses = document.querySelector('#loss-tally');
const draws = document.querySelector('#draw-tally');







// initialize state
let winsData = 0;
let lossData = 0;
let drawsData = 0;




// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const playerInfo = document.querySelector('input:checked');
    const player = playerInfo.value;
    const computer = getRandomThrow();
    const result = checkResult(player, computer);
    
    if (result === 'win') {
        winsData ++;
        results.textContent = ('You have WON!');
        wins.textContent = 'you have ' + winsData + ' wins!';
        playButton.textContent = 'Try again!';
        
    }
    if (result === 'loss') {
        lossData ++;
        results.textContent = 'You LOSE!';
        losses.textContent = 'You have ' + lossData + ' losses. wah wah';
        playButton.textContent = 'Try again!';
    }
    if (result === 'draw') {
        drawsData ++;
        results.textContent = 'It looks like a draw, how boring';
        draws.textContent = 'You have bored me ' + drawsData + ' times.';
        playButton.textContent = 'Try again';
    }
});

resetButton.addEventListener('click', () => {
    winsData = 0;
    lossData = 0;
    drawsData = 0;
    wins.textContent = null;
    losses.textContent = null;
    draws.textContent = null;
    results.textContent = null;
    playButton.textContent = 'Go ahead \'n try!';

});