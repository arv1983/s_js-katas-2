// comece a criar a sua função add na linha abaixo

function add(x, y) {
    return x + y;
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(x, y) {
    return x * y;
}

// descomente a linha seguinte para testar sua função

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, y) {
    return x ** y;
}

// descomente a linha seguinte para testar sua função

console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(x) {
    let retorna = x;
    while (x > 1) {
        x--;
        retorna = x * retorna;
    }
    return retorna;
}
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');



/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

function fibonacci(valor) {
    let a = 1;
    let b = 0;
    let temporario;
    while (valor >= 0) {
        temporario = a;
        a = a + b;
        b = temporario;
        valor--;
        if (valor < b) {
            return a + b;
            break;
        }
    }

}
/*
armazenar a
armazenar b
SOMA A e B
RESULTADO TEM
RESULTADO temporario passa a ser B
soma as duas

LET TEMPORARIO????

retorna antes
descomente a linha seguinte para testar sua função
*/


console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');