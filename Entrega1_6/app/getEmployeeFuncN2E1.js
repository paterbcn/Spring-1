
// Crea una funcion que verifique dado el parametro id , busca en el array employees y 
// retorna un objetos con los datos del id , y si no lo encuentra retorna un mensje de no encontrado


let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
const getemployees = (id)=> {return new Promise((resolve,reject)=>{
        const checkNum = Number.isInteger(id) && id > 0 
        if (isNaN(id)) {reject ("el id tiene que ser un numero entero")}{
            if (checkNum){
                if (employees.findIndex(index=> index.id === id) != -1){
                    const employee  = employees.find(obj => obj.id === id)                                    
                    resolve (employee)}{
                reject("el id no se encuentra en la base")}
            }reject ("el id tiene que ser un numero entero positivo")
        }
    })
}
        
                

module.exports = {
    getemployees
}