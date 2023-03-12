
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


const getSalary = (employe)=> new Promise ((resolve , reject)=>{
    if (typeof(employe)==="object"){
        const verId = Object.hasOwn(employe, 'id') && employe.id > 0 
        if(verId) {
            const sal = salaries.find(ob => ob.id === employe.id ).salary
            resolve(`Nombre: ${employe.name} , salario: ${sal}`)}
        reject ("id incorrecto")    
        }              
    reject("el parametro tiene que ser objeto")
}
)

/*
const getSalary = (employe)=> new Promise ((resolve , reject)=>{
        if (typeof(employe)==="object"){
            const verId = true
            if(verId) {resolve ("ok")}{
            reject ("id incorrecto")    
            }              
        reject("el parametro tiene que ser objeto")
        }})

*/


                
                                     


module.exports = {
    getSalary
}
        
