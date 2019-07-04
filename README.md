**Blocks Fight!**

 

**Description**

My first simple game for practice javacript. The game have enemies – blocks. And one player with 3 lives. Player must escape all blocks.Blocks move from the top to the down and come back. Player can move left/right. If player touchs block 3 times, he will die. 

 

**MVP (DOM - CANVAS)**

1) create archive

2)3 screens (Splash, Game, gameOver)

3)connection between screens

4)create main.js, game.js

5)create loop

6)create Enemy, move 

7)create Player, move

8)draw for Enemy and Player  

9)conditions for Enemy and Player

10)conditions GameOver

11)check crossing

12)push github

 

**Backlog**

1)image (splascreen, game-background,player)

2)score

3)music

 

**Data structure**

Main.js:

·      create SpashScreen

·      create GameScreen

·      create GameOverScreen

·      buildDom

Game.js:

·      this.enemy

·      this.player

·      this.gameOver

 **(M)**

·      this.draw()

·      this.clear()

·      this.update()

·      this.checkLives()

·      this.collision()

·      this.startGame()

.      this.checkCollision()

·      this.gameOver()

Player.js

·      this.lives

·      this.color

·      this.speed

·      this.x/y

·      this.width/heigth

**(M)**

·      this.move()

·      this.draw()

·      this.update

Enemy.js

·      this.color

·      this.x/y

·      this.speed

·      this.width/height

**(M)**

·      this.move

·      this.draw

·      this.eleminateEnemy 

 

 

**States y States Transitions**

Definition of the different states and their transition (transition functions)

·      splashScreen (have accesses)

·      gameScreen

·      gameoverScreen

**Task**

4)   main.js

·      create acrhives

·      main()

·      create SpashScreen

·      create GameScreen

·      create GameOverScreen

·      buildDom

3)   game.js

·      this.startGame()

.      this.checkCollision()

·      this.draw()

·      this.clear()

·      this.checkLives()

·      this.update()

·      this.gameOver()

3)   enemy.js 

·      this.move()

·      this.draw()

·      this.update

·      conditions for Enemy and Player

4)   palyer.js

·      this.move

·      this.draw

·      this.eleminateEnemy 







**Git**

URls for the project repo and deploy [Link Repo](http://github.com/) [Link Deploy](http://github.com/)



 