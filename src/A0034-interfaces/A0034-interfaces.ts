// quando usamos interfaces estamos modelando uma forma de um objeto

// convertemos type para interface
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// type é mais utilizado em programação funcional
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

// permite extender mais de um tipo de interface em uma mesma declaração
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

// para usar as intefaces é igual aos tipos, basta incluir a palavra implements
// isso quer dizer que estamos implementando nossos tipos criados
export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

// implementando interface como objeto é igual
// como é feito como objeto
const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Mandrado',
  sobrenome: 'Agora tá ok',
};

// criando a pessoa (instanciando a classe Pessoa)
const pessoa = new Pessoa('Mandrado', 'Santos');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
