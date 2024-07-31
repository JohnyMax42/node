let num1 = 10
let num2 = 2

const soma = require('./somar');

const sub = require('./subtrair');

console.log(soma(num1, num2));
console.log(sub(num1, num2));

//

let horas = 200
let valor = 15

const salario = require('./salario');

console.log(salario(horas, valor));

//

let marca = 'uno'
let cor = 'branco'
let ano = 2020
let tipo = 'flex'

const carro = require('./carro');

console.log(carro(marca, cor, ano, tipo));
