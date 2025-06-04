const dino = document.getElementById('dino');
const obstacle = document.getElementById('obstacle');
const scoreDisplay = document.getElementById('score');
const gameOverScreen = document.getElementById('game-over');
const finalScoreDisplay = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

let score = 0;
let isJumping = false;
let gameInterval;
let collisionInterval;

function startGame() {
  score = 0;
  isJumping = false;

  obstacle.style.animation = 'obstacle 1.5s infinite linear';
  gameOverScreen.classList.add('hidden');
  scoreDisplay.textContent = `Score: ${score}`;

  document.addEventListener('keydown', jump);
  gameInterval = setInterval(updateScore, 100);
  collisionInterval = setInterval(checkCollision, 10);
}

function updateScore() {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
}

function jump(event) {
  if (event.code === "Space" && !isJumping) {
    isJumping = true;
    dino.classList.add('jump');
    setTimeout(() => {
      dino.classList.remove('jump');
      isJumping = false;
    }, 500);
  }
}

function checkCollision() {
  const dinoRect = dino.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();

  if (
    dinoRect.x < obstacleRect.x + obstacleRect.width &&
    dinoRect.x + dinoRect.width > obstacleRect.x &&
    dinoRect.y < obstacleRect.y + obstacleRect.height &&
    dinoRect.y + dinoRect.height > obstacleRect.y
  ) {
    endGame();
  }
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(collisionInterval);
  obstacle.style.animation = 'none';
  gameOverScreen.classList.remove('hidden');
  finalScoreDisplay.textContent = score;
  document.removeEventListener('keydown', jump);
}

restartBtn.addEventListener('click', () => {
  startGame();
});

window.onload = startGame;
