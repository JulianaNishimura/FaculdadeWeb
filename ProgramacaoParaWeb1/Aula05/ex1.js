// function dizOla(){
//     alert("Olá!");
// };

// function dizTchau(){
//     alert("Tchau!");
// };

// function botoesFuncao(){
//     let btns = document.querySelectorAll("button");

//     for(let btn of btns){
//         btn.addEventListener("click",dizOla);
//         btn.addEventListener("click",dizTchau);
//         btn.removeEventListener("click",dizTchau);
//     };
// };
//e.preventDefault() - evitar comportamento padrao por exemplo de uma âncora link.
function dizOla(e){
    let elemento = e.target; //e = object pointer event; elemento = htmlobjectelement
    alert(`Olá!`);
};

function botoesFuncao(){
    let btns = document.querySelectorAll("button");

    for(let btn of btns){
        btn.addEventListener("click",dizOla);
    };
};
document.addEventListener('DOMContentLoaded',botoesFuncao);