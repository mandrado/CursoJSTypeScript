let x: any; // permite fazer qualquer coisa sem reclamar.

x = 100;
x = 'Luiz';
x = 900;
x = '10';
const a = 800;
console.log(x + a);

let y: unknown; // funciona de forma mais segura
// sempre que for receber algo que não sabemos o que ela vai ser, devemos usar
// unknown, mas sabendo que precisamos fazer uma checagem antes de utilizar

y = 100;
y = 'Luiz';
y = 900;
y = '10';

// para usar o y é necessário fazer uma checagem
if (typeof y === 'number')
console.log(y + a);



