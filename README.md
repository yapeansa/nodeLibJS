# Validação de Links com NodeJs

Neste projeto, desenvolveremos uma biblioteca em `Javascript` com o auxílio do `NodeJs` para validação de links contidos em um arquivo Markdown.

Um arquivo `.js` é entendido como um módulo independente; para trabalhar com esses módulos em `NodeJs` utilizamos as palavras chaves `export` e `import`. Mas isso somente é possível por meio de uma alteração no arquivo `package.json` que é utilizado pelo `NodeJs` para listar as dependências instaladas, além de informações sobre a versão do programa, autoria e scripts. Essa alteração consiste na inclusão de `"type": "module"` logo após de `"main": "index.js"`.

O `NodeJs` também trabalha com outro formato de exportação e importação de módulos, conhecido como CommonJS ou CJS, que utiliza a função `require()` e o objeto global `exports`.

Para começar, é importante ressaltar que utilizamos

## Primeiro Passo: index.js

Começamos trabalhando com o arquivo `index.js`, que se encontra na pasta `src` junto com os arquivos `cli.js` e `http-validacao.js`. Neste arquivo, implementamos uma função assíncrona denominada `pegaArquivo()` recebendo um parâmetro `caminhoDoArquivo`, cuja responsabilidade é pegar o arquivo através da função `fs.promises.readFile()`, que recebe dois parâmetros: `caminhoDoArquivo` e `encoding`. Ao final, retornamos os links extraídos por meio da função `extraiLinks()`, que recebe como parâmetro o texto lido. Dentro desta função, utilizamos as `regex`, isto é, as expressões regulares, para nos auxiliar na extração dos links dentro de nosso texto.

Nesta mesma função, fazemos o tratamento de erro, caso ocorra algum erro na leitura do texto por algum motivo. Então, ao tentarmos `try` ler o arquivo, se obtivermos um erro, o tratamento é feito em `catch()`, que recebe o `erro` por parâmetro, por meio da função `trataErro(erro)`, na qual enviamos o erro por parâmetro. Na função `trataErro()`, lançamos um erro informando o código do erro e que não há arquivo no diretório.

Neste primeiro arquivo, foram importados [Chalk](https://github.com/chalk/chalk) e para lidar com sistema de arquivos fizemos um import:

> import fs from 'fs'

Ao final, fizemos um `export default` da função `pegaArquivo`.

## Segundo Passo: cli.js

Guardamos em `caminho` um array `process.argv`. Começamos aqui fazendo dois imports adicionais importantes. No primeiro,

> import pegaArquivo from './index.js'

trazemos o primeiro arquivo em que trabalhamos: o `index.js`. No segundo,

> import listaValidada from './http-validacao.js'

trazemos o arquivo em que faremos de fato a validação.

Neste arquivo, `cli.js`, nos concentramos em duas tarefas importantes: processar o texto e imprimir a lista. Para tanto, definimos duas funções assíncronas, `processaTexto()` e `imprimeLista()`. A função `processaTexto()` recebe um `caminho` por parâmetro. Dentro dela, é feito o tratamento de erro para verificar, por exemplo, se o arquivo ou diretório existe e no final ela utiliza a função `imprimeLista()` para exprimir a lista de fato.

Esta última lista, a `imprimeLista()`, recebe `valida`, `resultado` e `identificador` por parâmetro, este útimo contendo o valor padrão `''`. Se `valida` for `true`, então exibimos no console a lista validada por meio da função `listaValidada()` passando por parâmetro `resultado`, que é quem guarda o nosso arquivo de texto em Markdown. Do contrário, exibimos no console apenas `identificador` e `resultado` sem validação.

...
