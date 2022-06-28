import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 41223214556);
const cliente2 = new Cliente("Alice", 47803214556);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);


contaCorrenteRicardo._saldo = 100;
contaCorrenteRicardo.depositar(500);

// contaCorrenteRicardo.#saldo = 0; -> ocorre um erro informando que saldo é um campo privado

// contaCorrenteRicardo.depositar(100);

// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(valorSacado);

const conta2 = new ContaCorrente(1002, cliente2);

// conta2.cliente = new Cliente();
// conta2.cliente.nome = "Alice";
// conta2.cliente.cpf = 41223214556;

contaCorrenteRicardo.transferir(200, conta2)

console.log(contaCorrenteRicardo);
console.log(ContaCorrente.numeroDeContas);
