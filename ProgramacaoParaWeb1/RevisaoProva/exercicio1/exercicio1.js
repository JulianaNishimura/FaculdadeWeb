let quantidade_numeros = parseInt(prompt("Digite quantos números primos você quer: ", 0));

if (quantidade_numeros >= 0){
    let i=0;
    let num_inicial = 1;
    let primo;

    while(i<quantidade_numeros){
        primo = true;

        for (let j = 2; j < num_inicial && primo; j++) {
            if (num_inicial % j === 0) {
                primo = false;
            }
        }

        if(primo){
            console.log(num_inicial);
            i++;
        }
        num_inicial++;
    }
} else {
    console.log("Digite um número que seja maior ou igual a 0.");
}