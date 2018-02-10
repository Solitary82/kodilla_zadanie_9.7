var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() {
    "use strict";
    
    playerPick('rock');
});

pickPaper.addEventListener('click', function() {
    "use strict";
    
    playerPick('paper');
});

pickScissors.addEventListener('click', function() {
    "use strict";
    
    playerPick('scissors');
});

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
    "use strict";
    
    switch(gameState) {
        case 'started':
            newGameElem.style.display = "none";
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break; 
        case 'ended':
            newGameBtn.innerText = 'Play again';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    } 
}
setGameElements(gameState);

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    
    "use strict";
    
    player.name = prompt('Please enter your name', 'imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();
        
        playerNameElem.innerHTML = player.name;
    }
}

function playerPick(playerPick) {
    
    "use strict";
    
    console.log(playerPick);
}

function getComputerPick() {
    
    "use strict";
    
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById ('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    
    "use strict";
    
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
    
    "use strict";
    
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';
    
    var winnerIs = 'player';
    
        if (playerPick === computerPick) {
            winnerIs = 'noone';
        } else if (
            (computerPick === 'rock' && playerPick === 'scissors') ||
            (computerPick === 'scissors' && playerPick === 'paper') ||
            (computerPick === 'paper' && playerPick === 'rock')) {
            winnerIs = 'computer';
        }
    
        if (winnerIs = 'player') {
            playerResultElem.innerHTML = 'Win!';
            player.score++;
        } else if (winnerIs = 'computer') {
            computerResultElem.innerHTML = 'Win!';
            computer.score++;
        }
   
        setGamePoints();
}

function playerPick(playerPick) {
    
    "use strict";
    
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}

function gameOver () {
    
    "use strict";
    
    if ( player.score === 10 || computer.score === 10) {
        setGameElements(gameState = 'ended'); 
    } 
}

function setGamePoints() {
    
    "use strict";
    
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
    gameOver();
}