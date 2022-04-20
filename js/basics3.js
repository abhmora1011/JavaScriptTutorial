let i = [1,2,3,4,5];

console.log(i[2]);

var marks = Array(6); // Another way of declaring array
var marks = new Array(20,40,35,12,37,100);

console.log(marks[4]);

console.log(marks.length);

marks.push(65); // add element on an array

console.log(marks);

marks.pop(); // Delete the last element to an array;

console.log(marks);

marks.unshift(11); // add an element to the beginning

console.log(marks);

console.log(marks.indexOf(35)); // get the index

console.log(marks.includes(120)); // check if the value is present in the array

console.log(marks.slice(2,5)); // print from to up to but not included the second argument

let temp = 0;
for(let i = 0; i < marks.length; i++){
    console.log(marks[i]);
    temp += marks[i];
}

console.log(temp);


let sum = 0;
// Reduce filter map
let total = marks.reduce((sum,mark)=>sum+mark,0); // this is a short hand of the for loop that sum up the element of the array marks

console.log(total);

// *********************************************

var scores = [12,13,14,15,16];
// create new array with even numbers came from scores array

var evenScores = [];
for(let i = 0; i < scores.length; i++){
    if(scores[i]%2==0){
        evenScores.push(scores[i])
        //console.log(scores[i]);
    }
}

console.log(evenScores);

// This is a shortcut for the for loop above
let newFilterEvenScore = scores.filter(score=>score%2==0);
console.log(newFilterEvenScore);

// Map
// - Modify each and every value of an array to a new value
// create new array with even numbers * 3 came from newFilterEvenScore array 

let sampleMap = newFilterEvenScore.map(score=>score*3);
console.log(sampleMap);

let totalSample = sampleMap.reduce((sum,value)=>sum+value,0);
console.log(totalSample);

var chainScore = [12,13,14,15,16];

var newChain = chainScore.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0);

console.log(newChain);

let fruits = ["Banana", "Mango", "Pomegrante", "Apple"];
fruits.sort(); // to sort the sequence of the fruit array (This is applicable to a String)
console.log(fruits);
console.log(fruits.reverse());

var score1 = [12,003,19,16,14];
// console.log(score1.sort());
// score1.sort(function(a,b){
//     return a-b;
// })

console.log(score1.sort((a,b)=>a-b)); // bubble sort in a recursive manner
console.log(score1.sort((a,b)=>b-a)); // reverse


