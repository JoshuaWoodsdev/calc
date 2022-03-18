var readlineSync = require('readline-sync');
//Say hello to the user

var maths = [
    '+',
     '-',
     '*',
     '/'
    ];

//setup two calls
var userChoice = readlineSync.question('What math operation would you like to perform? ');

if ( userChoice == maths) {
 console.log('please choice something else');
} else {
    
}


console.log( maths);