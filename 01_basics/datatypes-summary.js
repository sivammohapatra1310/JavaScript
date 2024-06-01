/*
Primitive - changes are done in copy 
7 data types
String Number Boolean null undefined Symbol BigInt

Rreference - (Non primitive)

Array Objects Functions 
*/
/* Java Script is dynamically typed * Example --> */
let a
a = 0
console.log(a) // 0
a = 'Hello world'
console.log(a) // Hello world
a = { 'key': 'value' }
console.log(a) // {key:'value'}



let user;
console.log(user) // will give undefined


// const bigNumber= 131348287345235423
const bigNumber =1343251349235134235n //add n


//array (different from c++)
const character=["Kabir", "Rannvijay"]
//typeof char=== object


//object
let myObj={
    name:"Sivam",
    age:20
}
//type of null is also object 

//function
const myFunction=function(){
    console.log("Hello World");
}
//typeof function=function

// ** typeof always returns a String

/**************************************/

/*
Stack - Primitive --> reference is used 
Heap - Non-Primitive --> changes are made to original value

*/
let original=1234
let duplicate=original
duplicate=2345
//changes made to duplicate not reflected to original
console.log(original);
console.log(duplicate);


original={
    name:"Sivam",
    age:20
}
duplicate=original
duplicate.name="Ishan"
//changes made to duplicate reflected to original
console.log(original);
console.log(duplicate);
