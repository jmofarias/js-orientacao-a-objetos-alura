
export class Cliente {
    nome;
    
    // cpf é único para cada cliente 
    _cpf;

    get cpf() {
        return this.cpf;
    }

    // construindo o meu objeto
    constructor(nome, cpf){
        // associando o nome dos meus parâmetros nome e cpf com o nome e o cpf da minha classe
        this.nome = nome;
        this._cpf = cpf;
    }
}