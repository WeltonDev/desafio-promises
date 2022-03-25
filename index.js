const fs = require("fs/promises");

let soma = (n1, n2) => {
    let resultado = n1 + n2;
    if (typeof (n1) != 'number' || typeof (n2) != 'number') {
        return console.log('Digite um número válido!');
    }
    return new Promise(
        async (resolve, reject) => {
        await fs.appendFile(`result.txt`, `${n1} + ${n2} = ${resultado}\n`)
    });
}
soma("a", 1);// Não é um número válido;
soma(20, 10); // Retorna a soma entre os dois valores;
