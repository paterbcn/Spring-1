
const funtions = require("../app/verificadorFuntionN1E2.js")





test("verificar  1 debe dar como resultado autorizado" , done =>{
    const idBase = [1,2,3,4,5]
    function callback (msg){
        expect(msg).toBe("autorizado")
        done()
    }
    funtions.verificador(1,idBase,callback)
})

test("verificar  b debe dar como resultado msg el id tiene que ser un numero entero" , done =>{
    const idBase = [1,2,3,4,5]
    function callback (msg){
        expect(msg).toBe("el id tiene que ser un numero entero")
        done()
    }
    funtions.verificador("b",idBase,callback)
})

test("verificar  0.5 debe dar como resultado msg el id tiene que ser un numero entero" , done =>{
    const idBase = [1,2,3,4,5]
    function callback (msg){
        expect(msg).toBe("el id tiene que ser un numero entero")
        done()
    }
    funtions.verificador(0.5,idBase,callback)
})

test("verificar  0.5 debe dar como resultado msg el id tiene que ser un numero entero" , done =>{
    const idBase = [1,2,3,4,5]
    function callback (msg){
        expect(msg).toBe("el id tiene que ser un numero entero")
        done()
    }
    funtions.verificador(0.5,idBase,callback)
})

test("verificar  1 en el array [1,2,3,4,5], debe dar como resultado  autorizado" , done =>{
    const idBase = [1,2,3,4,5]
    function callback (msg){
        expect(msg).toBe("autorizado")
        done()
    }
    funtions.verificador(1,idBase,callback)
})

test("verificar  8 en el array [1,2,3,4,5], debe dar como resultado  no autorizado" , done =>{
    const idBase = [1,2,3,4,5]
    function callback (msg){
        expect(msg).toBe("no autorizado")
        done()
    }
    funtions.verificador(8,idBase,callback)
})