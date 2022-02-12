/**
 * É um tipo de relação muito forte.
 * Composição é definido como uma agregação onde uma classe
 * que está contida na outra "vive" e constitui a outra.
 * Se o objeto da classe que contém for destruído, as classes da
 * agregação de composição serão destruídas juntamente, já que
 * as mesmas fazem parte da outra.
 */

//  criando a classe carro
export class Carro {
    // O atributo motor é do tipo Motor.
    // relação de composição é criar a um atributo
    // como uma instância de uma outra classe.
    private readonly motor = new Motor();

    // relaçao de composição entre o carro e o motor:
    ligar(): void {
      this.motor.ligar();
    }

    acelerar(): void {
      this.motor.acelerar();
    }

    parar(): void {
      this.motor.parar();
    }

    desligar(): void {
      this.motor.desligar();
    }
}

// criando a classe motor do carro
// essa classe será instanciada dentro da classe Carro
export class Motor {
    // operações da classe motor:
    // método
    ligar(): void {
      console.log('Motor está ligado...');
    }
    // método
    acelerar(): void {
      console.log('Motor está acelerando...');
    }
    // método
    parar(): void {
      console.log('Motor está parado...');
    }
    // método
    desligar(): void {
      console.log('Motor está desligado...');
    }
}

// instanciando um novo carro
// ele já vem com motor!
const carro = new Carro();

// utilizando a o carro (classe carro)
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
