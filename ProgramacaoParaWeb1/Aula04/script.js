function selecionar(){
    let botao = document.querySelector("button");

    let destino = ((((botao.parentElement).parentElement).parentElement).nextElementSibling).nextElementSibling;

    let destino2 = ((((botao.parentElement).parentElement).parentElement).parentElement).children[2];

    console.log(destino);
    console.log(destino2)
};

document.addEventListener("DOMContentLoaded",selecionar);