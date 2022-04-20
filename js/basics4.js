// Function 
// block of code

function add(a,b)
{
    return a+b;    
}

let sum = add(2,6);
console.log(sum);

// Anonymous function do not have name (Function expression)
let sumOfIntegers = function(c,d){
    return c+d;
}

let sumOfNumber = (c,d) => c+d;  // => Arrow symbol represents short hand anonymous function

console.log(sumOfIntegers(3,4));

console.log(sumOfNumber(3,10));

// var - global level or function level
// let - global or block level
// let and var can be reinitialize
// const -  cannot be reinitialize
var greet = 'Evening';

if(1 == 1){
    let greet = "Afternoon"
}

function sample(a,b)
{
    //var greet = 'Morning';
    let greet = 'Morning';
    return a+b;    
}

console.log(greet);