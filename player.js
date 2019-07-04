'use script'
function Player(canvas){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = this.canvas.width/2 -15;
  this.y = this.canvas.height - 30 ;
  this.velocity = 3;
  this.direction = -1;
  this.color = 'red';
  this.lives = 3;
  this.width = 60;
  this.height = 30;
  
}

Player.prototype.move = function(){
  this.x = this.x + this.direction * this.velocity;
  if(this.x <= 0){
    this.x = 5;
  } else if (this.x + this.width >= this.canvas.width) {
    this.x = 495 - this.width;
  };
   
  }

Player.prototype.draw = function(){
 /* this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height)*/

  var cat = new Image();
  this.type === "cat" 
  cat.src ='cat4.png'
  
  this.ctx.drawImage(cat, this.x, this.y, this.width, this.height)
}

Player.prototype.setDirection = function(newDirection){
  this.direction = newDirection;
}