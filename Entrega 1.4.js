// N1 Ejercicio 1

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

const  getemployees = (id)=> {return new Promise((resolve,reject)=>{
    if  (employees.findIndex(index=> index.id == id) != -1){
            const employee  = employees.find(obj => obj.id == id)                                    
            resolve (employee)
    } else {reject("el id no se encuentra en la base") }
})}

const getSalary = (employe)=> new Promise ((resolve , reject)=>{
                const name = employe.name
                const sal = salaries.find(ob => ob.id == employe.id ).salary
                resolve(`Nombre: ${name} , Salario: ${sal}`)})             


               

async function callEmployee (id){
    const employee = await getemployees(id);
    const salari = await getSalary(employee)
    console.log(salari)
 }


// N1 Ejercicio 2

const divide = (number) => {return new Promise ((resolve,reject)=>{
    if(number % 2 == 0){
        setTimeout(()=>resolve("divisible x 2 "),2000)
    }else{reject("no divisible x 2 ")}
    }
)}
               

async function callNumber(number) {
    const result = await divide(number)
    console.log(result)    
}

// N2 Ejercicio 1

function getDouble(num){ return  new Promise ((resolve , reject)=>{
    setTimeout(()=>resolve(num * 2 ) ,2000)

})}


const suma = async function (num1 , num2 ,num3){
    let arr =[num1,num2,num3]
    let result = 0
    for (number of arr){
        const doble = await getDouble(number)
        result += doble
    }console.log(result)
}

// N3 Ejercicio 1

var getemployees = (id)=> {return new Promise((resolve,reject)=>{
    if (Number.isInteger(id)){
        if (id > 0){
            if  (employees.findIndex(index=> index.id == id) != -1){
                var employee  = employees.find(obj => obj.id == id)                                    
                resolve (employee)}    
            else {reject("el id no se encuentra en la base") }}
        else{reject("el id tiene que ser mayor que 0")}}
    else{reject("el id tiene que ser un numero entero")}
})}



var getSalary = (employe)=> new Promise ((resolve , reject)=>{
                const name = employe.name
                if (name == "Bill Gates"){
                    reject("Persona con acceso restringido")}
                else{const sal = salaries.find(ob => ob.id == employe.id ).salary
                    if (sal < 4000 ){
                        resolve(`Nombre: ${name} , Salario: ${sal}`)}
                    else{reject("No se puede brindar esa informacion") }
                }
    }
)
                
                               

async function callEmployee (id){
try{
    const employee = await getemployees(id);
    const salari = await getSalary(employee)
    console.log(salari)
                }catch(err){console.log(err)}}
