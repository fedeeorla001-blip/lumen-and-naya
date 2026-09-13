// src/game/entities/Player.js
export class Player {
  constructor() {
    // Posizione iniziale
    this.x = 50;
    this.y = 100;
    
    // Dimensioni di Mario
    this.width = 16;
    this.height = 16;

    // Velocità e Fisica
    this.velocityX = 0;
    this.velocityY = 0;
    this.speed = 2;
    this.gravity = 0.3;
    this.jumpPower = -6;
    this.isGrounded = false;

    // Gestione Tasti
    this.keys = {};
    window.addEventListener('keydown', (e) => this.keys[e.code] = true);
    window.addEventListener('keyup', (e) => this.keys[e.code] = false);
  }

  update() {
    // 1. Movimento Sinistra / Destra
    this.velocityX = 0;
    if (this.keys['ArrowRight'] || this.keys['KeyD']) this.velocityX = this.speed;
    if (this.keys['ArrowLeft'] || this.keys['KeyA']) this.velocityX = -this.speed;

    // 2. Salto (solo se tocca terra)
    if ((this.keys['Space'] || this.keys['ArrowUp'] || this.keys['KeyW']) && this.isGrounded) {
      this.velocityY = this.jumpPower;
      this.isGrounded = false;
    }

    // 3. Applicazione della Gravità
    this.velocityY += this.gravity;

    // 4. Aggiorna Posizioni
    this.x += this.velocityX;
    this.y += this.velocityY;

    // 5. Collisione col Pavimento (quota y = 180)
    const floorY = 180;
    if (this.y + this.height >= floorY) {
      this.y = floorY - this.height;
      this.velocityY = 0;
      this.isGrounded = true;
    }
  }

  draw(ctx) {
    // Disegna il personaggio come un quadrato rosso
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
