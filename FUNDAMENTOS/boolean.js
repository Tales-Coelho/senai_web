let texto = true

console.log(texto)

console.log('Elementos VERDADEIROS')
console.log(!!'string') //string
console.log(!!' ') //string
console.log(!!1) //números inteiros
console.log(!!'[]') //array ou vetor
console.log(!!'{}') //objetos

console.log('Elementos FALSOS')
console.log(!!0) //zero
console.log(!!'') //vazia
console.log(!!NaN) //not a number
console.log(!!null) //nulo
console.log(!!undefined) //indefinido

//diferença entre NULL e undefined
let teste //quando não recebe valor é considerada undefined.
let teste1 = null //considerada nula quando não há elementos dentro dela ou quando não aponta para nem um espaço na memória.
console.log(teste)
console.log(teste1)

console.log("Testando OU")
console.log(!!("" && null && 0 && " "))

