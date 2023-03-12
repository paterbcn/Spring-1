// La funcion verificador , recibe un numero de id , un array con los numeros de id  
//y una funcion que imprima un mensaje en la pantalla en. Si el id se encuntra se imprime el 
// el mensaje "autorizado" , si no se encuentra  "no autorizado"


const verificador =  (id,base,callback) => {
    const verId =   Number.isInteger(id)
    if (verId){ 
        if (base.includes(id)){
            return callback("autorizado")}
        return callback("no autorizado")}
    return callback("el id tiene que ser un numero entero")
    }



/*

const verificador =  (id,base , callback) => {
    if (base.includes(id)){
        callback("autorizado")
    }else callback("no autorizado")}
*/

    module.exports = {
        verificador
    }
