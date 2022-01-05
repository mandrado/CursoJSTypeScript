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

