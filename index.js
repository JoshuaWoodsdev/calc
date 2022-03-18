//prompt the user and save into a math 
//add the prompt-sync to project

var readlineSync = require('readline-sync');

//setup the array
var maths = [
    '+',
     '-',
     '*',
     '/'
    ];

//setup two calls
var hello = readlineSync.question('What function do you want to do? ');
var helloTwo = readlineSync.question(' +, -, * or / ');

var userChoice = readlineSync.prompt();//check the prompt in a for loop


console.log( maths);