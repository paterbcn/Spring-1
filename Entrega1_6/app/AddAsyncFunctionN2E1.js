const { Console } = require("console")


function getDouble(num){ return  new Promise ((resolve , reject)=>{
    const verNum = isNaN(num)
    if (verNum){reject("se necesita un numero")}
    setTimeout(()=>resolve(num * 2 ) ,2000)
   }
)}



const suma = async function (num1 , num2 ,num3){
    try{
        let arr =[num1,num2,num3]
        let result = 0
        for (number of arr){
        const doble = await getDouble(number)
        result += doble
        }return result;
    }catch(err){console.log(err)} 
}


module.exports = {
    getDouble,
    suma
}

