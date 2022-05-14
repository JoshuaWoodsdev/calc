
const promt = require('prompt');

const readlineSync = require('readline-sync');
math = ['+', '-', '/', '*']

console.log('What math do you want to perform? ' + math );
userAnswer = readlineSync.prompt();

//this goes into a while loop

if (userAnswer === '+' || '-' || '/' || '*') {
    console.log( 'we got this' );
  } else {
    console.log('try again');
  }




//update to add the error handling
//turn it into a function? and use error handling

var firstNumber = readlineSync.questionInt(' Please enter the first number ' );
var secondNumber = readlineSync.questionInt(' Please enter the second number ');

function myFunction() {
  if (userAnswer == '+' ) {
    console.log( firstNumber + secondNumber );
  }
   else if (userAnswer == '-' ) {
     console.log( firstNumber - secondNumber );
  }
  else if (userAnswer == '*') {
    console.log( firstNumber * secondNumber );
  }
  else if (userAnswer == '/') {
    console.log( firstNumber / secondNumber );
  }
}

myFunction();
