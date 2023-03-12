
const funtions = require("../app/getSalaryFuncN2E2.js")



test("busca 1 da como respuesta el parametro tiene que ser objeto",()=>{
    return funtions.getSalary("a")
        .catch(msg=>expect(msg).toBe("el parametro tiene que ser objeto"))
}
)

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

test("busca  { id: 2, name: 'Bill Gates'} en resultado es Nombre: Bill Gates , salario: 1000",()=>{
    return funtions.getSalary({ id: 2, name: 'Bill Gates'})
        .then(msg=>expect(msg).toBe("Nombre: Bill Gates , salario: 1000"))
        
}
)
