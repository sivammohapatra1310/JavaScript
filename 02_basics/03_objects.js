// singleton 
// Object.create

//object literals- not as singleton
const mySym= Symbol("k1")
const User={
    name: "Sivam",
    "full name":"Sivam Mohapatra",
    [mySym]:"ioj",
    age:20,
    location:"Bbsr",
    email:"si@fmail.com",
    ids: false,
    last: ["Mon", "Don"]
}; // similar to map

console.log(User["email"]);//like maps
console.log(User.email);
console.log(User["full name"])
console.log(User[mySym])

User.email="sivaa@hotmail.com"
// Object.freeze(User); //freeze the eggs
User.email="innsiona"
// console.log(User);

User.greeting= function () {
    console.log("Hello")
}

User.farewell= function () {
    console.log(`Age is ${this.age}`)
}
console.log(User)
console.log(User.greeting())
console.log(User.farewell())