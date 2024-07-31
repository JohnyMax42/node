const fs = require('fs')
const pets = require('../node02/listaObjetos')
const caminho = './arquivosTexto'
const codificacao = 'utf-8'
const nomeArquivo = 'pets.json'
const caminhoArquivo = `${caminho}/${nomeArquivo}`

fs.writeFile(caminhoArquivo, JSON.stringify(pets), (erro, dados)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log('arquivo criado com sucesso!')
        console.log('conteúdo do arquivo:')
        fs.readFile(caminhoArquivo, codificacao, (erro, conteudo)=>{
            if(erro) throw erro
            console.log(conteudo)})
    }
})