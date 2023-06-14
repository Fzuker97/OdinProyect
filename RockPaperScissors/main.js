const imgBtn = document.querySelectorAll('div.imgBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');


resetBtn.addEventListener('click',() => location.reload());


imgBtn.forEach(button => {button.addEventListener('click', getPlayerChoice) });

let computerChoices = [{choice: 'Bulbasaur', value: 0}, {choice: 'Charmander', value: 1}, {choice: 'Squirtle', value: 2}];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function computerPlay() {
    let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return result;
}

function playRound(playerSelection, computerSelection){
    let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
    let playerWinCombo = ['1-0', '0-2', '2-1'];

    if(Number(playerSelection) === computerSelection.value){
        playerPoints.textContent = ++playerScore
        computerPoints.textContent = ++compScore
        roundResults.textContent = "Tie!"
    }else if(playerWinCombo.includes(roundWinCombo)){
        playerPoints.textContent = ++playerScore
        roundResults.textContent = `You Win! ${playerChoice} beats ${computerSelection.choice}`;
    }else {
        computerPoints.textContent = ++compScore
        roundResults.textContent = `You Lose! ${computerSelection.choice} beats ${playerChoice}`;
    }
    checkWinner();
}

const winnerResults ={
    computer: ["You Lost the game to a computer!", 'red'],
    player: ["You Win the game!!!!", 'green'],
    tie: ["The game is a Tie!", 'Yellow']
  }

  function checkWinner(){
    if(compScore === 5 || playerScore === 5){
        if(compScore === playerScore){
            updateWinner('tie')
        }else {
            let win = `${(compScore > playerScore) ? 'computer' : 'player'}`;
            updateWinner(win);
        }
    }
  }

  function updateWinner(winner){
    roundResults.textContent = winnerResults[winner][0];
    roundResults.style.color = winnerResults[winner][1];

    imgBtn.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
    });
  }

  function getPlayerChoice(e){
    let playerSelection = (e.target.id);
    playerChoice = e.target.textContent;
    playRound(playerSelection, computerPlay());
  }