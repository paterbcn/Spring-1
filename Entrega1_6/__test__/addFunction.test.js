const funtions = require("../app/addFunction.js")

/*
Casos:
calcular 0.5 + 1.3 debe dar como resultado 1.8
Calcular 5 + 3 debe dar como resultado 8
calcular a + 3 deber dar como resultado mensaje Error solo se puede hacer operaciones entre numeros
calcular 3 + b deber dar como resultado mensaje Error solo se puede hacer operaciones entre numeros
calcular a + b deber dar como resultado mensaje Error solo se puede hacer operaciones entre numeros
calcular 5  deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion
calcular   deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion
*/

test("calcular 0.5 + 1.3 debe dar como resultado 1.8", ()=>{
    expect(funtions.addFuntion(1.3,0.5)).toBe(1.8);
})

test("Calcular 5 + 3 debe dar como resultado 8", ()=>{
    expect(funtions.addFuntion(5,3)).toBe(8);
})

test("calcular a + 3 deber dar como resultado mensaje Error solo se puede hacer operaciones entre numeros", ()=>{
    expect(funtions.addFuntion("a",3)).toBe("solo se puede hacer operaciones entre numeros");
})

test("calcular 3 + b deber dar como resultado mensaje Error solo se puede hacer operaciones entre numeros", ()=>{
    expect(funtions.addFuntion( 3,"b")).toBe("solo se puede hacer operaciones entre numeros");
})

test("calcular a + b deber dar como resultado mensaje Error solo se puede hacer operaciones entre numeros", ()=>{
    expect(funtions.addFuntion( "a","b")).toBe("solo se puede hacer operaciones entre numeros");
})

test("calcular 5  deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion", ()=>{
    expect(funtions.addFuntion(5)).toBe("Error se nesecitan dos numeros para ejecutar la funcion");
})

test("calcular 5  deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion", ()=>{
    expect(funtions.addFuntion()).toBe("Error se nesecitan dos numeros para ejecutar la funcion");
})

funtions.addFuntion(2,4)