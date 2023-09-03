import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.blue(texto));
    } catch(erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.green('Operação concluída!'));
    }
}

// ** Uma das formas de lidar com assincronicidade em Javascript **

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then(texto => console.log(chalk.green(texto)))
//         .catch(trataErro);
// }

// ** Um código síncrono **

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     });
// }

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');
