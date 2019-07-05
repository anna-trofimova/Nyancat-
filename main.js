'use script'
var score ;

function main() {
  var music = new Audio;
  music.src='./sounds/nyan-cat.mp3'
   var mainElement = document.querySelector('#site-main')
   function buildDom(html){
    mainElement.innerHTML = html;  
   return mainElement;
 };

  
  function createSplashScreen(){
  var splashScreen = buildDom(`
     <section>
     <h1>Hello, survivor!</h1>
     <button>Start Game</button>
     <img class = "page" src="nunada.gif" height="350" width="350" >
     </section>
  `);
   var startButton = document.querySelector('button');
   startButton.addEventListener('click', createGameScreen);
   
  };
  //createSplashScreen()

  function createGameScreen(){
    music.play();
    music.addEventListener('ended', function(){
      this.currentTime = 0;
      music.play();
    })
    var createGameScreen = buildDom(`
    <section class = "gameScreen"> 
    <canvas width ="500px" height="500px"></canvas>
    <div class = "style">
    <div class = "status">
    <img src = "donut.png" height="15" width="15">
    <p id = "score">Score:0</p> 
    </div>

    <div class = "status">
    <img src = "C__fakepath_heart.png" height="15" width="15">
    <p id = "lives">Lives:</p>
    </div>
    </div>
    <section>
    `);
    
    var canvas = document.querySelector('canvas');
    var game = new Game(canvas);
    game.gameOverCallBack(createGameOverScreen, setScore, setLives);
    game.startGame();
   
    document.addEventListener('keydown', function(event){
      if(event.key === 'ArrowLeft'){
        game.player.setDirection(-1); 
     } else if (event.key === 'ArrowRight'){
        game.player.setDirection(1);
     }
    });
    
    
    //setTimeout(createGameOverScreen, 3000)
  }
  function setScore(gameScore){
    score = document.querySelector('#score');
    score.innerHTML = "Score:" + gameScore;
  }

  function setLives(gameLives){
    lives = document.querySelector('#lives');
    lives.innerHTML = "Lives:" + gameLives;
  }
  //createGameScreen()
  
  function createGameOverScreen(){
    music.pause();
    music.currentTime = 0;
    var gameOverScreen = buildDom(`
    <section>
    <h1>GameOver!</h1>
    <button>Restart</button>
    <img class = "page3" src="cry.gif" height="350" width="350" >
    </section>
    `)
    var restartButton = document.querySelector('button')
    restartButton.addEventListener('click', createGameScreen)
  }

  createSplashScreen()
}



window.addEventListener('load', main)