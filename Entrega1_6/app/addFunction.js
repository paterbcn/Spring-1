// funcion que realiza la operacion matematica sumar entre 2 numeros




function addFuntion(n1,n2){
    const validPar = typeof(n2) === "undefined"
    const validNum = isNaN(n1) || isNaN(n2)
    if (validPar){return "Error se nesecitan dos numeros para ejecutar la funcion"}
        if (validNum){return "solo se puede hacer operaciones entre numeros"}{
            return n1+n2
            }
    
}

module.exports = {
    addFuntion
}
