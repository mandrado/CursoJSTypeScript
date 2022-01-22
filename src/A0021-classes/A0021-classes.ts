export class Empresa{
    // o atributo public é redundante, pois por padrão é publico
    // se não colocar ele será público.
    public readonly nome: string;
    // cliando o campo colaborador do tipo privado e somente leitura
    // que recebe inicialmente uma lista vazia da classe colaborador
    private readonly colaboradores: Colaborador[] = [];
    // dados protegidos
    protected readonly cnpj: string;


    // construtor
    constructor(nome: string, cnpj: string){
        // inicializando o nome somente leitura
        // com seu primeiro e único valor
        this.nome = nome;
        this.cnpj = cnpj;
    }

    // criar o metodo para carregar os colaboradores
    /**
     * adicionaColaborador
     */
    public adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    }

    // metodo para exibir os colaboradores
   /**
    * mostrarColaboradores
    */
   public mostrarColaboradores(): void {
       for (const colaborador of this.colaboradores) {
           console.log(colaborador);

       }

   }
}

// criando a Classe colaborador para a Classe Empresa
export class Colaborador{
    // definindo o construtor de forma simplificada:
    constructor(public readonly nome: string, public readonly sobrenome: string) {}
};

// criando a empresa
const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
// criando os colaboradores
const colaborador1 = new Colaborador('Mandrado', 'Santos');
const colaborador2 = new Colaborador('Efigenia', 'Mascarenhas');
const colaborador3 = new Colaborador('Zilete', 'Silva');


//Exibindo os dados

console.log(empresa1);
console.log(empresa1.nome);
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);

empresa1.mostrarColaboradores();



