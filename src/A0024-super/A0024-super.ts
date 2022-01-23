export class Pessoa {
    // super classe
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
    // subclasse ou classe filha
    // sobrescrevendo o método getNomeCompleto para Aluno
    // caracterizando o polimorfismo
    getNomeCompleto() : string {
        // fazendo algo antes, sem alterar o método principal
        console.log('Fazendo algo antes');
        // super se refere a classe pai
        // return super.getNomeCompleto();
        // também podemos obter o super diretamente para uma variável
        const result = super.getNomeCompleto();
        return 'retorno alterado: '  + result;
    }
}
export class Cliente extends Pessoa {
    // utilizando o método construtor da classe pai
    constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string,) {
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    }
    // subclasse ou classe filha
    // sobrescrevendo o método getNomeCompleto para Cliente
    // caracterizando o polimorfismo
    getNomeCompleto() : string {
        return 'Cliente: ' + this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Mandrado', 'Santos', 46, '111111111-11');
const aluno = new Aluno('Mandrado', 'Santos', 46, '111111111-11');
const cliente = new Cliente('Mandrado', 'Santos', 46, '111111111-11', 'sala 5');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(cliente);


