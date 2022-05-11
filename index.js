var readlineSync = require('readline-sync'),
math = ['+', '-', '/', '*'],
index = readlineSync.keyInSelect(math, 'What math do you want to perform?');
console.log('You choose ' + math[index]);
//the IF check
//solved the error
if(!math.includes(index)) {
  console.log('ok it is in this and working ');
  } else {
  console.log('how to get this to shut off and restart? IDK maybe break?');
}
//how do I force them to restart?
var firstNumber = readlineSync.questionInt(' Please enter the first number ' );
var secondNumber = readlineSync.questionInt(' Please enter the second number ');

function myFunction() {
  if (math[index] == '+') {
    console.log( firstNumber + secondNumber );
  }
   else if (math[index] == '-') {
     console.log( firstNumber - secondNumber );
  }
  else if (math[index] == '*') {
    console.log( firstNumber * secondNumber );
  }
  else if (math[index] == '/') {
    console.log( firstNumber / secondNumber );
  }
}
//I don't know why I needed the [] around index?

myFunction();
