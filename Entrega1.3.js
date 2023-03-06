//N1 Ejercicio 1

const valId = function (id,base) {return new Promise((resolve, reject)=>{
                                if (base.includes(id)){
                                    resolve(`id: ${id} aprobado`)
                                }else reject(`id: ${id} no aprobado`)})}
                                
                            
                            

 
 const idArrBase =[1,2,3,4,5]

 valId(5,idArrBase).then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))

 // N1 Ejerciocio 2
 const verificador =  (id,base , callback) => {
                        if (base.includes(id)){
                            callback("autorizado")
                        }else callback("no autorizado")}


                                


const idBase = [1,2,3,4,5]

verificador(10,idBase , msg=>console.log(msg))

// N2 ejercicio 1

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


const getemployees = (id)=> {return new Promise((resolve,reject)=>{
    if  (employees.findIndex(index=> index.id == id) != -1){
        var employee  = employees.find(obj => obj.id == id)                                    
         resolve (employee)
     
    } else {reject("el id no se encuentra en la base") }
             })}
             
// N2 ejercicio 2

var getSalary = (employe)=> new Promise ((resolve , reject)=>{
                             resolve(salaries.find(ob => ob.id == employe.id ).salary)}) 

getSalary (employees[0]).then(msg => console.log(msg))

// N2 ejercicio 3

const getemployees = (id)=> {return new Promise((resolve,reject)=>{
    if  (employees.findIndex(index=> index.id == id) != -1){
        var employee  = employees.find(obj => obj.id == id)                                    
         resolve (employee)
     
    } else {reject("el id no se encuentra en la base") }
             })}

var getSalary = (employe)=> new Promise ((resolve , reject)=>{
                const name = employe.name
                const sal = salaries.find(ob => ob.id == employe.id ).salary
                resolve(`Nombre: ${name} , Salario: ${sal}`)})             

getemployees(2).then((obj)=>
                getSalary(obj))
                .then(msg => console.log(msg))
                .catch(msg => console.log(msg))

// N3 ejercicio 1

const getemployees = (id)=> {return new Promise((resolve,reject)=>{
    if  (employees.findIndex(index=> index.id == id) != -1){
        var employee  = employees.find(obj => obj.id == id)                                    
         resolve (employee)
     
    } else {reject("el id no se encuentra en la base") }
             })}

var getSalary = (employe)=> new Promise ((resolve , reject)=>{
                const name = employe.name
                const sal = salaries.find(ob => ob.id == employe.id ).salary
                resolve(`Nombre: ${name} , Salario: ${sal}`)})             

getemployees(2).then((obj)=>
                getSalary(obj))
                .then(msg => console.log(msg))
                .catch(msg => console.log(msg))


                             