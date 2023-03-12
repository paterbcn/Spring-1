const funtions = require("../app/AddAsyncFunctionN2E1.js")

// calcular 1,1,"a", da como resultado se necesita un numero
// calcular 1,1,1, da como resultado 6



jest.setTimeout(7000);

test("calcular 1,1,a, da como resultado se necesita un numero", async ()=>{
    try{
        const resul = await funtions.suma(1,1,"a")
    }catch(err){expect(err).toBe("se necesita un numero")}
})

test("calcular 1,1,1, da como resultado 6", async ()=>{
    try{
        const resul = await funtions.suma(1,1,1)
        expect(resul).toBe(6)
    }catch(err){expect(err).toBe("se necesita un numero")}
})

