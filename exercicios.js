// 1. Crie uma variável chamada `nome` e atribua seu nome a ela. Exiba o nome no console.
let nome ="Isadora"
console.log(nome)

// 2. Crie uma constante chamada `PI` e atribua o valor 3.14. Exiba o valor no console.
const PI = 3.14;
console.log(PI);

// 3. Crie uma variável `idade`, atribua um valor e depois altere para um novo valor. Exiba ambos no console.
let idade = 15
console.log(idade);
idade = 30
console.log(idade);

// 4. Crie duas variáveis de string, `primeiroNome` e `sobrenome`, e exiba o nome completo concatenado.
let primeiroNome = "Isadora"
let sobrenome = "Godoi"
console.log(primeiroNome + sobrenome)

// 5. Dada a string `mensagem = "Olá, mundo!"`, exiba a mensagem em letras maiúsculas.
let mensagem = "Olá, mundo!"
console.log(mensagem.toUpperCase())

// 6. Crie um array com os nomes de três frutas e exiba o segundo elemento do array.
let frutas = ["Maçã", "Banana", "Laranja"]
console.log(frutas[1])

// 7. Crie um array com três números e adicione um novo número no final. Exiba o array atualizado.
let numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros)

// 8. Crie duas variáveis, `a` e `b`, atribua valores numéricos a elas e exiba a soma.
let a = 5
let b = 10
console.log(a + b)

// 9. Calcule a média de três números armazenados em variáveis e exiba o resultado.
let num1 = 7
let num2 = 8
let num3 = 9
let media = (num1 + num2 + num3)
console.log(media)

// 10. Crie uma variável `contador` inicializada em 0, incremente-a três vezes e exiba seu valor final.
let contador = 0
contador++
contador++
contador++
console.log(contador)

// 11. Crie duas variáveis booleanas, `chuvendo` e `frio`, e use um operador lógico para verificar se deve levar um guarda-chuva.
let chuvendo = true
let frio = false
console.log(`devo levar guarda-chuva ${chuvendo} e devo levar casaco ${frio}`)

// 12. Crie uma variável `idade` e use um operador lógico para verificar se a pessoa pode dirigir (idade >= 18).
let idadeParaDirigir = 20
console.log( `Thalia pode dirigir? ${idadeParaDirigir >=18}`)

// 13. Crie duas variáveis `x` e `y`, atribua valores diferentes e verifique se são iguais.
let x = 5
let y = 10
console.log("5" === "10")

// 14. Crie uma variável `idade` e verifique se a pessoa é maior de idade (idade >= 18) e exiba uma mensagem correspondente.
let idade1 = 15
console.log(`Godoi é maior de idade? ${idade1>= 18}`)

// 15. Crie duas strings, `senha1` e `senha2`, e verifique se elas são iguais.
let senha1 = "senha123"
let senha2 = "senha123"
console.log(senha1 === senha2)

// 16. Crie uma string e exiba o número de caracteres que ela contém.
let stringExemplo = "Piquet"
console.log(stringExemplo.length)


// 18. Crie uma variável numérica e verifique se é par ou ímpar usando um operador aritmético.
let numero = 4
console.log(numero % 2 === 0)

// 20. Crie duas variáveis, `nota1` e `nota2`, calcule a média e verifique se a média é maior ou igual a 7.
let nota1= 7
let nota2= 9
let media2 = (nota1 + nota2) /2
console.log(`O aluno foi aprovado? ${media2 >= 7}`)