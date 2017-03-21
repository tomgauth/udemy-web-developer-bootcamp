var todolist = [];

var answer = prompt("what would you like to do: add - list - quit");

while (answer != "quit") {

  if (answer == "add") {
    newtask =  prompt("give a name to your task");
    todolist.push(newtask);
    alert(newtask + " has been added to the todolist");
    answer;
  }

  else if (answer == "list") {
    alert(todolist);
  }

  else {
    alert("I don't understand");
  }
var answer = prompt("what would you like to do: add - list - quit");
}

