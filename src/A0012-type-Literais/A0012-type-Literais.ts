let s = 10;
// tipo literal é um subtipo
x = 0b1010;

const j = 10;
const d = 100;

const pessoas = {
    nome: 'Mandrado' as const,
    sobrenome: 'Santos'
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor;

}

console.log(escolhaCor('Amarelo'));



