const flag = true;

if(!flag){
    console.log("Condition satisfied");
}
else{
    console.log(flag);
    console.log("Condition not satisfied");
}

let i = 1;

while(i<10){
    
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++;
}while(i<20);

for (let a = 100; a <= 2500; a+=100) {
    console.log(a);
}

console.log("**************************");
// 2 anmd 5
// from 1 to 10 give me common multiple values of 2 and 5
let n = 1;
for(let k =1; k<=100;k++){
    if(k%2 == 0 || k%5 == 0){
        n++;
        console.log(k);
        if(n==3){
            break;
        }
    }
   
}

