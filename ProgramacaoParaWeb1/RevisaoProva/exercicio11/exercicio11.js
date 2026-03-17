const pedidos = [
  [
    1,
    'Alice',
    true,
    [
      ['Teclado Mecânico', 300, 'Periféricos'],
      ['Mouse Gamer', 200, 'Periféricos'],
    ],
  ],
  [2, 'Bruno', false, [["Monitor 27''", 1500, 'Monitores']]],
  [3, 'Carla', true, [['Notebook i7', 4800, 'Computadores']]],
  [
    4,
    'Daniel',
    true,
    [
      ['Cadeira Gamer', 1200, 'Móveis'],
      ['Mousepad XL', 100, 'Acessórios'],
    ],
  ],
  [
    5,
    'Eduarda',
    true,
    [
      ['Monitor Ultrawide', 2500, 'Monitores'],
      ['Suporte para Monitor', 300, 'Acessórios'],
    ],
  ],
  [6, 'Fernando', true, [['Placa de Vídeo RTX 4060', 3200, 'Hardware']]],
  [7, 'Gabriela', false, [['Impressora', 800, 'Periféricos']]],
  [
    8,
    'Henrique',
    true,
    [
      ['Gabinete RGB', 600, 'Hardware'],
      ['Fonte 750W', 700, 'Hardware'],
    ],
  ],
  [
    9,
    'Isabela',
    true,
    [
      ['SSD 1TB', 900, 'Armazenamento'],
      ['Memória RAM 16GB', 500, 'Hardware'],
    ],
  ],
  [10, 'João', true, [['Headset Sem Fio', 650, 'Periféricos']]],
];

function mostrar(resultado) {
  document.getElementById('saida').innerHTML = resultado;
}

function opcao1() {
  let resultado = pedidos.map((pedido) => {
    let nome = pedido[1];

    let total = pedido[3].reduce((acc, item) => acc + item[1], 0);

    return `${nome}: R$ ${total}`;
  });

  mostrar(resultado.join('<br>'));
}

function opcao2() {
  let todosProdutos = pedidos
    .map((pedido) => pedido[3])
    .reduce((acc, lista) => acc.concat(lista), []);

  let produtosUnicos = [];
  for (let i = 0; i < todosProdutos.length; i++) {
    let item = todosProdutos[i];
    let existe = false;
    for (let j = 0; j < produtosUnicos.length; j++) {
      if (produtosUnicos[j][0] === item[0]) {
        existe = true;
      }
    }

    if (!existe) {
      produtosUnicos.push(item);
    }
  }

  produtosUnicos.sort((a, b) => b[1] - a[1]);

  let resultado = produtosUnicos.map(
    (pedido) => `${pedido[0]} - R$ ${pedido[1]} (${pedido[2]})`,
  );

  mostrar(resultado.join('<br>'));
}

function opcao3() {
  let total = 0;
  let resultado = pedidos
    .filter((pedido) => pedido[2])
    .forEach((pedido) => {
      total += pedido[3].reduce((acc, item) => acc + item[1], 0);
    });

  mostrar(`Total recebido: R$ ${total}`);
}

function opcao4() {
  let resultado = pedidos
    .filter((pedido) => !pedido[2])
    .map((pedido) => {
      let nome = pedido[1];

      let total = pedido[3].reduce((acc, item) => acc + item[1], 0);

      return `${nome} deve R$ ${total}`;
    });

  mostrar(resultado.join('<br>'));
}
