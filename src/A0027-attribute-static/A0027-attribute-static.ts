export class Pessoa {
    // atributos staticos
    static idadePadrao = 0;
    static cpfPadrao = '000.000.000-00';
    // super classe
    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string, // adiciona um anderline para poder fazer getter e setter na MANEIRA DO JAVASCRIPT
    ) {}

    // métodos estáticos são métodos que podem ser acessados sem instanciar a classe.
    // só é acessível que buscado dentro da classe. Se instanciar ele não é disponibilizado.
    static falaOi(): void {
        console.log('Oi');

    }

    metodoNormal(): void {
        // não consegue chamar os métodos státicos com this
        // para chamar tem que chamar a classe e apontar o método
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);

    }


    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        // método estático para criar pessoa, com informações completas
        // devemos lançar a idade e o cpf com valores padrões para
        // poder criar uma pessoa com apenas nome e sobrenome
        /* return new Pessoa(nome, sobrenome, 0, '000.000.000-00') */
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao)
    }

}

const pessoa1 = new Pessoa('Mandrado', 'Santos', 46, '111111111-11');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Eigenia');
pessoa1.cpf = '123.456.789-99'
console.log(pessoa1);
console.log(pessoa1.metodoNormal());
Pessoa.falaOi();
console.log(pessoa2);
