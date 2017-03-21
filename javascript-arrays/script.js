var todolist = [];

var answer = prompt("what would you like to do: new - list - quit");

while (answer != "quit") {

  if (answer == "new") {
    newTodo();
  }

  else if (answer == "list") {
    listTodo();
  }

  else if (answer == "delete") {
    deleteTodo();
  }

  else {
    alert("I don't understand");
  }
  var answer = prompt("what would you like to do: new - list - quit");
}
alert("Goodbye!")


function newTodo() {
  newtask =  prompt("give a name to your task");
  todolist.push(newtask);
  alert(newtask + " has been newed to the todolist");
}

function listTodo() {
  todolist.forEach(function(todo, i){
    console.log(i + ": " + todo);
    alert(todo);
  });
}

function deleteTodo() {
  element = prompt("what element do you want to delete?")
  todos.splice(index,1); // index position and number of items to delete
  alert("deleted!");
}

