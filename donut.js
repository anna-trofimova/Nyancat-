'use script'
function Donut (canvas, randomX,){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = randomX;
  this.y = 0;
  this.velocity = 2;
  this.direction = 1;
  this.color = 'blue';
  this.width = 30;
  this.height = 30;
}

Donut.prototype.move = function(){
  this.y = this.y + this.direction * this.velocity;
}

Donut.prototype.draw = function (){
  var donut = new Image ();
  this.type = "donut"
  donut.src = 'donut.png'
  this.ctx.drawImage(donut, this.x, this.y, this.width, this.height);
}