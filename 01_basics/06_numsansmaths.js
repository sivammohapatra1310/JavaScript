const num=220
console.log(num.toPrecision(4));
console.log(num.toString().length);
console.log(num.toFixed(3));
console.log(num.length); //undefined
const x= new Number(2000000);
console.log(x.toLocaleString('en-IN'))
let s=Number.NaN;
console.log(s)
s=Number.MAX_SAFE_INTEGER;
console.log(s)
s=Number("0x11")
console.log(s)

/****************************************/
console.log(" \n         MATHS \n **************")

console.log(Math);
/*
abs
round
ceil
floor
min(a,b,c,d) // different from c++
*/
console.log(Math.random());
console.log(Math.random()*10 + 1);//to ensure values are >=1

//generate values between a range
min=10
max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);