//console.log(Temporal.Now.instant);
let myDate= new Date()
console.log(typeof myDate);
console.log(myDate.toString());
console.log( myDate.toJSON());
console.log(myDate.getDate());
let myCreatedDate=new Date("2024-01-06")
myCreatedDate=new Date("01-06-2024")
console.log(myCreatedDate)
/*
Date(year: number, monthIndex: number, 
date?: number | undefined, hours?: number | undefined,
minutes?: number | undefined, seconds?: number | undefined, 
ms?: number | undefined): Date
*/