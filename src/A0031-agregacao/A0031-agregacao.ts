/*
* A Agregação é um caso particular da associação,
* indica que uma das classes do relacionamento é uma
* parte, ou está contida em outra classe.
* As palavras chaves usadas para identificar uma agregação
* são: "consiste em", "contém", "é parte de".
*/

// criando a classe CarrinhoDeCompras
export class CarrinhoDeCompras {
    // atributo privado produtos
    private readonly produtos: Produto[] = [];

    // Operações inserirProdutos
    inserirProdutos(...produtos: Produto[]): void { // ... rest operator (receber um ou mais produtos)

  /* Um parâmetro rest permite que uma função aceite zero ou mais argumentos do tipo especificado.
  *  No TypeScript, os parâmetros rest seguem estas regras:
  * * Uma função tem apenas um parâmetro rest.
  * * O parâmetro rest aparece por último na lista de parâmetros.
  * * O tipo do parâmetro rest é um tipo de matriz . */

      for (const produto of produtos) {
        this.produtos.push(produto); // inserir o produto
      }
    }
    // Operações quantidadeProdutos
    quantidadeProdutos(): number {
      return this.produtos.length;
    }

    // Operações valorTotal
    valorTotal(): number {
        // fazer o reduce para somar os preços dos produtos no carrinho
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
  }

  // criando a classe Produto
  // que será agregada ao carrinho de compras
  export class Produto {
    constructor(
        // Atributos públicos nome e preço
        public nome: string,
        public preco: number
    ) {}
  }

  // criar os produtos
  const produto1 = new Produto('Camiseta', 49.9);
  const produto2 = new Produto('Caneca', 1.9);
  const produto3 = new Produto('Caneta', 0.9);

  // inseriro produtos no carrinho de compras
  const carrinhoDeCompras = new CarrinhoDeCompras();

  // inserindo produtos no carrionho.
  carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);

  // verificar a quantidade de produtos no carrinho
  console.log(carrinhoDeCompras.quantidadeProdutos());

  // verificando o valor total das compras
  console.log(carrinhoDeCompras.valorTotal());

