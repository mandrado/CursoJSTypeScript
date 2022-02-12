// Classes, métodos e atributos abstratos
// criar um joguinho com personagens que faz ataque e perde vida se atacado.

// para classe ser abstrata, acrescentar abstract na frente da classe
export abstract class Personagem {
    //forçar todas as classes a implementar emoji
    protected abstract emoji: string;

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,

    ) {

    }

    atacar(personagem: Personagem): void{
        console.log(`${this.nome} está atacando... `);
        this.bordao();
        personagem.perderVida(this.ataque);

    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida. `);
    }
    // bordão é o que o personagem diz quando faz um ataque
    /*  bordao(): void{
        console.log('Bordão'); */
    // criar um método abstrato sem corpo, um contrato
    // em que todos serão obrigados a seguir
    abstract bordao(): void;




}

export class Guerreira extends Personagem{
    // sobrescrevendo a classe bordão
    protected emoji = '\u{1F9DD}';
    bordao(): void {
        console.log(this.emoji + ' GUERREIRAAA AOOOO ATAQUEEEE!');
    }
}
export class Monstro extends Personagem{
    protected emoji = '\u{1F9DF}';
    bordao(): void {
        console.log(this.emoji + ' MOSTROOOO AOOOO ATAQUEEEE!');

    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);


guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);

