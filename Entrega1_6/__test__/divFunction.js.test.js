const funtions = require("../app/divFunction.js")

describe("se pasa un  parametro incorrecto a la funcion"), ()=> {

    test("Calcular 3 / 0  debe dar como resultado mensaje no se puede dividir entre 0",()=>{
        expect(funtions.divFuntion(3,0)).toBe("no se puede dividir entre 0")
    })
    
    test("calcular a / 3 deber dar como resultado mensaje  solo se puede hacer operaciones entre numero",()=>{
        expect(funtions.divFuntion("a",3)).toBe("solo se puede hacer operaciones entre numeros")
    })
    
    
    test("calcular 3 / b deber dar como resultado mensaje  solo se puede hacer operaciones entre numeros",()=>{
        expect(funtions.divFuntion(3,"b")).toBe("solo se puede hacer operaciones entre numeros")
    })
    
    test("calcular a / b deber dar como resultado mensaje  solo se puede hacer operaciones entre numeros",()=>{
        expect(funtions.divFuntion("a","b")).toBe("solo se puede hacer operaciones entre numeros")
    })

}


describe("no se pasan todos los paramentros"), ()=> {

    test("calcular 5  deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion",()=>{
        expect(funtions.divFuntion(5)).toBe("Error se nesecitan dos numeros para ejecutar la funcion")
    })
    
    test("calcular   deber dar como resultado Error se nesecitan dos numeros para ejecutar la funcion",()=>{
        expect(funtions.divFuntion()).toBe("Error se nesecitan dos numeros para ejecutar la funcion")
    })



}



describe("se pasan todos los paramentros"), ()=> {


    test("calcular 4 / 2 debe dar como resultado 2",()=>{
        expect(funtions.divFuntion(4,2)).toBe(2)
    })
    
    test("Calcular 2 / -0.5  debe dar como resultado -4",()=>{
        expect(funtions.divFuntion(2,-0.5)).toBe(-4)
    })

}


