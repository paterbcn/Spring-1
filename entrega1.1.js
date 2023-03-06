//N1 Ejercicio 1

function usuario(nombre) {
    console.log("Nombre de Usuario: " + nombre);

}

//N2 Ejercicio 1

function usuarioCom (nombre , apellido){
    var nom = nombre;
    var ap  = apellido;

    console.log(`Datos del Usuario
Nombre: ${nom}
Apellido: ${ap}
`)
}

//N2 Ejercicio 2

function interesC (capital,interes,años) {
    var inv = capital * ((1+interes/100)**años);
    return inv;

}

function CalcInverion(capital,interes,años){
    for (var i=1; i<=años ; i++){
        console.log(`Su inversion el año ${i} de ${interesC(capital,interes,i)}`)
    }
}

//N3 Ejercicio 1

function generador(num){
    var array=""
    for(var i=0 ; i<=num; i++){
        array +=i}
    return array
    }

function GenMatriz(num){
    var matriz =[];
    for (var i=0 ; i<=num ;i++){
        matriz.push(generador);}
    for (var n of matriz){
        console.log(n(num));
        
    }
}
GenMatriz(9)

//N3 Ejercicio 2

var usuario =(function (nom){console.log(`Nombre usuario: ${nom}`)})("agustin");

