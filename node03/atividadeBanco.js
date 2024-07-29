class ContaCorrente{
    #senha
    #saldo
    #limiteEmprestimo
    #limiteTransferencia
    constructor(titular, agencia, conta, saldo, senha, limiteEmprestimo, temEmprestimo, limiteTransferencia){
        this.titular = titular;
        this.agencia = agencia;
        this.conta = conta;
        this.#saldo = saldo;
        this.#senha = senha;
        this.#limiteEmprestimo = limiteEmprestimo;
        this.temEmprestimo = temEmprestimo;
        this.#limiteTransferencia = limiteTransferencia;
    }
    verSaldo(senha){
        if (senha == this.senha) {
            console.log(`o saldo é de ${saldo}`)            
        } else {
            console.log(`senha incorreta`)
        }
    }
    sacar(senha, saque){}
    depositar(senha, deposito){}
    emprestimo(senha, empretimo){}
}