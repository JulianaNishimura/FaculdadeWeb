//nao pode ter mais que 10 itens
function adicionaNaLista(e){
    e.preventDefault();
    let lista = document.querySelectorAll("li");
    if(lista.length>=10){
        return;
    }

    let elementoLista = document.createElement("li");
    let elementoNomeFruta = document.createElement("span");
    let nome = document.querySelector('[name="nome"]').value;
    elementoNomeFruta.innerText = nome;

    let elementoPreco = document.createElement("span");
    let preco = document.querySelector('[name="preco"]').value;
    elementoPreco.innerText = preco;

    elementoLista.appendChild(elementoNomeFruta);
    elementoLista.appendChild(elementoPreco);

    document.querySelector("ul").appendChild(elementoLista);
}

function removeNaLista(e){
    let lista = document.querySelectorAll("li");

    if(lista.length>0){
        lista[0].remove();
    }
}

function removeMaisCaroDaLista(e){
    let lista = document.querySelectorAll("li");
    let maior;
    let atual;
    let indice;

    if(lista.length>0){
        for(let i = 0;i < lista.length;i++){
            atual = parseInt(lista[i].querySelectorAll("span")[1].innerText);
            maior = 0;
            if(atual>=maior){
                maior = atual;
                indice = i;
            }
        }
        lista[indice].remove();
    }
}

function configurar(){
    let botoes = document.querySelectorAll("button");
    let adiciona = document.querySelector("form");
    let remove = botoes[1];
    let removeMaisCaro = botoes[2];

    removeMaisCaro.addEventListener("click",removeMaisCaroDaLista);
    adiciona.addEventListener("submit",adicionaNaLista);
    remove.addEventListener("click",removeNaLista);
}

document.addEventListener("DOMContentLoaded",configurar);