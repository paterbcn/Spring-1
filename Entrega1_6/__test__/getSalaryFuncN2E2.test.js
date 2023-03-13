
const funtions = require("../app/getSalaryFuncN2E2.js")


describe("se pasa un  parametro incorrecto a la funcion"), ()=> {

    test("busca 1 da como respuesta el parametro tiene que ser objeto",()=>{
        return funtions.getSalary("a")
        .catch(msg=>expect(msg).toBe("el parametro tiene que ser objeto"))
    }
    )

}

describe("se pasa un  un objeto como parametro pero con datos incorrectos"), ()=> {

    test("busca { clave: 2, name: 'Bill Gates'} da como respuesta el parametro tiene que ser objeto",()=>{
        return funtions.getSalary({ clave: 2, name: 'Bill Gates'})
            .catch(msg=>expect(msg).toBe("id incorrecto"))
    }
    )


    test("busca  { id: -2, name: 'Bill Gates'}en resultado el id incorrecto",()=>{
        return funtions.getSalary({ id: -2, name: 'Bill Gates'})
            .catch(msg=>expect(msg).toBe("id incorrecto"))
    }
    )

    
}


describe("se pasan todos los paramentros"), ()=> {

    test("busca  { id: 2, name: 'Bill Gates'} en resultado es Nombre: Bill Gates , salario: 1000",()=>{
        return funtions.getSalary({ id: 2, name: 'Bill Gates'})
        .then(msg=>expect(msg).toBe("Nombre: Bill Gates , salario: 1000"))
            
    }
    )

}


