var readlineSync = require('readline-sync');

var maths = [
    '+',
     '-',
     '*',
     '/'
    ];

var problem = [ ];   

var userChoice = readlineSync.question('What math operation would you like to perform? ');

if ( userChoice == maths) {
 //if it checks out then it is pushed into the problem array
} else {
    //do a repeat of userChoice
}

//readline prompt
var firstNumber = readlineSync.questionInt();//collect the first number and push into the problem array
 push

console.log();