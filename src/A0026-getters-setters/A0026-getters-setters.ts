export class Pessoa {
    // super classe
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        protected _cpf: string, // adiciona um anderline para poder fazer getter e setter na MANEIRA DO JAVASCRIPT
    ) {
        // TAMBÉM PODE-SE FAZER SETTER NESSE BLOCO
        this.cpf = _cpf;
    }
    // GETTER: permitir o acesso a um atributo privado agraves de um método público
    getNome():string{
        return this.nome;
    }

    getSobrenome():string{
        return this.sobrenome;
    }

    getIdade():number{
        return this.idade;
    }

    // MANEIRA ANTIGA DE UTILIZAR GETTER E SETTER:

    // SETTER: serve para configurar um novo valor
/*     setCpf(valor: string): void {
        this.cpf = valor
    }

    // GETTER: permitir o acesso a um atributo privado agraves de um método público
    getCpf() : string {
        // com o getter eu posso atuar nos valores, formatando
        // e ou editando o valor antes de prosseguir com a ação
        return this.cpf.replace(/\D/g, ''); // removendo os pontos e traços do cpf
    } */

    // MANEIRA DO JAVASCRIPT DE UTILIZAR GETTER E SETTER
    set cpf(cpf: string) {
        console.log('SETTER CHAMADO');

        this._cpf = cpf;
    }

    // GETTER: permitir o acesso a um atributo privado agraves de um método público
    get cpf() : string {
        console.log('GETTER CHAMADO');

        // com o getter eu posso atuar nos valores, formatando
        // e ou editando o valor antes de prosseguir com a ação
        return this._cpf.replace(/\D/g, ''); // removendo os pontos e traços do cpf
    }


    getNomeCompleto() : string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Mandrado', 'Santos', 46, '111111111-11');

  // MANEIRA ANTIGA DE UTILIZAR GETTER E SETTER:
/* pessoa.setCpf('123.456.789-99'); */

  // MANEIRA ANTIGA DE UTILIZAR GETTER E SETTER:
/* console.log(pessoa.getCpf()); */


// MANEIRA DO JAVASCRIPT DE UTILIZAR SETTER
pessoa.cpf = '123.456.789-99'

// MANEIRA DO JAVASCRIPT DE UTILIZAR GETTER
console.log(pessoa.cpf);

