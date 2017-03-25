var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-displayed");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor

for (var i = 0 ; i < squares.length ; i++) {
  // add initial colors to squares
  squares[i].style.background = colors[i]
  console.log(squares[i].style.background);
  // !Error, style Uncaught TypeError: Cannot read property 'style' of undefined
  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    // grab color of picked square
    var clickedColor = this.style.background;
    //compare color to picked color
    if (pickedColor === clickedColor) {
      messageDisplay.textContent = "You Won!";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    }else{
      this.style.background = "#1c1c1f";
      messageDisplay.textContent = "try again!";
    }
  });
}

function changeColors(color){
  for (var i = 0 ; i < squares.length ; i++) {
    squares[i].style.background = pickedColor;
  };
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
  };
  return arr
};


function randomColor(){
  // pick a red from 0 - 255
  var red = Math.floor(Math.random() * 256);
  // pick a green from 0 - 255
  var green = Math.floor(Math.random() * 256);
  // pick a blue from 0 - 255
  var blue = Math.floor(Math.random() * 256);
  return "rgb("+red+", "+green+", "+blue+")"
}


