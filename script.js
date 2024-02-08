function domSetup(score) {
    let rock = document.createElement("button");
    let paper = document.createElement("button");
    let scissors = document.createElement("button");

    rock.textContent = "ROCK";
    paper.textContent = "PAPER";
    scissors.textContent = "SCISSORS";


    let buttonList = [rock, paper, scissors];

    buttonList.forEach((button, index) => {
        button.style.height = "50px";
        button.style.width = "150px";
        button.style.padding = "10px";
        button.style.margin = "10px";
    });




    rock.addEventListener("click", function() {
        alert("rock clicked!");
        playRound('rock', score);
        scoreCheck(score);
    });

    paper.addEventListener("click", function() {
        alert("paper clicked!");
        playRound('paper', score);
        scoreCheck(score);
        
    });

        scissors.addEventListener("click", function() {
        alert("scissors clicked!");
        playRound('scissors', score);
        scoreCheck(score);
    });

    var displayDiv = document.createElement("div");

    displayDiv.id = "displayDiv";

    // Append the div to the body of the document
    document.body.appendChild(displayDiv);

    displayDiv.appendChild(rock);
    displayDiv.appendChild(paper);
    displayDiv.appendChild(scissors);

};


function scoreCheck(score){
    if (score[0] === 5)
        console.gamelog("Player Won!");
    else if (score[1] == 5)
        console.gamelog("CPU Won!");

    let someoneWon = score[0] === 5 || score[1] === 5;

    if (someoneWon){
        score[0] = 0;
        score[1] = 0;
    }
}


// Create a new fxn for console called gamelog that writes input to DOM 
console.gamelog = function(message) {
    // Create a new paragraph element
    var paragraph = document.createElement("p");

    // Set the text content of the paragraph to the console log message
    paragraph.textContent = message;

    // Append the paragraph to the log container
    document.getElementById("logContainer").appendChild(paragraph);
  };


const moves = ['rock','paper','scissors'];

function getComputerChoice(){

    const randomIndex = Math.floor(Math.random() * 3);

    const randomMove = moves[randomIndex];

    return randomMove;

}

function roundOfGame(playersSel, computersSel, score) {
    if (!moves.includes(playersSel) || !moves.includes(computersSel))
        return "Invalid Selection";

    if (playersSel === computersSel){
        return 'Tie';
    }

    const win = (playersSel === 'paper' && computersSel === 'rock') || (playersSel === 'rock' && computersSel === 'scissors') || (playersSel === 'scissors' && computersSel === 'paper');

    // const lose = (playersSel === 'rock' && computersSel === 'paper') || (playersSel === 'scissors' && computersSel === 'rock') || (playersSel === 'paper' && computersSel === 'scissors');

    if (win){
        score[0] += 1;     
    }      
    else {
        score[1] += 1;
    }

    return `Player has ${score[0]} points, AI has ${score[1]} points`;
}

function playRound(playerChoice, score){
    let _playerChoice = playerChoice;
    let _computerChoice = getComputerChoice();

    console.gamelog(roundOfGame(_playerChoice, _computerChoice, score));
}
    

function game(){

    let score = [0,0];
    domSetup(score);
    
}

  
game();



