console.log("Hello world")


function getComputerChoice(){
  const answer = ['rock', 'paper', 'scissors'];

  return answer[Math.floor(Math.random() * 3)]
}

function getHumanChoice(){
  let play = prompt("Choose your move  ROCK, PAPER OR SCISSORS");
  play = play.toLocaleLowerCase();
  if (play !== "rock" && play !== "paper" && play!== "scissors" ){
    console.log("jugada invalida:(");
    return null;
  }
  return play;
}

function playRound(humanSelection, computerSelection){
    if (humanSelection === computerSelection) {
    console.log("Empate!");
  } 
  else if (humanSelection == 'rock' && computerSelection == 'scissors')
  {
    console.log('gano el humano');
  }else if (humanSelection == 'paper' && computerSelection == 'rock')
  {
    console.log('gano el humano');
  }else if (humanSelection == 'scissors' && computerSelection == 'paper')
  {
    console.log('gano el humano');
  }else{
    console.log('gano la computadora:(');
  }
}


var humanScore = 0;
var computerScore = 0;
for (let i =0; i < 5; i++)
{
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



playRound(humanSelection, computerSelection);