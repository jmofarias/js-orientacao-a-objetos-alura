import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    // static: para deixar a quantidade de contas igual a todas as minhas contas 
    static numeroDeContas = 0;

    // agencia é um atributo pq está dentro da classe
    // atributos públicos
    agencia;

    
    _cliente;

    // set: atribuir, colocar um valor
    // o cliente aqui não será um método ou função, será um acessor
    // evitando que o valor do cliente seja zero
    set cliente(novoValor){
        // se meu nome valor for instância de cliente
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    // get: acessor que vai pegar algo e retornar
    get cliente(){
        return this._cliente
    }

    // ou #saldo quer dizer que o objeto é privado
    // atributos privados
    _saldo = 0;

    // encapsulei o atributo saldo, não consigo fazer alterações diretamente nele
    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        // usando o acessor cliente
        this.cliente = cliente;
        // acessando o atributo static
        ContaCorrente.numeroDeContas += 1;
    }

    // método
    sacar(valor) {
        // this: para pegar o objeto da classe
        if(this._saldo >= valor){
            this._saldo -= valor;
            // o return faz parar a execução do método 
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            // parando a execução
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);       
        // conta.cidade = "Arapiraca" é possível fazer alterações na minha classe dentro do método
    }
}