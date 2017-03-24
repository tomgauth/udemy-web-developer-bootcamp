var lis = document.querySelectorAll("li");

// change the color of "li" to green on mouseover, set it back to black on mouseout.
for (var i = 0; i < lis.length; i++){
  console.log(lis[i]);
  lis[i].addEventListener("mouseover", function(){
    this.classList.add("selected");
  });
  lis[i].addEventListener("mouseout", function(){
    this.classList.remove("selected");
  });
  lis[i].addEventListener("click", function(){
    this.classList.toggle("done");
  });
};
