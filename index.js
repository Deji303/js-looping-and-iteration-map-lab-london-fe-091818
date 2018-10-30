// Code your solution in this file.

const drivers = [];

// function  lowerCaseDrivers() {return drivers.map(change);} 

 function lowerCaseDrivers  (drivers)  {
   return drivers.map(driver => driver.toLowerCase()); 
   }
   

function nameToAttributes (drivers) {
   let newArr2 =  drivers.map(d => {
     let newArr = d.split(" ");
     return {firstName: newArr[0], lastName: newArr[1]};
   })
   return newArr2 
 }
 
 function 
 
 
 
 
 
 

