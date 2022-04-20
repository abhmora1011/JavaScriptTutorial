const Person = require('./basics7') // to extend the basics7.js

let day = 'Tuesday ';

console.log(day.length);

console.log(day.slice(0,4)); // Substring

console.log(day[4]);

let splitDay = day.split("s");
console.log(splitDay[1].length); // Get the length
console.log(splitDay[1].trim().length); // Trim the extra space

let date = '23';
let nextDate = '27';

let diff = parseInt(date) - parseInt(27); // Parsing a string
console.log(typeof(diff.toString()));

let newQoute = day + "is Funday";
console.log(newQoute);


let val = newQoute.indexOf("day",5); // Second argument is the index number so that it can skip the first day word
console.log(val);

let count = 0;
let value = newQoute.indexOf("day");
while(value !== -1){
    count++
    value = newQoute.indexOf("day",value+1)
}

console.log(count);

// We can declare without using semicolon

let obj = new Person('Abe','TheGreat')
console.log(obj.fullName())