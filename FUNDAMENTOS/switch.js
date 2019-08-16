const imprimirresultado = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log("Conceito A")
            break
        case 8: case 7:
            console.log("Conceito B")
            break
        case 6: case 5: case 4:
            console.log("Conceito C")
            break
         case 3: case 2: case 1: case 0:
            console.log("Conceito D")
            break
        default:
            console.log("Nota Inválida")
            break
    }
}

imprimirresultado(10)
imprimirresultado(9.5)