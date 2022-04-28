
//- how will you decide if the users input is a valid operation? What should the users input be checked against?
//- at this point you have the operation and both numbers. Now you can implement the math calculation on the numbers based on the input
//Logic: Conduct a check on each input

var readlineSync = require('readline-sync');
var maths = ['+', '*', '/', '-'];

var userMath = readlineSync.question('What maths would you like to perform? ');


var userMath2 = readlineSync.questionInt('What is the first number?');

var userMath3 = readlineSync.questionInt('What is the second numbers? ');




function math(n,m) {
      return n m
}

console.log('call function should go here');
