const fs = require("fs/promises");

let soma = (n1, n2) => {
    let resultado = n1 + n2;
    if (typeof (n1) != 'number' || typeof (n2) != 'number') {
        return console.log('Digite um número válido!');
    }
    return new Promise((resolve, reject) => {
        fs.appendFile(`result.txt`, `${n1} + ${n2} = ${resultado}\n`)
            .then(() => {
                resolve();
            })
    })
}
soma("a", 1);
soma(20, 10);
