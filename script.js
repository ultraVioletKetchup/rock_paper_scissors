
const moves = ['rock','paper','scissors'];

function getComputerChoice(){

    const randomIndex = Math.floor(Math.random() * 3);

    const randomMove = moves[randomIndex];

    return randomMove;

}


function roundOfGame(playersSel, computersSel) {

    //playersSel = playersSel.toLowerCase();

    console.log(playersSel);

    if (!moves.includes(playersSel) || !moves.includes(computersSel))
        return "Invalid Selection";

    if (playersSel === computersSel){
        return 'Tie';
    }

    const win = (playersSel === 'paper' && computersSel === 'rock') || (playersSel === 'rock' && computersSel === 'scissors') || (playersSel === 'scissors' && computersSel === 'paper');

    const lose = (playersSel === 'rock' && computersSel === 'paper') || (playersSel === 'scissors' && computersSel === 'rock') || (playersSel === 'paper' && computersSel === 'scissors');
    
    if (win)
        return "You win! " + playersSel + " beats " + computersSel;

    if (lose)
        return "You lose! " + computersSel + " beats " + playersSel;

}

  

console.log(roundOfGame('scissors','rock'));