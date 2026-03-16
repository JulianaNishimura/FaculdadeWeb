const palavras = [];
let quantidade = 0;
let palavra;

while (quantidade === 0) {
  quantidade = parseInt(
    prompt(
      'Digite a quantidade de palavras que deseja inserir para verificar se é palíndromo\n(A quantidade tem que ser diferente de 0): ',
      0
    )
  );
}

for (let i = 0; i < quantidade; i++) {
  palavra = prompt('Digite uma palavra: ');
  palavras.push(palavra);
}

function palindromos(lista) {
  return lista.filter((palavra) => {
    let normal = palavra.toLowerCase();
    let invertida = normal.split('').reverse().join('');
    return normal === invertida;
  });
}

const palavrasPalindromas = palindromos(palavras);

for (let i = 0; i < palavrasPalindromas.length; i++) {
  console.log(palavrasPalindromas[i]);
}
