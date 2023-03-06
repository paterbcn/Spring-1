// N1 ejercicio 1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require("fs")
// opcion 1
fs.appendFile("./Files/testN1Ej1.txt","Prueba N1 ejercio 1",(err)=>{
    if (err){throw err};console.log("archivo creado satisfactoriamente")})

// opcion 2

fs.writeFile("./Files/testN1Ej1.txt","modificacion del texto generado anteriormente",(err)=>{
    if (err){throw err};console.log("archivo escrito correctamente")})

// N1 ejercicio 2
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

fs.readFile("./Files/testN1Ej1.txt","utf-8",(err,data)=>{
if (err){throw err};console.log(data)  })

// N1 ejercicio 3
// Crea una funció que comprimeixi el fitxer del nivell 1.







