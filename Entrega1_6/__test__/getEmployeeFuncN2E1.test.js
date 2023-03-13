const funtions = require("../app/getEmployeeFuncN2E1.js")

describe("se pasa un  parametro incorrecto a la funcion"), ()=> {

    test("buscar id a da como resultado mensaje el id tiene que ser un numero entero" ,()=>{
        return funtions.getemployees("a")
        .catch(msg=>expect(msg).toBe("el id tiene que ser un numero entero"))
    })

    test("buscar id 0.5 da como resultado mensaje el id tiene que ser un numero entero positivo" ,()=>{
        return funtions.getemployees(0.5)
        .catch(msg=>expect(msg).toBe("el id tiene que ser un numero entero positivo"))
    })

    test("buscar id -1 da como resultado mensaje el id tiene que ser un numero entero positivo" ,()=>{
        return funtions.getemployees(-1)
        .catch(msg=>expect(msg).toBe("el id tiene que ser un numero entero positivo"))
    })
}


describe("no se pasan todos los paramentros"), ()=> {

    test("buscar id '' da como resultado mensaje el id tiene que ser un numero entero" ,()=>{
        return funtions.getemployees()
        .catch(msg=>expect(msg).toBe("el id tiene que ser un numero entero"))
    })


}

describe("se pasan todos los paramentros"), ()=> {

    test("buscar id 1 da como resultado {id: 1,name: 'Linux Torvalds'}" ,()=>{
        return funtions.getemployees(1)
        .then(obj=>expect(obj).toEqual({id: 1,name: 'Linux Torvalds'}))
            
    })
    
    test("buscar id 4 da como resultado mensaje el id no se encuentra en la base" ,()=>{
        return funtions.getemployees(4)
        .catch(msg=>expect(msg).toBe("el id no se encuentra en la base"))
    })

}








