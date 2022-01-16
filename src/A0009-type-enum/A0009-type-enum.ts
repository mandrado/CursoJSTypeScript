// criando itens
enum Cores{
    VERMELHO, // 0
    AZUL, // 2
    AMARELO, // 3
    ROXO = 'ROXO',
}

// criando com atribuição do indice
enum Cores1{
    VERMELHO = 100, // 0
    AZUL = 200, // 2
    AMARELO = 300, // 3
}

console.log(Cores);
// acessando pelo valor, obtem-se o indice
console.log(Cores.VERMELHO);
// acessando pelo indice, obtem-se o valor
console.log(Cores.ROXO);

function escolhaACor(cor:Cores):void {
    console.log(Cores[cor]);

}

escolhaACor(2);

