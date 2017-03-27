var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color-displayed");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setUpModeButtons();
  setUpSquareListeners();
  reset();
}


function setUpModeButtons(){
  for (var i = 0 ; i < modeButtons.length ; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // figure how how many squares to show
      this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
      reset();
    });
  }
}

function setUpSquareListeners(){
  for (var i = 0 ; i < squares.length ; i++) {
    // add initial colors to squares
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
      // grab color of picked square
      var clickedColor = this.style.background;
      //compare color to picked color
      if (pickedColor === clickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      }else{
        this.style.background = "#1c1c1f";
        messageDisplay.textContent = "try again!";
      }
    });
  }
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match the new colors
  colorDisplay.textContent = pickedColor
  // reset textContent of reset button
  resetButton.textContent = "New Colors"
  //reset message displayed
  messageDisplay.textContent = "";
  for (var i = 0 ; i < squares.length ; i++) {
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue"
}


//reset Button
resetButton.addEventListener("click", function(){
  reset();
});


function changeColors(color){
  for (var i = 0 ; i < squares.length ; i++) {
    squares[i].style.background = color;
  };
  console.log(squares.length)
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // make an array
  var arr = []
  // add num random colors to array
  for (var i = 0; i < num; i++){
    // get random color and push into array
    arr.push(randomColor());
  }
  return arr;
}


function randomColor(){
  // pick a red from 0 - 255
  var red = Math.floor(Math.random() * 256);
  // pick a green from 0 - 255
  var green = Math.floor(Math.random() * 256);
  // pick a blue from 0 - 255
  var blue = Math.floor(Math.random() * 256);
  return "rgb("+red+", "+green+", "+blue+")"
}



