console.log('Hello World!'); // Print

// This is a comment

/*
    Multiline Comment
*/

// To declare variable use var, (let, const) ES6
// var and let are almost the same
// we cannot redeclare a variable using let but using var is possible

let a = 4;

console.log(a);
console.log(typeof(a));

let b = 2.345;
console.log(typeof(b));

// let c = 'Hello'; ERROR
let c = 'Hello';
console.log(typeof(c));


let required = true;
console.log(typeof(required));


//let c = a+b; ERROR
c = a+b;
console.log(c);

console.log(!required); // reverse the boolean using not !

const sample = true; // Cannot be reassign
// sample = false;
console.log(!sample);

