// Code your solution in this file.

const drivers = [];

// function  lowerCaseDrivers() {return drivers.map(change);} 

 function lowerCaseDrivers  (drivers)  {
   return drivers.map(driver => driver.toLowerCase()); 
   }
   
// let nameArr = ['jessy jones', 'mike jones']; 
 
// let splitArr = nameArr[i].split(" ");
 
// let names = {}; 
 
// names.firstName = splitArr[0] ;
 
// names.lastName = splitArr[1] ; 
 
// for (word of nameArr) {word.split(" ")}
 
// drivers.map(driver => driver.split(" ") )
 
// drivers.map(driver => newObj.firstName = driver[0]; newObj.lastName = driver[1])
 
 
 
 
 
 function nameToAttributes (drivers) {
   let newArr2 =  drivers.map(d => {
     let newArr = d.split(" ");
     return {firstName: newArr[0], lastName: newArr[1]};
   })
   return newArr2 
 }
 
 
 
 
 
 
 
 

