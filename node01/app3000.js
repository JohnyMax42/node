const http = require('http');
const porta = 3000;

const carro = require('./carro');

const servidor = http.createServer((requisicao, resposta) => {
    resposta.write(carro('uno', 'branco', 2020, 'eletrico'))
    resposta.end();
}).listen(porta)