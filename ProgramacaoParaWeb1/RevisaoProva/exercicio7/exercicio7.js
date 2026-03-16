let lista_v1 = [2, 3, 6, 9, 2, 6];
let lista_v2 = [1, 2, 0, 8, 9, 5];

function diferenca(lista1, lista2) {
  let resultado = [];

  for (let i = 0; i < lista1.length; i++) {
    if (!lista2.includes(lista1[i]) && !resultado.includes(lista1[i])) {
      resultado.push(lista1[i]);
    }
  }

  return resultado;
}

console.log(diferenca(lista_v1, lista_v2));