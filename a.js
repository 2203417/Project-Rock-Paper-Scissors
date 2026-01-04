//  -------------------------------- seleccionamos los botones
let btnRock = document.querySelector("#rock")
let btnPaper = document.querySelector("#paper")
let btnSiccors = document.querySelector("#siccors")
let display = document.querySelector(".displayResult");

function handleClick(e){
    console.log("it was clicked!", e.target.textContent);
    playRound(e.target.dataset.value,getComputerChoice());
}

console.log(btnRock, btnPaper, btnSiccors);


btnRock.addEventListener("click", handleClick);
btnPaper.addEventListener("click", handleClick);
btnSiccors.addEventListener("click", handleClick);

function getComputerChoice(){
  const answer = ['rock', 'paper', 'scissors'];

  return answer[Math.floor(Math.random() * 3)]
}


function playRound(humanSelection, computerSelection){
    if (humanSelection === computerSelection) {
    console.log("Empate!");
    display.textContent = "Empate!";
  } 
  else if (humanSelection == 'rock' && computerSelection == 'scissors')
  {
    console.log('gano el humano');
    display.textContent = "Ganó el humano";
  }else if (humanSelection == 'paper' && computerSelection == 'rock')
  {
    console.log('gano el humano');
    display.textContent = "Ganó el humano";
  }else if (humanSelection == 'scissors' && computerSelection == 'paper')
  {
    console.log('gano el humano');
    display.textContent = "Ganó el humano";
  }else{
    console.log('gano la computadora:(');
    display.textContent = "Ganó la computadora 😢";
  }
}



var humanScore = 0;
var computerScore = 0;

const computerSelection = getComputerChoice();
