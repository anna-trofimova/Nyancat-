"use script";
function Game(canvas) {
  this.enemies = [];
  this.player = null;
  this.donuts = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.onGameOver = null;
  this.gameScore = 0;
  
}

Game.prototype.startGame = function() {
  this.player = new Player(this.canvas)
  this.setLives(this.player.lives);
  var newEnemy = new Enemy(this.canvas, 200);

  this.enemies.push(newEnemy);
  console.log(this.player)

  var loop = () => {
    if (Math.random() > 0.99) {
      
      var randomX = Math.random() * this.canvas.width - 100;
      var randomWidth = Math.random() * 50;
      var newEnemy = new Enemy(this.canvas, randomX, randomWidth);
      this.enemies.push(newEnemy);
      var newDonut = new Donut(this.canvas, randomX);
      this.donuts.push(newDonut);
    }
    
    this.update();
    this.clear();
    this.draw();
    this.checkCollisions();;
    if (!this.isGameOver) {
      requestAnimationFrame(loop);
    } else {
      this.onGameOver();
    }
  };
  loop();
};

Game.prototype.update = function(){
  this.player.move();
  this.enemies.forEach(function(enemy){
    enemy.move()
  });
  this.donuts.forEach(function(donut){
    donut.move()
  });  
};

Game.prototype.draw = function(){
  this.player.draw();
  this.enemies.forEach(function(enemy){
     enemy.draw()
   });
  this.donuts.forEach(function(donuts){
    donuts.draw()
  });

};

Game.prototype.clear = function(){
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.checkCollisions = function(){
  this.enemies.forEach((enemy, index) =>{
    var bottomTop = enemy.y + enemy.height >= this.player.y;
    var leftRight = enemy.x + enemy.width >= this.player.x;
    var rightLeft = this.player.x + this.player.width >= enemy.x;
    if(rightLeft && leftRight && bottomTop){
      this.enemies.splice(index, 1);
      console.log(this.enemies);
      this.player.lives--;
      this.setLives(this.player.lives);
      if(this.player.lives === 0){
        this.isGameOver = true;
      };
   }
   if(enemy.y > this.canvas.height){
    this.enemies.splice(index, 1);
   }
  });


  this.donuts.forEach((donut, index) =>{
    var bottomTop = donut.y + donut.height >= this.player.y;
    var leftRight = donut.x + donut.width >= this.player.x;
    var rightLeft = this.player.x + this.player.width >= donut.x;
    if(rightLeft && leftRight && bottomTop){ 
       this.donuts.splice(index, 1);
       console.log(this.donuts);
       this.gameScore++;
       this.setScore(this.gameScore)
     };
  });
}



Game.prototype.gameOverCallBack = function(callback, setScore, setLives){
  this.onGameOver = callback;
  this.setScore = setScore;
  this.setLives = setLives;
}




