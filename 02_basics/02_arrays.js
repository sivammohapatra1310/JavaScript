const arr=["ab", "bc", "cd"];
const brr=["po", "oi", "iu"];

// arr.push(brr);
// console.log(arr);

crr=arr.concat(brr);//concat gives a new array
console.log(crr);

const alln=[...arr, ...brr];
console.log(alln);

const drr=[1,2,[2,3,4,[5,6]]];
console.log(drr.flat(3)); // depth


// array object
console.log(Array.from("12456"))
console.log(Array.from({name:"12456"})) //imp
console.log(Array.of(1,2,3,4));

