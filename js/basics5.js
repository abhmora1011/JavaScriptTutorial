let day = 'Tuesday ';

console.log(day.length);

console.log(day.slice(0,4));

console.log(day[4]);

let splitDay = day.split("s");
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

let date = '23';
let nextDate = '27';

let diff = parseInt(date) - parseInt(27);
console.log(typeof(diff.toString()));