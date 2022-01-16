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
