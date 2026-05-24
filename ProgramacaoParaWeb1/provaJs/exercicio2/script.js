let valor = prompt("Digite um valor em iene: ");

while(valor === "" || valor < 0){
    valor = prompt("Digite um valor em iene:(não pode ser vazio,nem negativo): ");
}

let moedas = [500,100,50,10,5,1];

if(isNaN(parseInt(valor))){
    console.log("Valor digitado inválido.");
} else {
    let valorEmIene = parseInt(valor);
    let divisor = 0;

    while(valorEmIene !== 0 && divisor < moedas.length){
        console.log(`Moedas de ${moedas[divisor]}: ${Math.floor(valorEmIene / moedas[divisor])}`);
        valorEmIene = valorEmIene % moedas[divisor]; // sem Math.round
        divisor++;
    }
}