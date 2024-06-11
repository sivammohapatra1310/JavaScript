function getThis() {
    return this;
  }
  
  const obj1 = { name: "obj1" };
  const obj2 = { name: "obj2" };
  
  obj1.getThis = getThis;
  obj2.getThis = getThis;
  
  console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
  console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

// const addTwo = (num1, num2) => {
//     return {1:"Sivam"}
// }
// console.log(addTwo(1,4)) //{ '1': 'Sivam' }
// const addTwo = (num1, num2) =>  ({1:"Sivam"})
// console.log(addTwo(1,4)) //{ '1': 'Sivam' }

const obj = {
    count: 10,
    doSomethingLater() {
        // Directly execute the increment and log without setTimeout
        this.count++;
        console.log(this.count);
    },
};

obj.doSomethingLater();

// Directly use an arrow function
(() => {
    this.count++;
    console.log(this.count);
})();

const incrementAndLog = () => {
    this.count++;
    console.log(this.count);
};
incrementAndLog();

setTimeout(() => {
    this.count++;
    console.log(this.count);
}, 300);