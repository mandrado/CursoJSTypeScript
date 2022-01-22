// import './form-control'

// forma de alterar o tipo do this de uma função:
export function funcao(this:Date, nome: string, age: number): void {
    console.log(this);
    console.log(nome, age);


}

// chamada da função passando os dois argumentos
funcao.call(new Date(), 'Mandrado', 46)
// com applay temos que passar os argumentos com um array
funcao.apply(new Date(), ['Mandrado', 46])
