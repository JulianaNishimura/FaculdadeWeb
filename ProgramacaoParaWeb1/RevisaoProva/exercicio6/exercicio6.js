let lista_v1 = [2,3,6,9,2,6];
let lista_v2 = [1,2,0,8,9,5];

function adicionarSeNaoTem(listaDestino, valor){
    let tem = false;

    for(let j = 0; j < listaDestino.length && !tem; j++){
        if(valor == listaDestino[j]){
            tem = true;
        }
    }

    if(!tem){
        listaDestino.push(valor);
    }
}

function uniao_listas(lista1, lista2){
    let lista_unida = [];

    for(let i = 0; i < lista1.length; i++){
        adicionarSeNaoTem(lista_unida, lista1[i]);
    }

    for(let i = 0; i < lista2.length; i++){
        adicionarSeNaoTem(lista_unida, lista2[i]);
    }

    return lista_unida;
}

let lista_unida = uniao_listas(lista_v1, lista_v2);
console.log(lista_unida);