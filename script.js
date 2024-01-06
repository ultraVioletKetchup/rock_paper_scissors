
const moves = ['rock','paper','scissors'];

function getComputerChoice(){

    const randomIndex = Math.floor(Math.random() * 3);

    const randomMove = moves[randomIndex];

    return randomMove;

}

function getPlayerChoice(){
    let playerChoice = '';
    while (!moves.includes(playerChoice)){
        playerChoice = prompt("Your move, move, move...", "").toLowerCase();
    }
    return playerChoice;
}


function roundOfGame(playersSel, computersSel) {

    if (!moves.includes(playersSel) || !moves.includes(computersSel))
        return "Invalid Selection";

    if (playersSel === computersSel){
        return 'Tie';
    }

    const win = (playersSel === 'paper' && computersSel === 'rock') || (playersSel === 'rock' && computersSel === 'scissors') || (playersSel === 'scissors' && computersSel === 'paper');

    // const lose = (playersSel === 'rock' && computersSel === 'paper') || (playersSel === 'scissors' && computersSel === 'rock') || (playersSel === 'paper' && computersSel === 'scissors');

    if (win) 
        return 'Win! ' + playersSel + ' beats ' + computersSel + ' !';
    else
        return 'Lose ' + playersSel + ' beaten by ' + computersSel + ' !';

}

function playRound(){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    console.log(roundOfGame(playerChoice, computerChoice));
}
    

function game(){
    for (let i = 0; i < 5; i++){
        while (playRound() == 'Tie');
    }
}

  
game();