//  -------------------------------- seleccionamos los botones
let btnRock = document.querySelector("#rock")
let btnPaper = document.querySelector("#paper")
let btnSiccors = document.querySelector("#siccors")

function handleClick(e){
    console.log("it was clicked!", e.target.textContent);
}


btnRock.addEventListener("click", handleClick);
btnPaper.addEventListener("click", handleClick);
btnSiccors.addEventListener("click", handleClick);

function getComputerChoice(){
  const answer = ['rock', 'paper', 'scissors'];

  return answer[Math.floor(Math.random() * 3)]
}

function getHumanChoice(){
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



playRound(humanSelection, computerSelection);