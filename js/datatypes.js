// data types
// do not use var instead use let
// cannot be a reserved keyword
// should be meaningful
// Cannot start with a number
// Case sensitive

let fname = 'Abraham', lastName = 'Ora';
let age = 33;

console.log(fname + " " + lastName + " and I'm " + age + " yrs. old");

let arr = [
    1,2,3,4
];

console.log(arr[3]);

// *********** Constants

const interestRate = 0.3;

//interestRate = 1;

console.log(interestRate);

// ****************0 Primitive

// String, numbers, boolean, undefined, null
let sampleName = 'Abraham';
let sampleAge = 33;
let sampleBool = true;
let sampleUndef = undefined; // set as a default value (undefined type)
let sampleNull = null; // clear the value of a variable (object type)


// Reference Types
// Object, Array, Function


// *************** OBJECT

let person = {
    name: 'Abe',
    age: 30
}; // object literal 

// Dot notation
person.name = 'Abe'

console.log(person.age);

// bracket notation
let selection = 'name';

//person['name'] = 'Abe the Great';

person[selection] = 'Abe the Great';

//console.log(person['name']);
console.log(person[selection]);


// Dynamic Typing
// Two types of Programming Language Static vs. Dynamic
// JS is a dynamic typing

console.log(typeof(sampleName));


// ****************** ARRAY
// array in JS is dynamic you can add item even there are limit on your initialized value
// size and type is dynamic

let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);


// ******************* FUNCTION

// Performing a task
function greet2(fname, mamey){ // Parameter
    console.log('Hello ' + fname + " " + mamey + " Loves you");
}

function greet(fname){ // Parameter
    console.log('Hello ' + fname );
}

greet2('Abe', 'Gale'); // Argument
greet('Hendrix');

// Calculate a value
function square(number) {
    return number * number;
}

console.log(square(4));