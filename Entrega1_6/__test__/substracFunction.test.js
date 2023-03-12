const funtions = require("../app/substracFunction.js")

/*
Casos:
calcular 9 - 5 debe dar como resultado 4
Calcular 1- 2  debe dar como resultado -1
calcular a - 3 deber dar como resultado mensaje  solo se puede hacer operaciones entre numeros
calcular 3 - b deber dar como resultado mensaje  solo se puede hacer operaciones entre numeros
calcular a - b deber dar como resultado mensaje solo se puede hacer operaciones entre numeros
calcular 5  deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion
calcular   deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion
*/

test("calcular 9 - 5 debe dar como resultado 4",()=>{
    expect(funtions.SubtractFuntion(9,5)).toBe(4)
})

test("Calcular 1 - 2 debe dar como resultado -1",()=>{
    expect(funtions.SubtractFuntion(1,2)).toBe(-1)
})

test("calcular a - 3 deber dar como resultado mensaje  solo se puede hacer operaciones entre numeros",()=>{
    expect(funtions.SubtractFuntion("a",3)).toBe("solo se puede hacer operaciones entre numeros")
})

test("calcular 3 - b deber dar como resultado mensaje  solo se puede hacer operaciones entre numeros",()=>{
    expect(funtions.SubtractFuntion(3,"b")).toBe("solo se puede hacer operaciones entre numeros")
})

test("calcular a - b deber dar como resultado mensaje solo se puede hacer operaciones entre numeros",()=>{
    expect(funtions.SubtractFuntion("a","b")).toBe("solo se puede hacer operaciones entre numeros")
})

test("calcular 5  deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion",()=>{
    expect(funtions.SubtractFuntion(5)).toBe("Error se nesecitan dos numeros para ejecutar la funcion")
})

test("calcular   deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion",()=>{
    expect(funtions.SubtractFuntion()).toBe("Error se nesecitan dos numeros para ejecutar la funcion")
})