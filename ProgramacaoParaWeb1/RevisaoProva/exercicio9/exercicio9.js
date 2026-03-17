function removeValores(num, lista) {
  return lista.filter(function (elemento) {
    return elemento !== num;
  });
}

let lista = [1, 2, 3, 2, 4, 2];

console.log(removeValores(2, lista));
