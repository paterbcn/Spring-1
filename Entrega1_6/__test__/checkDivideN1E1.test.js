const funtions = require("../app/checkDivideN1E1.js")

// calculo "" y el resultado se necesita un numero
// calculo a y el resultado se necesita un numero
// calculo 2 y el resultado es divisible x 2
// calculo 3 y el resultado es no divisible x 2






test("calculo a y el resultado se necesita un numero", async ()=>{
   try{
   const resul = await funtions.divide()
   expect(resul).toBe("divisible x 2")
 }catch(err){expect(err).toBe("se necesita un numero")}
})



test("calculo a y el resultado se necesita un numero", async ()=>{
   try{
   const resul = await funtions.divide("a")
   expect(resul).toBe("divisible x 2")
 }catch(err){expect(err).toBe("se necesita un numero")}
})



test("calculo 2 y el resultado es divisible x 2", async ()=>{
  const resul = await funtions.divide(2)
  expect(resul).toBe("divisible x 2")
}
)

test("calculo 3 y el resultado es no divisible x 2", async ()=>{
   try{
   const resul = await funtions.divide(3)
   expect(resul).toBe("divisible x 2")
 }catch(err){expect(err).toBe("no divisible x 2")}
})

    