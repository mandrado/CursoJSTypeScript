// função ou método que nunca vai retornar nada (never ou void)
export function criaErro(): never {
    throw new Error("Erro qualquer");

}

criaErro();

