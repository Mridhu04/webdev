const a = 3;

console.log(a);
//a = 10; //we cant reassign a constant variable.
// you must declare a constant variable at the time of intialization.  

let b =2;
let c ="";
let loggedIn='true';
let marks =null;
let age;
const bigNum =123456789n;
console.log(typeof bigNum)
console.log(typeof null)
// alert("this is a alert")//This is only interpreted by brownser
//Datatype
//primitive =pass by value i.e a copy of that variable is passed ,any changes .
//Number =2 to the power 53
//bigint 
// string
//boolean 
// null
// undefined
// symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId)
console.log (typeof id)
//Non primitive 
const myArray =["1st","2nd","3rd"];
let myObj = {
    name: "Mridhu",
    City: "Mohali"

}
const myfunction = function(){
    console.log("I am a function");

}
console.log(typeof myfunction)
console.log(typeof myObj)
console.log(typeof myArray)


 





