// --------------------------------
// Seleccionamos elementos
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnSiccors = document.querySelector("#siccors");
const btnReset = document.querySelector("#reset");

const display = document.querySelector(".message");
const scoreDisplay = document.querySelector("#score");


// --------------------------------
// Estado del juego
let scoreHuman = 0;
let scoreMachine = 0;

const DEFAULT_MESSAGE = "Elige piedra, papel o tijeras ✊📄✂️";

// --------------------------------
// UI
function showMessage(message = DEFAULT_MESSAGE) {
  display.textContent = message;
}

function renderScore() {
  scoreDisplay.textContent = `👤 Humano: ${scoreHuman} | 🤖 Máquina: ${scoreMachine}`;
}

// --------------------------------
// Eventos
btnRock.addEventListener("click", handleClick);
btnPaper.addEventListener("click", handleClick);
btnSiccors.addEventListener("click", handleClick);

btnReset.addEventListener("click", resetGame);

// --------------------------------
// Funciones
function handleClick(e) {
  if (scoreHuman >= 5 || scoreMachine >= 5) {
    showMessage(
      scoreHuman >= 5
        ? "🎉 Game Over! Ganó el humano"
        : "🤖 Game Over! Ganó la máquina"
    );
    return;
  }

  const humanChoice = e.target.dataset.value;
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(human, computer) {
  if (human === computer) {
    showMessage("🤝 Empate");
    return;
  }

  const humanWins =
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper");

  if (humanWins) {
    scoreHuman++;
    showMessage("🎉 Ganaste la ronda");
  } else {
    scoreMachine++;
    showMessage("😢 Perdiste la ronda");
  }

  renderScore();
}

function resetGame() {
  scoreHuman = 0;
  scoreMachine = 0;
  showMessage();
  renderScore();
}

// --------------------------------
// Inicialización
showMessage();
renderScore();
