// funcion que realiza la operacion matematica division entre 2 numeros




function divFuntion(n1,n2){
    const ceroValid = n2 === 0
    const validPar = typeof(n2) === "undefined"
    const validNum = isNaN(n1) || isNaN(n2)
    if (validPar){return "Error se nesecitan dos numeros para ejecutar la funcion"}
        if (validNum){return "solo se puede hacer operaciones entre numeros"}{
                if(ceroValid){return "no se puede dividir entre 0"}{
                    return n1 / n2
            }}}
    


module.exports = {
    divFuntion
}
