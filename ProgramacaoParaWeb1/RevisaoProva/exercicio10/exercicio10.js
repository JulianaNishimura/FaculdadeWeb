let stringUsuario = prompt(
  'Digite a mensagem que quer converter para telefone: ',
);

while (!stringUsuario || stringUsuario === "") {
  stringUsuario = prompt(
    "Digite a mensagem que quer converter para telefone (não pode ser vazio):"
  );
}

stringUsuario = stringUsuario.toUpperCase();

const digitosNumericos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const teclado = {
  ABC: '2',
  DEF: '3',
  GHI: '4',
  JKL: '5',
  MNO: '6',
  PQRS: '7',
  TUV: '8',
  WXYZ: '9',
};
let telefone = '';
let achou;

for (const char of stringUsuario) {
  if (digitosNumericos.includes(char)) {
    telefone = telefone + char;
  } else {
    achou = false;
    for (let chave in teclado) {
      if (chave.includes(char)) {
        achou = true;
        telefone = telefone + teclado[chave];
      }
    }

    if (!achou) {
      telefone = telefone + char;
    }
  }
}

console.log(telefone);
