// O livro deve conter :
// - Título
// - Autor
// - Ano de Publicação
// - Status (disponível ou emprestado)

class Livro{
    #status
    constructor(titulo, autor, ano, status){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.#status = status;
    }
    getStatus(){return this.#status;}
    setStatus(status){this.#status = status;}    
}

class Biblioteca{
    //adicionar livro
    //emprestar livro
    //devolver livro

    constructor(){
        this.livros = [];
    }

    adicionarLivro(livro){
        if (livro !== undefined){
            this.livros.push(livro);
        }
        else{
            console.log("Não pode ser adicionado um livro indefinido");
        }
        
    }

    emprestarLivro(nomeLivro){
        this.livros.forEach(livro => {
            if (livro.titulo == nomeLivro){
                let status = livro.getStatus();
                if (status == 'disponível'){
                    livro.setStatus('emprestado');
                }
                else{
                    console.log("Livro já foi emprestado");
                }
            }
        });
    }

    devolverLivro(nomeLivro){
        this.livros.forEach(livro => {
            if (livro.titulo == nomeLivro){
                let status = livro.getStatus();
                if (status == 'emprestado'){
                    livro.setStatus('disponivel');
                }
                else{
                    console.log('Livro já consta como disponível no sistema');
                }
            }
        });
    }
}

let bibliotecaX = new Biblioteca(); // []

let livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 'emprestado');

let livro2 = new Livro('Harry Potter', 'J.K. Rowling', 1997, 'disponível');

let livro3 = new Livro('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943, 'disponível');

let livrosAdd = [livro1, livro2, livro3]

livrosAdd.forEach(livro => {
    bibliotecaX.adicionarLivro(livro);
})

// bibliotecaX.livros.forEach(livro => {
//     console.log(livro);
// })

bibliotecaX.emprestarLivro('Harry Potter');

bibliotecaX.devolverLivro('O Senhor dos Anéis')

// bibliotecaX.livros.forEach(livro => {
//     console.log(livro);
// })

console.log(bibliotecaX.livros[0].getStatus())
console.log(bibliotecaX.livros[1].getStatus())
console.log(bibliotecaX.livros[2].getStatus())

