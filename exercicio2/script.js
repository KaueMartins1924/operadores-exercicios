const numero1 = (prompt("Inisira um numero:"))
const numero2 = (prompt ("Insira outro numero:"))

const pergunta1 = numero1 > numero2
const pergunta2 = numero1 === numero2
const construcao3 = numero1 % numero2
const pergunta3 = construcao3 === 0
const construcao4 = numero2 % numero1
const pergunta4 = construcao4 === 0

console.log ('O primeiro numero é maior que o segundo?', pergunta1)
console.log ("O primeiro numero é igual ao segundo?", pergunta2)
console.log ("O primeiro numero é divisível pelo segundo?", pergunta3)
console.log ("O segundo numero é divisível pelo primeiro?", pergunta4)