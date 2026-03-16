const items = [];
let quantidade = 0;
let item;

while (quantidade === 0) {
  quantidade = parseInt(
    prompt(
      'Digite a quantidade de items que quer colocar(Diferente de 0): ',
      0
    )
  );
}

for (let i = 0; i < quantidade; i++) {
  item = prompt('Digite o item: ');
  items.push(item);
}

function ApenasUnicos(lista){
    let unicos = []
    let cont;
    for (let i = 0; i < quantidade; i++) {
        cont = 1;
        for (let j = 0; j < quantidade && cont < 2; j++) {
            if(i != j){
                if(items[i] === items[j]){
                    cont++;
                }
            }
        }

        if(cont === 1){
            unicos.push(items[i]);
        }
    }

    return unicos;
}

let unicosItens = ApenasUnicos(items);
for (let i = 0; i < unicosItens.length; i++) {
    console.log(unicosItens[i]);
}