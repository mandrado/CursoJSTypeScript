// implementando tipos (tipos não contém valores)

type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

// para usar os tipos é necessário incluir a palavra implements
// isso quer dizer que estamos implementando nossos tipos criados
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

// criando a pessoa (instanciando a classe Pessoa)
const pessoa = new Pessoa('Mandrado', 'Santos');
console.log(pessoa.nomeCompleto());
