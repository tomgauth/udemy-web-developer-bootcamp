// check off specific todos by clicking
$("li").click(function(){
  $(this).css({
    color: "grey",
    textDecoration: "line-through",
  });
});

