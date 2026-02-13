let quantidade_numeros = parseInt(prompt("Digite quantos número você quer da sequência de fibonacci: ", 0));

if (quantidade_numeros > 0){
    let ultimo = 0;
    let atual = 0;
    let prox = 1;
    for (let i = 0; i < quantidade_numeros;i++){
        console.log(atual);
        ultimo = atual;
        atual = prox;
        prox = atual + ultimo;
    }
} else {
    console.log("Digite um número que seja maior que 0.");
}