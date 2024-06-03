const user={};
user.id=10
console.log(user)
const user1=new Object();
console.log(user1);
const user2={s1:{s2:{s3:4}}}
console.log(user2.s1.s2);

//combining 2 objects
//const obj3=Object.assign({}, obj1, obj2)
//ibj3={...ibj1, ...ibj3} -->spread operator

//array of objects arr[ind].attr

const mySym= Symbol("k1")
const User={
    name: "Sivam",
    age:20,
    location:"Bbsr",
    email:"si@fmail.com",
    ids: false,
    last: ["Mon", "Don"]
}; // similar to map

//similar to python

console.log(Object.keys(User));
//vvimp in database
console.log(Object.values(User));
console.log(Object.entries(User));

