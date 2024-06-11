// let a=4;
let neg_a=a;
console.log(neg_a)
let b=10000;
console.log("the value of b is 2");
console.log("the value of b is",b);
//string interpolation
console.log(`The value of b is ${b}`)







let str1="    hello    abcd  .  "; //trm only removes space from beg
console.log("trimmed str1===",str1.trim());
let trimmed= str1.trim()
let str2="   abc   Developer    ";
let str4 = str1 +str2;
console.log("without trimmed str4==",str4);
let trimmed2 = str2.trim();
let str3=trimmed+trimmed2;
console.log("trimmed concatenate ==",str3);

// implicit conversion= conversion done by node
console.log("1"+2) //12
console.log("1"+2+2)
console.log(3+"1"+2)
console.log(3+2+5+"1"+4)

let counter=0;
console.log(counter);
++counter; //preincrement 
console.log(counter); //1
counter++; //postincrement
console.log(counter);
var a= counter++
console.log(a);
console.log(counter);


let Counter=5;
console.log(counter);
--counter; //predecrement
console.log(counter);
counter--; //postdecrement
console.log(counter);2
var a = counter--
console.log(a);
console.log(counter);


a=5;
b= --a
console.log("decrement of b",b);
console.log("decrement of a",a);
b=a--
console.log(b);


a=0;
a++
console.log(a);
console.log(++a);
