// criar um tipo de objeto
type TemNome = {nome: string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};
// criar um objeto que pode ter noem, sobrenome ou idade
type Pessoa = TemNome | TemSobrenome | TemIdade;
// utilizando intersection types:
type Pessoa2 = TemNome & TemSobrenome & TemIdade; // AND


type conjAB = 'A' | 'B';
type conjAC = 'A' | 'C';
type conjAD = 'A' | 'D';

type Intersecao = conjAB & conjAC & conjAD; // = A




// Todos os campos são opcionais, exige-se apenas um
const pessoaA: Pessoa ={
    idade: 30,
    nome: 'Mandrado',

}

// todos os campos são obrigatórios
const pessoaB: Pessoa2 ={
    idade: 30,
    nome: 'Mandrado',
    sobrenome: 'Santos'
}


console.log(pessoaA);
console.log(pessoaB);

