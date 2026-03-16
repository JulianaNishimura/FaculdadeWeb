const numeros = [];
let quantidade = 0;
let numero;

while (quantidade === 0) {
  quantidade = parseInt(
    prompt(
      'Digite a quantidade de números que quer colocar(Diferente de 0): ',
      0,
    ),
  );
}

for (let i = 0; i < quantidade; i++) {
  numero = prompt('Digite o número: ');
  numeros.push(numero);
}

function dobro(lista) {
  return lista.map((numero) => numero * 2);
}

// function dobro(lista) {
//     return lista.map(function(numero) {
//         return numero * 2;
//     });
// }

let numeroDuplicados = dobro(numeros);

for (let i = 0; i < quantidade; i++) {
  console.log(numeroDuplicados[i]);
}
