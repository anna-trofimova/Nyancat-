'use script'
function Enemy(canvas, randomX, randomWidth){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = randomX;
  this.y = 0;
  this.velocity = 3;
  this.direction = 1;
  this.color = 'blue';
  this.width = randomWidth;
  this.height = 50;
}

Enemy.prototype.move = function(){
  this.y = this.y + this.direction * this.velocity;
};
Enemy.prototype.draw = function(){
  var carrot = new Image ();
  this.type = "carrot"
  carrot.src = 'carrot.png'
  this.ctx.drawImage(carrot, this.x, this.y, this.width, this.height);
  /*this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height)*/
};