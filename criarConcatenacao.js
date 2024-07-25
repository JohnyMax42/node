const fs = require('fs')
const caminho = './arquivosTexto'
const codificacao = 'utf-8'
const nomeArquivo1 = 'arquivo1.txt'
const nomeArquivo2 = 'arquivo2.txt'
const nomeArquivoConc = 'arquivoConcatenado.txt'
const caminhoArquivo = `${caminho}/${nomeArquivoConc}`

fs.readFile(`${caminho}/${nomeArquivo1}`, codificacao, (erro, conteudo1) => {
    fs.readFile(`${caminho}/${nomeArquivo2}`, codificacao, (erro, conteudo2) => {
        fs.writeFile(caminhoArquivo, conteudo1 + conteudo2, (erro, dados)=>{
            if(erro){
                console.log(erro)
            } else{
                console.log('Arquivo criado com sucesso!')
                console.log('conteudo do arquivo: ')
                fs.readFile(caminhoArquivo, codificacao, (erro, conteudo)=>{
                    console.log(conteudo)
                })
            }
        })
        console.log(conteudo2)
    })
    console.log(conteudo1)
})