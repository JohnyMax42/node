const http = require('http');
const porta = 3001;

const salario = require('./salario');

const servidor = http.createServer((req, res) => {
    res.write(`Salário: ${salario(200, 15)}`);
    res.end();
})

servidor.listen(porta);