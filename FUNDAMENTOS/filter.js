const produto = [
    {nome: 'computador', preco: 3000, fragil: true},
    {nome: 'ipad', preco: 5000, fragil: true},
    {nome: 'copo de vidro', preco: 5, fragil: true},
    {nome: 'copo de metal', preco: 12, fragil: false}
]

console.log(produto.filter(function(p){
    return false
}))


const fragil = produto => produto.fragil
const caro = produto => produto.preco >= 3000

console.log(produto.filter(fragil).filter(caro))