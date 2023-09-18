# Validando links com NodeJs

Neste projeto, desenvolveremos uma biblioteca em `Javascript` com o auxílio do `NodeJs` para validação de links contidos em um arquivo Markdown.

Um arquivo `.js` é entendido como um módulo independente; para trabalhar com esses módulos em `NodeJs` utilizamos as palavras chaves `export` e `import`. Mas isso somente é possível por meio de uma alteração no arquivo `package.json` que é utilizado pelo `NodeJs` para listar as dependências instaladas, além de informações sobre a versão do programa, autoria e scripts. Essa alteração consiste na inclusão de `"type": "module"` logo após de `"main": "index.js"`.

O `NodeJs` também trabalha com outro formato de exportação e importação de módulos, conhecido como CommonJS ou CJS, que utiliza a função `require()` e o objeto global `exports`.
