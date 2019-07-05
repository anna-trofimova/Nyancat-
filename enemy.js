'use script'
function Enemy(canvas, randomX){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = randomX;
  this.y = 0;
  this.velocity = 3;
  this.direction = 1;
  this.color = 'blue';
  this.width = 30;
  this.height = 30;
  this.img = new Image ();
  this.imageArr = ['./kekesik.png', './carrot.png', './brok.png'];
  this.randomImage = Math.floor(Math.random() * this.imageArr.length);
  this.img.src = this.imageArr[this.randomImage];
}

Enemy.prototype.move = function(){
  this.y = this.y + this.direction * this.velocity;
};
Enemy.prototype.draw = function(){
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};