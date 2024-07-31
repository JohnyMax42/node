const fs = require('fs')
const caminho = './arquivosTexto'
const codificacao = 'utf-8'
const nomeArquivo = 'receita.txt'
const caminhoArquivo = `${caminho}/${nomeArquivo}`
const conteudo = `Bolo de cenoura /n Ingredientes: /n 3 cenouras médias raladas /n 4 ovos /n 1 xícara de óelo /n 2 xícaras de açucar /n 2 xícaras de leite.`

fs.writeFile(caminhoArquivo, conteudo, (erro, dados)=>{
    if(erro){
        console.log(erro)
    } else{
        console.log('Arquivo cirado com sucesso!')
        console.log('conteudo do arquivo: ')
        console.log(dados)
    }
})