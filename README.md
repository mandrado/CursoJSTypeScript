# CursoJSTypeScript
## 248. Pasta do projeto TypeScript
## 249. Repositório da seção TypeScript
Código Original poderá ser encontrado em: https://github.com/luizomf/cursojstypescript
## 250. Instalando o TypeScript
Instalar como dependência de desenvolvimento:

`npm init -y`

`npm i typescript -D`

## 251. Instalando o ts-node e Code Runner

`npm i ts-node -D`

[formulahendry.code-runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

### cria a pasta .vscode para armazenar as configurações do projeto

crie o arquivo settings.json:

```
{ "code-runner.executorMap": {
    "typescript": "npx ts-node --files --transpile-only",
}}
```

## 252. Instalando e configurando o ESLint

`npm i eslint -D`

* tenha configurado o [dbaeumer.vscode-eslint](https://eslint.org/)

Fazer a integração do EsLint com o TypeScritp

`npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D`

Criar o arquivo .eslintrc.js
Copiar o conteúdo do repositório https://github.com/luizomf/cursojstypescript/blob/master/.eslintrc.js

```
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
```



## 253. Instalando e configurando o Prettier

`npm i prettier eslint-config-prettier eslint-plugin-prettier -D`

Criar o arquivo .prettierrc.js
Inserir as seguintes configurações:



```
module.exports = {
    semi: true, // ponto e vírgula sim
    trailingComma: 'all', // colocar uma vírgula pendente no final da última linha
    singleQuote: true, // habilita aspas simples no JavaScript e TypeScript
    printWidth: 120, // largura máxima da linha de 120, o recomendado por alguns é 80
    tabWidth: 2, // tamanho da tabulação de 2 (dois) espaços
}
```

## 254. tsconfig.json (inicial)

A execução tsclocal irá compilar o projeto mais próximo definido por um tsconfig.json, você pode compilar um conjunto de arquivos TypeScript passando um conjunto de arquivos que você deseja.

[Opções tsc CLI ](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

Como iniciar um projeto tsc do zero.

`npx tsc --init`

O comando cria o arquivo tsconfig.json

Neste arquivo vamos incluir duas informações sobre bibliotecas usadas no projeto
Descomente as linhas e deixe conforme abaixo:

`"lib": ["ESNext", "DOM"],  /* Specify a set of bundled library declaration files that describe the target runtime environment. */`

Em qual pasta irá disponíbilizar os arquivos de compilação
`"rootDir": "./dist",       /* Specify the root folder within your source files. */`

Os arquivos de entrada deverão estar na pasta /src . tudo que for de TypeScript estarão dentro desta pasta

Acrescente no final do arquivo:

```
,
  "include": [
    "./src"
  ]
}
```

O arquivo final sem as linhas comentadas:

```
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "lib": ["ESNext", "DOM"],                            /* Specify a set of bundled library declaration files that describe the target runtime environment. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "./dist",                                  /* Specify the root folder within your source files. */

    /* JavaScript Support */
    files. */

    /* Emit */
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */

    /* Interop Constraints */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */

    /* Completeness */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  },
  "include": [
    "./src"                                             /* ascrescentando as pastas de entrada do projeto */
  ]
}
```

### Dica:
* Comando `"typescript": "clear && npx ts-node --files --transpile-only"` no arquivo `.vscode/settings.json` do projeto (não funcionou no Windows/Ubuntu)
* Vá em files -> Preferences -> Settings, pesquisar por 'clear' e ativar a opção na extensão do code runner

### compilar tudo para testar
`npx tsc`

## 255. .editorconfig
Importante que todos tenham as mesmas configurações do projeto.
Para isso devemos gerar o arquivo .editorconfig

Clique com o botão direito na raiz do projeto e depois em `Generate .editorconfig`.

Conteúdo do arquivo deve ficar, mesmo que esteja no Windows:

```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = ture
insert_final_newline = true
```

## 256. Sintaxe de Type Annotations no TypeScript

Típos básicos, Arrays, Objetos, Funções

[Ver A0001-type-annotation.ts](./src/A0001-type-annotation/A0001-type-annotation.ts)

## 257. Tipo any
Um tipo que geralmente não iremos querer receber.
Utilize any apenas em último caso, de preferência seja específico no tipo de dado que quer receber

[Ver A0002-type-any.ts](./src/A0002-type-any/A0002-type-any.ts)

## 258. Tipo void
O tipo void quer dizer que uma função ou um método que não retorna nada:

[Ver A0003-type-void.ts](./src/A0003-type-void/A0003-type-void.ts)

## 259. Tipo object (objetos em geral)
[Ver A0004-type-object.ts](./src/A0004-type-object/A0004-type-object.ts)

## 260. Tipo array

Implementação de tipos de arrays com TypeScript:

[Ver A0005-type-array.ts](./src/A0005-type-array/A0005-type-array.ts)

## 261. Tipo tuple

Implementação de tipos de tuple com TypeScript:

[Ver A0006-type-tuple.ts](./src/A0006-type-tuple/A0006-type-tuple.ts)

## 262. Tipos null e undefined

[Ver A0007-type-null-e-undefined.ts](./src/A0007-type-null-e-undefined/A0007-type-null-e-undefined.ts)

## 263. Tipo never

[Ver A0008-type-never.ts](./src/A0008-type-never/A0008-type-never.ts)

## 264. Tipo Enum

[Ver A0009-type-enum.ts](./src/A0009-type-enum/A0009-type-enum.ts)

## 265. Tipo unknown

[Ver A0010-type-unknown.ts](./src/A0010-type-unknown/A0010-type-unknown.ts)

## 266. Union Types

[Ver A0011-type-Union.ts](./src/A0011-type-Union/A0011-type-Union.ts)

## 267. Tipos Literais

[Ver A0012-type-Literais.ts](./src/A0012-type-Literais/A0012-type-Literais.ts)

## 268. Type alias

[Ver A0013-type-alias.ts](./src/A0013-type-alias/A0013-type-alias.ts)

## 269. Intersection Types

Os tipos de interseção e união são uma das maneiras pelas quais você pode compor tipos.

[Ver A0014-type-Intersection.ts](./src/A0014-type-Intersection/A0014-type-Intersection.ts)

## 270. Funções como tipo

[Ver A0015-type-function.ts](./src/A0015-type-function/A0015-type-function.ts)

## 271. O Structural type system do TypeScript

[Ver A0016-type-structural.ts](./src/A0016-type-structural/A0016-type-structural.ts)

## 272. Type assertions

Requer 'DOM' na lib do tfconfig.json

[Ver A0017-type-assertions.ts](./src/A0017-type-assertions/A0017-type-assertions.ts)


## 273. Configuração do Webpack #1 para trabalhar com frontEnd

Compilar o projeto com `npx tsc` com isso criará a pasta /dist.


Criado o arquivo "Ola Mundo"

[Ver index.ts](./src/A0018-webpack/index.ts)

### Instalar os pacotes necessários

`npm i ts-loader@7.0.5 webpack@4.43.0 webpack-cli@3.3.12 -D`

Configuração do webpack, criar o arquivo webpack.config.js na raiz do projeto

Obter a configuração do [site do webpack](https://v4.webpack.js.org/guides/typescript/)

```
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Rodar com o comando do webpack assistindo as alterações dos arquivos:

`npx webpack -w`

Opcionalmente podemos configurar o package.json para rodar o comando desta forma:

Acrescente no campo scripts:
`"dev": "webpack =w"`

Rode esse comando para iniciar o webpack:

`npm run dev`

## 274. Configuração do Webpack #2
Ajustando as configurações
* renomear a pasta dist para frontend

Criar um novo arquivo tsconfig.frontend.json

Obter as configurações da seção configFile do [site do ts-loader](https://github.com/TypeStrong/ts-loader#configfile) e inserir no webpack.config.js

```
   rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { configFile: 'tsconfig.frontend.json' }
      },
    ],
```

Desta forma agora temos uma configuação específica para frontend (tsconfig.frontend.json) e outra para backend (tsconfig.json).

Para compilar o frontend: `npx webpack -w` ou `npm run dev`

Para compilar o backend: `npx tsc`

Antes de compilar o frontend, apagar a pasta js dentro de frontend\assets\js.

Alterar o arquivo package.json para mudar a forma de executar o build:

```
   "build:frontend": "webpack -w",
    "build:backend": "tsc",
```

Agora para fazer build rode um dos comandos:

`npm run build:frontend`

`npm run build:backend`


## 276. Exercício - Validando um formulário


Exercício

[Ver A0019-Exercicio.ts](./src/A0019-Exercicio/A0019-Exercicio.ts)

Alterar o endereço do arquivo de entrada do [webpack.config.js](./webpack.config.js):

```
entry: './src/A0019-Exercicio/A0019-Exercicio.ts',
```

Agora para fazer build rode do comando:

`npm run build:frontend`

Instalar as dependencias para validação do formulário:

`npm install --save validator @types/validator -D`


## 277. This em function e arrow function

Nesta aula entendemos um pouco sobre o uso do `this` em arrow function:

[Ver A0020-this-in-funcions.ts](./src/A0020-this-in-funcions/A0020-this-in-funcions.ts)


# TypeScript - Classes e Interfaces - Programação Orientada a Objetos


## 279. Classes em TypeScript - Moldes para objetos

[Ver A0021-classes.ts](./src/A0021-classes/A0021-classes.ts)

## 280. Revisitando o tsconfig.json

Para entender as configurações do [tsconfig.frontend.json](tsconfig.frontend.json) e  [tsconfig.json](tsconfig.json)

fique atendo ao `"target": "es2016"`, pois é nessa linha que diz qual a versão do Node JS.

Acrescentados:

```
  "target": "ES2016",
  "rootDir": "./src",
  "sourceMap": true,
  "removeComments": true, // remove os comentários ao compilar
  "noEmitOnError": true, // não compila se houver erros
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
```

Recursos da aula

[ECMAScript 2016+ compatibility table](https://kangax.github.io/compat-table/es2016plus/#node12_11)
[String.prototype.replaceAll() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
[Operador de coalescência nula - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
[Encadeamento opcional - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining)


## 281. Modificadores de acesso public e private

* Tudo que é público é visível dentro da classe e fora da classe em todas as subclasses da classe. Não precisa dizer que é público, por padrão é sempre público.
* Tudo que é privado só é visível dentro da classe, excelente para encapsulamento. Serve para manipular dados sensiveis. Para disponibilizar um atributo privado, devemos criar metodos públicos que acessem os atributos.


[Ver A0022-public-private.ts](./src/A0022-public-private/A0022-public-private.ts)

## 282. Herança com TypeScript

Ferramenta gratuita para criação de diagramas [yEd Live](https://www.yworks.com/yed-live/)

[Arquivo da aula](./src/A0023-heranca/A0023-heranca-diagramas.graphml)

[Link para diagrama criado](https://www.yworks.com/yed-live/?file=https://gist.githubusercontent.com/mandrado/b8208916e153fa79d83b43d2689fe5ba/raw/8a07e3549b4c2af81454b3da9b8c769c1f0db7d1/A0023-heranca-diagramas)

Crie diagramas de alta qualidade de forma rápida e eficaz e organize-os com nossos algoritmos de layout automático.

Name = Nome da Clase
Attributes = Atributos
Operatitions = Métodos da classe

[Ver A0023-heranca.ts](./src/A0023-heranca/A0023-heranca.ts)

Representamos os modificadores de acesso:
* Sinal + = Publico
* Sinal - = Private
* Sinal # = Protected

TypeScript permite apenas uma unica herança de classe. Nâo é permitido herdar de mais de uma classe.


## 283. super - para acesso à super classe

super classe = classe pai = classe mãe

[Ver A0024-super.ts](./src/A0024-super/A0024-super.ts)

utilizamos a palavra super para ter acesso a alguma coisa da classe pai


## 284. Modificador de acesso protected

Tudo que é protected pode ser acessado na classe em que foi criado e nas subclasses que foram criadas por herança.

[Ver A0025-protected.ts](./src/A0025-protected/A0025-protected.ts)
