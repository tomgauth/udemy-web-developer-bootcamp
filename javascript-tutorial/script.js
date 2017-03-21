// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var fullName = firstName + " " + lastName;
// var age = prompt("What is your age?");

// console.log("youf full name is " +  fullName + " and you are " + age + " years old!")


// var age = prompt("What is your age?");
// var ageInDays = age * 365;
// alert("your are roughtly " + ageInDays + " days old")


// create secret number

// var secretNumber = Math.floor((Math.random() * 20) + 1)

// var secretNumber = 4;
// // ask user for a guess

// var userNumber = Number(prompt("Guess the right number"));

// // say if it's higher or lower

// while (secretNumber !== userNumber){
//   guessNumber;
// }

// function guessNumber() {
//    if (secretNumber < userNumber) {
//     var userNumber = prompt("the secret number is lower");
//   } else if (secretNumber > userNumber) {
//     var userNumber = prompt("the secret number is higher!");
//   }
// }


// alert("well done!");

// // say "you won" if the number is right

function isEven(x) {
  return x % 2 === 0;
}


function kebabtosnake (x) {
  y = x.replace("-", "_");
  console.log(y)
}


function factorial(num) {
  var result = 1;
  for (var i = 2; i <= num; i++ ) {
    result *= i;
  }
return result;
}






