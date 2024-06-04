function nam() {
    console.log("Function");
}
nam()
function add(n1, n2){//parameters
    //if both are numbers add
    //if no values passed ->undefined
    console.log(n1+n2) 
    console.log(`${n1}+${n2}`)
    return n1+n2

    //null
}
x=add(3,4) ; add(3,"a") //arguments; 
console.log(x);

function name(username="ishan") {
    if(!username){
        console.log("Enter valid");
        return;
    }
    return `${username} logged in`
}
console.log(name());

//rest operator
function cart(val1, val2, ...num1){
    return num1;
}
console.log(cart(100,200,300, 400)); //100 200

//passing 