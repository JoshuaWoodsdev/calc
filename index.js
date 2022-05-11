//setup of program calling the packet
var readlineSync = require('readline-sync'),
math = ['+', '-', '/', '*'],
index = readlineSync.keyInSelect(math, 'What math do you want to perform?');
console.log('You choose ' + math[index]);
//the IF check
//solved the error I was having here by asking IF is was wrong instead of right
if(!math.includes(index)) {
  console.log('ok it is in this and working ');
  } else {
  console.log('The (math.includes(index)) is returning false? No matter how I set it up? Grammer error?  ');
}
//check is returning a negtive maybe i have gammmer problem?
var firstNumber = readlineSync.questionInt(' Please enter the first number ' );
var secondNumber = readlineSync.questionInt(' Please enter the second number ');

//returning the function logic() nothing else
function logic() {
  if (index == '+') {
    console.log( firstNumber + secondNumber );
  }
   else if (index == '-') {
     console.log( firstNumber - secondNumber);
  }
  else if (index == '*') {
    console.log( firstNumber * secondNumber);
  }
  else if (index == '/') {
    console.log( firstNumber / secondNumber);
  }
}
//seems like I have a error in my function
function myFunction() {
  console.log("Hello World!");
}

myFunction();
