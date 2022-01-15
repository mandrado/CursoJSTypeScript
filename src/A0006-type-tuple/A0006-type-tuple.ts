// tuplas
const dadosCliente: [number, string] = [1, 'Mandrado'];
const dadosCliente1: [number, string, string] = [1, 'Mandrado', 'Santos'];
const dadosCliente2: [number, string, string?] = [1, 'Mandrado', '? = Opcional'];
// tupla imutável: somente leitura:
const dadosCliente3: readonly [number, string, ...string[]] = [1, 'Mandrado', 'Mandrado'];

// readonly array
const arrayA: readonly string[] = ['Mandrado', 'santos'];
const arrayB: ReadonlyArray<string> = ['Mandrado', 'santos'];


dadosCliente[0] = 2;
dadosCliente[1] = 'Teste';

console.log(dadosCliente);
console.log(dadosCliente1);
console.log(dadosCliente2);
