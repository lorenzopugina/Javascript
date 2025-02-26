
const entradas = [8, 3, 4, 1, 10, 5];
let i = 0;

export function gets() {
    let valor = entradas[i];
    i++;
    return valor;
}

export function print(texto) {
    console.log(texto);
}

