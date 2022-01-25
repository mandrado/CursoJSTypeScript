export class Empresa{
    readonly nome: string;
    // cliando o campo colaborador do tipo protectec
    // para que possa ser acessado na classe em que foi criado e nas subclasses
    protected readonly colaboradores: Colaborador[] = [];
    // dados protegidos
    private readonly cnpj: string;

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
    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    }
    // metodo para exibir os colaboradores
   /**
    * mostrarColaboradores
    */
   mostrarColaboradores(): void {
       for (const colaborador of this.colaboradores) {
           console.log(colaborador);

       }

   }
}

export class Udemy extends Empresa{
    constructor(){
        super('Udemy', '11.111.111/0001-11')
    }
    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop();
        if (colaborador) return colaborador;
        return null;
    }
}


// criando a Classe colaborador para a Classe Empresa
export class Colaborador{
    // definindo o construtor de forma simplificada:
    // aqui é necessário indicar se o atributo que quer acessar é publico, privado ou protected.
    constructor(public readonly nome: string, public readonly sobrenome: string) {}
};


// criando a empresa
const empresa1 = new Udemy();
// criando os colaboradores
const colaborador1 = new Colaborador('Mandrado', 'Santos');
const colaborador2 = new Colaborador('Efigenia', 'Mascarenhas');
const colaborador3 = new Colaborador('Zilete', 'Silva');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

// console.log(empresa1.mostrarColaboradores());

const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
