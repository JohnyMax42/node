class Animal{
    //declarar campos privados
    #especie
    #nome
    //metodo construtor
    constructor(especie, tamanho, cor, nome){
        //atributos
        this.#especie = especie;
        this.tamanho = tamanho;
        this.cor = cor;
        this.#nome = nome;
    }
//metodos
falar(){
    console.log(`O animal ${this.getNome()} fez algum som`)
}
comer(){
    console.log(`O animal ${this.getNome()} comeu`);
}
dormir(){
    console.log(`O animal ${this.getNome()} dormiu`)
}

getNome(){return this.#nome;}
setNome(nome){this.#nome = nome;}
}

const animal1 = new Animal('gato', 'gordo', 'cinza', 'Kira')
console.log(animal1.nome)
animal1.cor = 'cinza e branco'
console.log(animal1)
console.log(animal1.getNome())
animal1.setNome('Shakira')
console.log(animal1.getNome())

const animal2 = new Animal('cachorro', 'pequeno', 'branco', 'Buguelo')
console.log(animal2.nome)

module.exports = Animal;