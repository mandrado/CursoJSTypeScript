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

