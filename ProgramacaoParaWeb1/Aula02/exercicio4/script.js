let numero_quantidade = Number(prompt("Digite um número: ", 0));

let numeros = 2;
let divisores;
let contador = 0;
let primo;

while (contador < numero_quantidade) {
    primo = true;
    divisores = 2;

    while (primo == true && divisores < numeros) {
        if (numeros % divisores == 0) {
            primo = false;
        }
        divisores++;
    }

    if (primo == true) {
        console.log(numeros);
        contador++;
    }

    numeros++;
}