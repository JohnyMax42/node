class Veiculos{
    constructor(modelo, anoFab, preco){
        this.modelo = modelo;
        this.anoFab = anoFab;
        this.preco = preco;
    }
    exibirInfo(){
    console.log(`o veiculo de modelo ${this.modelo}, do ano ${this.anoFab} tem o preço de ${this.preco} reais!`)
}
}

class Carros extends Veiculos{
    constructor(modelo, anoFab, preco, qtdPortas, combustivel){
        super(modelo, anoFab, preco)
        this.qtdPortas = qtdPortas;
        this.combustivel = combustivel;
    }
    exibirInfo(){
        super.exibirInfo();
        console.log(`também possui ${this.qtdPortas} portas e o tipo de combustivel é ${this.combustivel}`)
    }
}

class Motos extends Veiculos{
    constructor(modelo, anoFab, preco, qtdCilindradas, partida){
        super(modelo, anoFab, preco)
        this.qtdCilindradas = qtdCilindradas;
        this.partida = partida;
    }
    exibirInfo(){
        super.exibirInfo();
        console.log(`também possui ${this.qtdCilindradas} cilindradas e o tipo de partida é ${this.partida}`)
    }
}

const carro1 = new Carros('ferrari', '2025', 10000000, 4, 'eletrico')
carro1.exibirInfo()

const moto1 = new Motos('Honda', '2030', 1000000, 1500, 'automatica')
moto1.exibirInfo()