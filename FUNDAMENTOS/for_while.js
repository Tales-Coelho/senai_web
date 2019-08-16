//atribuindo for e while (laço de repetição)

let cont = 1

/*laço de repetição while
while(cont<=10){
    console.log(`Valor do contador: ${cont}`)
    cont++
}
*/

/*laço de repetição for
for(let i = 0; i<=10; i++){
    console.log(`Valor do contador: ${i}`)
}
*/
const notas = [6.9, 7, 6, 10]

for(let i = 0; i<notas.length; i++){
    console.log(`Nota ${i+1}: ${notas[i]}`)
}