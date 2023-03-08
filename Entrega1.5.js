
// N1 ejercicio 1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require("fs")



function writeF (fileName,txt){
    fs.writeFile(`./Files/${fileName}.txt`,txt,(err)=>{
    if (err){throw err};console.log("archivo escrito correctamente")})
    
}

// N1 ejercicio 2
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

function readF (fileName){
    fs.readFile(`./Files/${fileName}.txt`,(err,data)=>{
        if (err){throw err};
        console.log(data.toString())
    })}

// N1 ejercicio 3
// Crea una funció que comprimeixi el fitxer del nivell 1.

const zlib = require("zlib")

function zipFile(fileN){
    const zipF = fileN.replace(".txt",".gz")
    const inputFile = fs.createReadStream("./files/"+fileN)
    const outputFile = fs.createWriteStream("./files/"+zipF)
    inputFile.pipe(zlib.createGzip()).pipe(outputFile)
    inputFile.on(`end`,()=>console.log("file compress"))
}

// N2 ejercicio 1
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

function intervalFunc (msg){
    setInterval(()=>console.log(msg),1000)
}

// N2 ejercicio 2
//Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador 
// utilizant Node Child Processes.
// https://www.geeksforgeeks.org/node-js-child-process/
const userDir = process.env.userprofile
fs.readdir(userDir,(err,files)=>{
if (err){throw err};{
console.log(files)}})

  
//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
//Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.
//Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
// Inclou un README amb instruccions per a l'execució de cada part.

// https://www.geeksforgeeks.org/node-js-crypto-createcipheriv-method/

function codFiles (nom){
    const txt = fs.readFileSync(`./files/${nom}.txt`) 
    fs.writeFile(`./files/${nom}base64.txt` ,txt.toString("base64"),
        (err)=>{if (err){throw err}
                    {console.log("base64 convertion done")}})
    fs.writeFile(`./files/${nom}hex.txt` ,txt.toString('hex'),
        (err)=>{if (err){throw err}
                    {console.log("hex convertion done")}})
                
    }

    const bf = require('node:buffer');
    const fs = require("fs")
    const crypto = require("crypto");
    const { scryptSync } = require('node:crypto');
    /*
    
    const algorithm = "aes-192-cbc"
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16)
    */
    const key = scryptSync(pasww,"salt",24);
        const iv = crypto.randomBytes(16);
    const encrypt= (nom,)=>{
        
        pasww = "0000"
        
        const algorithm = "aes-192-cbc";
        const readSteam = fs.createReadStream(`./files/${"nom"}.txt`);
        readSteam.pipe(crypto.createCipheriv(algorithm,key,iv)).pipe(fs.createWriteStream(`./files/${nom}cripto`))}
    
    //encrypt("test")
    
    const desencrypt= (nom,)=>{
        
        pasww = "0000"
        
        
        const algorithm = "aes-192-cbc";
        const readSteam = fs.createReadStream(`./files/${"nom"}`);
        readSteam.pipe(crypto.createDecipheriv(algorithm,key,iv)).pipe(fs.createWriteStream(`./files/${nom}.txt`))}
    
        desencrypt("testcripto")


