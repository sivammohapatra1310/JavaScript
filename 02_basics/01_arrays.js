const arr=[1,2,3,4,5]
//array is resizable and can have multi data type values
//similar to vector
//create a shallow copy, changes made to original array
const myHeros=["Ranbir", "Shahid"]
const arrObj=new Array(1,2,3,4);//sq brackets not req
console.log(arrObj[0]);
/*
Arrays also have .length like strings and also
have prototype access
*/
arr.push(6); //like c++
console.log(arr);
arr.pop();

arr.unshift(9);//it is very complex
console.log(arr);
//adds to begin
arr.shift();// like pop for unshift

console.log(arr.indexOf(20));//-1
//includes
const newarr=arr.join(); // produces a string
console.log(typeof newarr, newarr)

console.log();

//important
//slice gives a part of an array
//splice removes a part of the array -->array changed
console.log(arr.slice(1,3));
console.log(arr);
console.log(arr.splice(1, 3));
console.log(arr);