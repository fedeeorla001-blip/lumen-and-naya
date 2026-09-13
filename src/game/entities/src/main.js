// src/main.js
import { Player } from './game/entities/Player.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Inizializza il personaggio
const player = new Player();

// Loop di gioco (eseguito continuamente)
function gameLoop() {
  // 1. Pulisci lo schermo ad ogni frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 2. Disegna il pavimento
  ctx.fillStyle = '#c84c0c'; // Marrone mattone
  ctx.fillRect(0, 180, canvas.width, 44);

  // 3. Aggiorna e disegna il personaggio
  player.update();
  player.draw(ctx);

  // Richiama il prossimo frame
  requestAnimationFrame(gameLoop);
}

// Avvia il gioco
gameLoop();
