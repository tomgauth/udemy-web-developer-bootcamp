var body = document.querySelector("body");

var isBlue = false;

// setInterval(function(){
//   if (isBlue){
//     body.style.background = "white";
//     console.log(isBlue);
//   } else {
//     body.style.background = "blue";
//     console.log(isBlue);
//   }
//   isBlue = !isBlue;
// }, 1000);

var button = document.querySelectorAll(".btn")[1];
var isActive = false;

// button.addEventListener("click", function(){
//   if (isActive){
//     button.style.color = "red";
//   } else {
//     button.style.color = "black";
//   }
//   isActive = !isActive;
// })



button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
})
