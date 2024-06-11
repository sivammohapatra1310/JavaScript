const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

/*
    this gives the current context
    this works only with objects
    this will give {} if executed in the node environment
    this will give {window object} if executed in the browser
*/


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
/*
    implicit return
    no curly brackets
    always give parentheses
*/

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => {
//     return {1:"Sivam"}
// }
// console.log(addTwo(1,4)) //{ '1': 'Sivam' }
// const addTwo = (num1, num2) =>  ({1:"Sivam"})
// console.log(addTwo(1,4)) //{ '1': 'Sivam' }
()=>(10+20)

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

const ne= () =>{

}

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')