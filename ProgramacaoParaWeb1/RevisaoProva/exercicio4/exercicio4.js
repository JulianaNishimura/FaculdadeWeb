let quantidade = 0;

while (quantidade <= 0) {
  quantidade = parseInt(
    prompt(
      'Digite um número inteiro positivo: ',
      0
    )
  );
}

function SomarNumerosPares(quantidade){
    let i = 0;
    let num_inicial = 0;
    let soma = 0;
    while(i<quantidade){
        if(num_inicial%2===0){
            soma+=num_inicial;
            i++;
            //console.log(num_inicial);
        }
        num_inicial++;
    }

    return soma
}

console.log(`a soma é: ${SomarNumerosPares(quantidade)}`)
                                                  