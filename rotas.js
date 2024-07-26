// (/) ---> informações api
// (/funcionarios) ---> todos os funcionarios
// (/funcionarios/desenvolvedores) ---> funcionarios desenvolvedores

const http = require('http');

const todosFuncionarios = require('./criarArquivosJSON');

const desenvolvedores = todosFuncionarios.filter(funcionario => funcionario.cago === 'Desenvolvedor Front-end' || funcionario.cargo === 'Desenvolvedor Back-end' || funcionario.cargo === 'Desenvolvedor Full-stack')

