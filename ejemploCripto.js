const bf = require('node:buffer');
    const fs = require("fs")
    const crypto = require("crypto");
    const { scryptSync } = require('node:crypto');
const { writeFile } = require('node:fs/promises');
    /*
    
    const algorithm = "aes-192-cbc"
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16)
    */
    
    
    //encrypt("test")
   /* 
    const desencrypt= (nom,)=>{
        
        pasww = "0000"
        
        
        const algorithm = "aes-192-cbc";
        const readSteam = fs.createReadStream(`./files/${"nom"}`);
        readSteam.pipe(crypto.createDecipheriv(algorithm,key,iv)).pipe(fs.createWriteStream(`./files/${nom}.txt`))}
    
        desencrypt("testcripto")

*/
        const key = "123456781234567812345678";
        const iv = crypto.randomBytes(16);
        const mensaje = "hello world!!"
        const algorithm = "aes-192-cbc";
      
   
  
        
        const readSteam = fs.createReadStream("./txt");
        const cipher = crypto.createCipheriv(algorithm,key,iv)
        let encrypthed = cipher.update(mensaje,"utf-8","hex")
        encrypthed += cipher.final("hex")
        console.log(encrypthed)
       // fs.writeFile("./criptotxt",encrypthed,(err)=>{if (err)console.log(err)})

     
        
        
        const decipher = crypto.createDecipheriv(algorithm,key,iv)
        let desencrypthed = decipher.update(encrypthed,"hex","utf-8")
        desencrypthed += decipher.final("utf-8")
        console.log(desencrypthed)
        
       