let a = 'texto'
a = function(c, d){

    return c+d;

}

console.log(a(5,2))

const soma = (n1, n2) => n1+n2 // ou {return n1+n2}

console.log(soma(15,2))

const imprimir = A => console.log(A)

imprimir('Aula de JS')

//Operador ternário

const resultado = nota => nota>=7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(6))