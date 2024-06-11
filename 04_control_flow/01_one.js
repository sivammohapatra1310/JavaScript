// if
const isUserloggedIn = true
const temperature = 41


// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


/*
global execution context
single threaded
function excon
eval excon
call stack
 */