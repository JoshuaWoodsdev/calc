//setup of program calling the packet
var readlineSync = require('readline-sync'),
 math = ['+', '*', '/', '-'],//this does not change const, this is the array has index
 index = readlineSync.keyInSelect(math, 'What operation would you like to perform ? ' );
//above setup the choice next check if its in the array and then if statment
//the IF check
if(math.includes(index)) {
    console.log('ok it is in this and working ');
} else {
    console.log('you have to start over ');
}
//check is returning a negtive maybe i have gammmer problem?
var firstNumber = readlineSync.questionInt(' Please enter the first number ' );
var secondNumber = readlineSync.questionInt(' Please enter the second number ');

//math is here checks the index itself to the inputs
function programMath() {
  if (index === '+') {
    console.log( firstNumber + secondNumber );
  }
   else if (index === '-') {
     console.log( firstNumber - secondNumber);
  }
  else if (index === '*') {
    console.log( firstNumber * secondNumber);
  }
  else if (index === '/') {
    console.log( firstNumber / secondNumber);
  }
};

programMath();
