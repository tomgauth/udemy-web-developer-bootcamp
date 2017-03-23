// select the buttons
var buttonLeft = document.getElementById("button-left");
var buttonRight = document.getElementById("button-right");
var buttonReset = document.getElementById("button-reset");

// select the elements that will change during the game
var scoreLeft = document.querySelector("#score-left");
var scoreRight = document.querySelector("#score-right");
var numInput = document.querySelector("#num-input");
var winningScore = document.querySelector("#winning-score");

// default values when the page loads
var numWinningScore = 5;
var numScoreLeft = 0;
var numScoreRight = 0;

// the game works unless it's gameover
var gameOver = false;

// increment the left score by one unless it's equal to the winning score
buttonLeft.addEventListener("click", function(){
  if (!gameOver) {
    numScoreLeft ++;
    if (numScoreLeft === numWinningScore){
      scoreLeft.classList.add("winner");
      gameOver = true;
    }
    scoreLeft.textContent = numScoreLeft;
    }
  });

// increment the right score by one unless it's equal to the winning score
buttonRight.addEventListener("click", function(){
  if (!gameOver){
    numScoreRight ++;
    if (numScoreRight === numWinningScore){
      gameOver = true;
      scoreRight.classList.add("winner");
    }
    scoreRight.textContent = numScoreRight;
    }
});

// resets the score
function reset(){
  gameOver = false;

  numScoreLeft = 0;
  scoreLeft.textContent = numScoreLeft;
  scoreLeft.classList.remove("winner");

  numScoreRight = 0;
  scoreRight.textContent = numScoreRight;
  scoreRight.classList.remove("winner");
}

// resets the score when button reset is pressed
buttonReset.addEventListener("click", function(){
  reset();
});

// use the input form to change the value of the winning score
numInput.addEventListener("change", function(){

  reset(); // resets the score to avoid having current score higher than new winning score
  console.log(winningScore);
  winningScore.textContent = this.value;
  numWinningScore = Number(this.value);
  return numWinningScore;
});
