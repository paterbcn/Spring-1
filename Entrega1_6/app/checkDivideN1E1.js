


const divide = (number) => {return new Promise ((resolve,reject)=>{
    if (isNaN(number)){reject("se necesita un numero")}
    if(number % 2 == 0){
        setTimeout(()=>resolve("divisible x 2"),2000)}
    else{reject("no divisible x 2")}
    }
)}


 module.exports = {
    divide
 }
 