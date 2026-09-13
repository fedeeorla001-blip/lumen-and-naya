// src/main.js
import { Player } from './game/entities/Player.js';

// Recuperiamo il canvas dall'HTML e il suo contesto 2D per disegnare
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Inizializziamo il nostro personaggio
const player = new Player();

// Loop principale del gioco (viene chiamato circa 60 volte al secondo)
function gameLoop() {
  // 1. Puliamo il canvas ad ogni frame per ridisegnare la scena aggiornata
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 2. Disegniamo un pavimento di prova stile Mario
  ctx.fillStyle = '#c84c0c'; // Colore marrone mattone
  ctx.fillRect(0, 180, canvas.width, 44);

  // 3. Aggiorniamo la posizione del giocatore e lo ridisegniamo
  player.update();
  player.draw(ctx);

  // Chiediamo al browser di chiamare il prossimo frame
  requestAnimationFrame(gameLoop);
}

// Avviamo il gioco
gameLoop();
