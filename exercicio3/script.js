//
console.log ("  ")
console.log (" PARTE 1 ")
console.log ("  ")
const operacaoA = 5>20&&5<2
const operacaoB = 5===5||"5"
const operacaoC = !(20>50)
const operacaoD = !(20>50||50>60)


//
console.log ("5 é maior que 20 e também é menor que 2", operacaoA)
console.log ("5 é igual a 5 ou é igual a “5”", operacaoB)
console.log ("negação de (vinte é maior que cinquenta)", operacaoC)
console.log ("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", operacaoD)
console.log ("  ")
console.log (" PARTE 2 ")
console.log ("  ")


//parte 2 **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**  COMISSÃO DE JANEIRO 
console.log ("O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.")
console.log (" ")
// Salario e auxilio
const salario = Number (2000.00)
const creche = Number (45.50)
//Comissão por mês
const janeiro = Number (5784.50)
const fevereiro = Number (3418.41)
const marco = Number (4124.10)
const abril = Number (1874.00)
const maio = Number (7000.00)
const junho = Number (9450.00)
//contas
const fixoEauxilo = salario + creche
const comissaojaneiro = janeiro*0.1
const descontojaneiro = (salario+comissaojaneiro)*0.05
//INSS
const inss = salario*0.05
const janeiroInss = (fixoEauxilo+comissaojaneiro)*0.05
const fevereiroInss = (fixoEauxilo+(fevereiro*0.1))*0.05
const marcoInss = (fixoEauxilo+(marco*0.1))*0.05
const abrilInss = (fixoEauxilo+(abril*0.1))*0.05
const maioInss = (fixoEauxilo+(maio*0.1))*0.05
const junhoInss = (fixoEauxilo+(junho*0.1))*0.05

////
console.log ("O salário fixo mais o auxílio creche:", fixoEauxilo)
console.log ("Comissão em janeiro:", comissaojaneiro)
console.log ("Desconto em janeiro pelo INSS:", descontojaneiro)

//Salario final
const salariojaneiro = fixoEauxilo+comissaojaneiro-janeiroInss
const salariofevereiro = fixoEauxilo+(fevereiro*0.1)-fevereiroInss
const salariomarco = fixoEauxilo+(marco*0.1)-marcoInss
const salarioabril = fixoEauxilo+(abril*0.1)-abrilInss
const salariomaio = fixoEauxilo+(maio*0.1)-maioInss
const salariojunho  = fixoEauxilo+(junho*0.1)-junhoInss
//
console.log ("Salario final janeiro:", salariojaneiro)
console.log ("Salario final fevereiro:", salariofevereiro)
console.log ("Salario final março:", salariomarco)
console.log ("Salario final abril:", salarioabril)
console.log ("Salario final maio:", salariomaio)
console.log ("Salario final junho:", salariojunho)
///média
const media = ((salariojaneiro+salariofevereiro+salariomarco+salarioabril+salariomaio+salariojunho)/6)

console.log (" ")
console.log ("Média do salario:", media)