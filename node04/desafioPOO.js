class Produto{
    #preco
    constructor(nome, preco, validade){
        this.nome = nome;
        this.#preco = preco;
        this.validade = validade;
    }
    exibirInfo(){
        console.log(`Produto: ${this.nome}\nPreço: ${this.getPreco()} reais\nValidade: ${this.validade}`)
    }
    getPreco(){return this.#preco;}
    detPreco(preco){this.#preco = preco}
}

class Alimento extends Produto{
    constructor(nome, preco, validade, peso, perecivel){
        super(nome, preco, validade)
        this.peso = peso;
        this.perecivel = perecivel;
    }
    exibirInfo(){
        super.exibirInfo();
        console.log(`Peso: ${this.peso}\nPerecivel: ${this.perecivel}\n`)
    }
}

class Bebida extends Produto{
    constructor(nome, preco, validade, volume, alcoolica){
        super(nome, preco, validade)
        this.volume = volume;
        this.alcoolica = alcoolica;
    }
    exibirInfo(){
        super.exibirInfo();
        console.log(`Volume: ${this.volume}\nAlcoolica: ${this.alcoolica}\n`)
    }
}

const alimento1 = new Alimento('biscoito', 5, '12/24', '200 gramas', true);

const bebida1 = new Bebida('refrigerante', 10, '12/24', '2 litros', false);

alimento1.exibirInfo();
bebida1.exibirInfo();