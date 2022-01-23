export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) {}

    getIdade():number{
        return this.idade;
    }


    getCpf() : string {
        return this.cpf
    }


    getNomeCompleto() : string {
        return this.nome + ' ' + this.sobrenome;
    }
}

export class Aluno extends Pessoa {
    // sobrescrevendo o método getNomeCompleto para Aluno
    // caracterizando o polimorfismo
    getNomeCompleto() : string {
        return 'Aluno: ' + this.nome + ' ' + this.sobrenome;
    }
}
export class Cliente extends Pessoa {
    // sobrescrevendo o método getNomeCompleto para Cliente
    // caracterizando o polimorfismo
    getNomeCompleto() : string {
        return 'Cliente: ' + this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Mandrado', 'Santos', 46, '111111111-11');
const aluno = new Aluno('Mandrado', 'Santos', 46, '111111111-11');
const cliente = new Cliente('Mandrado', 'Santos', 46, '111111111-11');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());

