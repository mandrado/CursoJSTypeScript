// Singleton - GoF | Factory Method - GoF

export class Database {
    // criar uma tributo estático privado para salvar a instância criada
    private static database: Database;

    // acrescentando private a frente do construtor
    private constructor (
        private host: string,
        private user: string,
        private password: string,
    ){}

    connect(): void{
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password} `);

    }

    // após acrescentar private a frente do construtor
    // criar um método stático (Factory Method)
    static getDatabase(host: string, user: string, password: string): Database {
        // checar se a classe database já foi instanciada
        if (Database.database) {
            console.log(`Retornando intância já criada:`);
            return Database.database;
        }
        // se não existir um conexão com o banco de dados, inicie uma nova instância
        Database.database = new Database(host, user, password);
        console.log(`Criando uma nova intância:`);
        return Database.database;

    }
}

// instanciando a classe Database publica (remova private da frente do construtor)
/* const db1 = new Database('localhost', 'root', '123456');
db1.connect(); */

// esse tipo de instanciamento acima, permite que possa existir mais de uma conexão
/* const db2 = new Database('localhost', 'root', '123456');
db2.connect(); */

// compare que as conexões, apesar de apontar para o mesmo banco, são diferentes:
/* console.log(db1 === db2); */  // retorna false

// usando o padrão Singleton chamando
// retornar uma nova instância caso não exita uma instância criada
// ou retorne a instância já criada.


const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

// compare que agora são iguais as conexões:
console.log(db1 === db2);  // retorna true

