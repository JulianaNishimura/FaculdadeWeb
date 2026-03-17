function maior(lista1, lista2) {
  let soma1 = lista1.reduce((acc, num) => acc + num, 0);
  let soma2 = lista2.reduce((acc, num) => acc + num, 0);

  if (soma1 > soma2) return lista1;
  if (soma2 > soma1) return lista2;
  return false;
}

console.log(maior([1, 2, 3], [4, 5]));
console.log(maior([1, 2, 3, 3], [4, 5]));
console.log(maior([], [4, 5]));

// function somar(acc, num) {
//     return acc + num;
// }
// let soma1 = lista1.reduce(somar, 0);