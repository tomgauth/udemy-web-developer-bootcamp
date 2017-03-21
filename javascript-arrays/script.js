// Todo list is an empty array

// Start with a prompt "what would you like to do: add - list - quit"

// Add todo
var todolist = [];

var answer = prompt("what would you like to do: add - list - quit");

while (!= quit) {
  if (answer == "add") {
    newtask =  prompt("give a name to your task");
    todolist.push(newtask);
    alert(newtask + " has been added to the todolist");
  }

  // List todo
  else if (answer == "list") {
    // just display the elements of the array
  }

  else {
    prompt "I don't understand, what would you like to do: add - list - quit"
  }
}

// Quit todo
  // when answer == quit, quit the while loop
  // while answer != quit, run the loop
