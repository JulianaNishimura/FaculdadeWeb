function removeDaLista(qualOp){
    let lista = document.querySelectorAll("tr");
    let n1;
    let n2;
    let indice=1;
    let i;
    let coluna;

    if(lista.length>0){
        n2 = parseInt(lista[1].querySelectorAll("td")[3].innerText);
        for(i = 1;i < lista.length;i++){
            coluna = lista[i].querySelectorAll("td")[3].innerText;
            n1 = parseInt(coluna);
            if(qualOp=='max'){
                if(n1>n2){
                    n1 = n2;
                    indice = i;
                } 
            } else if(qualOp=='min'){
                if(n1<n2){
                    n1 = n2;
                    indice = i;
                } 
            }
        }
        lista[indice].remove();
    }
}

function removeMenorIMCdaLista(){
    removeDaLista('min');
}

function removeMaiorIMCdaLista(){
    removeDaLista('max');
}

function classificaIMC(imc){
    if(imc < 18.5){
        return "Magreza";
    } else if(imc > 18.4 && imc < 25){
        return "Saudável";
    } else if(imc > 24.9 && imc < 30){
        return "Sobrepeso";
    } else if(imc > 29.9 && imc < 35){
        return "Obesidade I";
    } else if(imc > 34.9 && imc < 40){
        return "Obesidade II";
    } else if(imc >= 40){
        return "Obesidade III";
    } else {
        return "Inválido";
    }
}

function adiciona(e){
    let botao = e.target;
    let coluna = botao.parentElement;
    let linha = coluna.parentElement;
    let itensLinha = linha.querySelectorAll("td")
    let valor = parseFloat(itensLinha[2].innerText) + 0.5;
    let imc = valor / (parseFloat(itensLinha[1].innerText)*parseFloat(itensLinha[1].innerText));
    itensLinha[2].innerText = valor;
    itensLinha[3].innerText = imc.toFixed(2);
    itensLinha[4].innerText = classificaIMC(imc);
}

function diminui(e){
    let botao = e.target;
    let coluna = botao.parentElement;
    let linha = coluna.parentElement;
    let itensLinha = linha.querySelectorAll("td")
    let valor = parseFloat(itensLinha[2].innerText) - 0.5;
    let imc = valor / (parseFloat(itensLinha[1].innerText)*parseFloat(itensLinha[1].innerText));
    itensLinha[2].innerText = valor;
    itensLinha[3].innerText = imc.toFixed(2);
    itensLinha[4].innerText = classificaIMC(imc);
}

function removeLinha(e){
    let botao = e.target;
    let coluna = botao.parentElement;
    let linha = coluna.parentElement;
    linha.remove();
}

function opcoesDeCadaItem(elementoLinha){
    let botaoAdiciona = document.createElement("button");
    botaoAdiciona.innerText = "+ Peso";
    botaoAdiciona.className = "botaoAdicionaEstilo";
    botaoAdiciona.addEventListener('click',adiciona);

    let botaoDiminui = document.createElement("button");
    botaoDiminui.innerText = "- Peso";
    botaoDiminui.className = "botaoDiminuiEstilo";
    botaoDiminui.addEventListener('click',diminui);

    let botaoRemove = document.createElement("button");
    botaoRemove.innerText = "Remover";
    botaoRemove.className = "botaoRemoveEstilo";
    botaoRemove.addEventListener('click',removeLinha);

    let elementoColuna = document.createElement("td");
    elementoColuna.appendChild(botaoAdiciona);
    elementoColuna.appendChild(botaoDiminui);
    elementoColuna.appendChild(botaoRemove);

    elementoLinha.appendChild(elementoColuna);
}

function adicionaNaLista(e){
    e.preventDefault();

    let dados = [];
    let altura;
    let peso;
    let imc;
    let classifica;

    dados.push(e.target.querySelector('[name="nome"]').value);

    altura = e.target.querySelector('[name="altura"]').value;
    peso = e.target.querySelector('[name="peso"]').value;
    imc = peso / (altura*altura);

    dados.push(altura);
    dados.push(peso);
    dados.push(imc.toFixed(2));

    classifica = classificaIMC(imc);
    if(classifica != "Inválido"){
        dados.push(classifica);
    } else {
        return alert("Cálculo Inválido.")
    }

    let i;
    let lista = document.querySelector("table");
    let elementoLinha = document.createElement("tr");
    let elementoColuna;
    for(i = 0;i < 5;i++){
        elementoColuna = document.createElement("td");
        elementoColuna.innerText = dados[i];
        elementoLinha.appendChild(elementoColuna);
    }
    opcoesDeCadaItem(elementoLinha);
    lista.appendChild(elementoLinha);
}

function configurar(){
    let botoes = document.querySelectorAll(".botoesExistentes");

    let cadastra = document.querySelector("form");
    let removeMaiorIMC = botoes[1];
    let removeMenorIMC = botoes[2];

    removeMenorIMC.addEventListener("click",removeMenorIMCdaLista);
    removeMaiorIMC.addEventListener("click",removeMaiorIMCdaLista);
    cadastra.addEventListener("submit",adicionaNaLista);
}

document.addEventListener("DOMContentLoaded",configurar);