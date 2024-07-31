const fs = require('fs')
const lista = require('./atividadeListaJSON')
const caminho = './arquivosTexto'
const codificacao = 'utf-8'
const nomeArquivo = 'funcionarios.json'
const caminhoArquivo = `${caminho}/${nomeArquivo}`

fs.writeFile(caminhoArquivo, JSON.stringify(lista), (erro, dados)=>{
    if(erro){
        console.log(erro)
    } else {
        console.log('Arquivo cirado com sucesso!')
        console.log('conteudo do arquivo: ')
        fs.readFile(caminhoArquivo, codificacao, (erro, conteudo)=>{
            let devFront = conteudo.filter(funcionario => funcionario.cargo == "Desenvolvedor Front-end");
            if(erro) throw erro
            console.log(devFront)})
    }
})

