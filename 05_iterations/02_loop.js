// for(iterator of object){
//     console.log(iterator)
// }
const map=new Map();
map.set('IN', "India");
//similar to maps in c++
//destructuring
for( const [key, val] of map){
    console.log(key, val);
}
for(key of map){
    console.log(key);
}
//object is iteratable
//map is iteratable
const object1={
    "Si":"Bas"
}
for(iterator in object1){
    console.log(iterator, object1[iterator])
}
const arr=[1,2,3,4];
for(it in arr){
    console.log(it, arr[it]);
}
for(it of arr){
    console.log(it);
}
arr.forEach( (item, index, arr) =>{console.log(item)})
//of gives exact values
//in gives indices

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

//imp
const ans=myCoding.filter((item) => item["languageName"]==="python")
console.log("(((" , ans)

const ar=[1,2,3,4,5,6];
console.log(ar.filter(num => num>4)) //filter function

console.log(ar.map( num =>num*4)) //map function

console.log(ar.map(num=>{
    return num>4;                //if you use scope use return word
}))
const newNums = []

ar.forEach( (num) => {
    // if (num > 4) {
        newNums.push(num)
    // }
} )

console.log(newNums);


//chaining 
console.log(ar.map(num=>num*4).map(num=>num+1))


//reduce
console.log(ar.reduce((prev, curr)=>prev+curr, 0))