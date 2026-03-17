let stringUsuario = prompt('Digite a string do campo minado: ');

while (!stringUsuario || stringUsuario === '') {
  stringUsuario = prompt(
    'Digite a string do campo minado(não pode ser vazio):',
  );
}

let valores = stringUsuario.split(';');

let tamanho = parseInt(valores[0]);

if (tamanho > 9) {
  alert('O campo minado é somente até 9x9');
} else {
  let campo = [];
  for (let i = 0; i < tamanho; i++) {
    campo[i] = [];
    for (let j = 0; j < tamanho; j++) {
      campo[i][j] = 0;
    }
  }

  for (let i = 1; i < valores.length; i++) {
    let linha = parseInt(valores[i][0]) - 1;
    let coluna = parseInt(valores[i][1]) - 1;
    campo[linha][coluna] = 'X';
  }

  for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
      if (campo[i][j] !== 'X') {
      }
    }
  }

  let direcoes = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let linha = 0; linha < tamanho; linha++) {
    for (let coluna = 0; coluna < tamanho; coluna++) {
      if (campo[linha][coluna] !== 'X') {
        let contadorMinas = 0;
        for (
          let indiceDirecao = 0;
          indiceDirecao < direcoes.length;
          indiceDirecao++
        ) {
          let deslocamentoLinha = direcoes[indiceDirecao][0];
          let deslocamentoColuna = direcoes[indiceDirecao][1];

          let linhaVizinha = linha + deslocamentoLinha;
          let colunaVizinha = coluna + deslocamentoColuna;

          if (
            linhaVizinha >= 0 &&
            linhaVizinha < tamanho &&
            colunaVizinha >= 0 &&
            colunaVizinha < tamanho
          ) {
            if (campo[linhaVizinha][colunaVizinha] === 'X') {
              contadorMinas++;
            }
          }
        }
        campo[linha][coluna] = contadorMinas;
      }
    }
  }

  console.table(campo);
}
