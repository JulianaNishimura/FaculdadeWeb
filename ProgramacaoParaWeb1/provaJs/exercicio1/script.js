let qtde = prompt("Digite uma quantidade de números perfeitos que deseja: ");

while(qtde === ""){
    qtde = prompt("Digite uma quantidade de números perfeitos que deseja(não pode ser vazio): ");
}

function primo(num){
    let ehprimo = true;

    for (let j = 2; j < num && ehprimo; j++) {
        if (num % j === 0) {
            ehprimo = false;
        }
    }
    return ehprimo;
}

let num_inicial = 2;
let i = 0;
while (i < qtde){
    let res = (Math.pow(2,num_inicial)-1);
    if(primo(res)){
        console.log(res*Math.pow(2,num_inicial-1));
        i+=1;
    }
    num_inicial+=1;
}

