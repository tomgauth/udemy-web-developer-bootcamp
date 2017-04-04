// check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// click on the X to delete todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // we don't want the event to apply to every element it's part of
  // stops the event to bubble up
  event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
  if (event.which === 13){
    var toDoText = $(this).val();
    $("input[type='text']").fadeToggle();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + toDoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
