var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 0)",
  "rgb(0, 0, 255)"
]


var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("color-displayed");

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
      alert("Correct!");
    }else{
      alert("not correct!");
    }
  });
}
