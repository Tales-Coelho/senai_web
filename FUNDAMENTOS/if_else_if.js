//dentro de uma função no JS o "this" é global
//fora de uma função o "this" é local
//neste caso o this se torna a nota
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirresultado = function(nota) {
    if(nota.entre(9,10)){
        console.log("Conceito A")
    }else if(nota.entre(7,8.9)){
        console.log("Conceito B")
    }else if(nota.entre(5,6.9)){
        console.log("Conceito C")
    }else if(nota.entre(0,4.9)){
        console.log("Conceito D")
    }else {
        console.log("Nota invalida")
    }
}

imprimirresultado(10)
imprimirresultado(8)
imprimirresultado(6)
imprimirresultado(4)