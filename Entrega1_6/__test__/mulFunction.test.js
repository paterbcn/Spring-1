const funtions = require("../app/mulFunction.js")

/*
Casos:
calcular 2 * 2 debe dar como resultado 4
Calcular 2 * -0.5  debe dar como resultado -1
calcular a * 3 deber dar como resultado mensaje  solo se puede hacer operaciones entre numeros
calcular 3 * b deber dar como resultado mensaje  solo se puede hacer operaciones entre numeros
calcular a * b deber dar como resultado mensaje solo se puede hacer operaciones entre numeros
calcular 5  deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion
calcular   deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion
*/

test("calcular 2 * 2 debe dar como resultado 4",()=>{
    expect(funtions.mulFuntion(2,2)).toBe(4)
})

test("Calcular 2 * -0.5  debe dar como resultado -1",()=>{
    expect(funtions.mulFuntion(2,-0.5)).toBe(-1)
})

test("calcular a * 3 deber dar como resultado mensaje  solo se puede hacer operaciones entre numeros",()=>{
    expect(funtions.mulFuntion("a",3)).toBe("solo se puede hacer operaciones entre numeros")
})


test("calcular 3 * b deber dar como resultado mensaje  solo se puede hacer operaciones entre numeros",()=>{
    expect(funtions.mulFuntion(3,"b")).toBe("solo se puede hacer operaciones entre numeros")
})

test("calcular a * b deber dar como resultado mensaje solo se puede hacer operaciones entre numeros",()=>{
    expect(funtions.mulFuntion("a","b")).toBe("solo se puede hacer operaciones entre numeros")
})

test("calcular 5 deber dar como resultado mensaje solo se puede hacer operaciones entre numeros",()=>{
    expect(funtions.mulFuntion(5)).toBe("Error se nesecitan dos numeros para ejecutar la funcion")
})

test("calcular   deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion",()=>{
    expect(funtions.mulFuntion()).toBe("Error se nesecitan dos numeros para ejecutar la funcion")
})
