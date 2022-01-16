// criando um apelido para um tipo
type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida? : string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type corPreferida = CorRGB | CorCMYK;


const pessoa: Pessoa ={
    idade: 30,
    nome: 'Mandrado',
    salario: 200_000, // 200000

};

export function setCorPreferida(pessoa:Pessoa, cor: corPreferida): Pessoa {
    // Spread operator
    return {...pessoa, corPreferida: cor};
}


// objeto original
console.log(pessoa);
// objeto alterado:
console.log(setCorPreferida(pessoa, 'Azul'));

