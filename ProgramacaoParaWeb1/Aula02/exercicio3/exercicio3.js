let numA = prompt("Digite o numero A da equação de segundo grau: ",0);
let numB = prompt("Digite o numero B da equação de segundo grau: ",0);
let numC = prompt("Digite o numero C da equação de segundo grau: ",0);

if (isNaN(parseFloat(numA)) | isNaN(parseFloat(numB)) | isNaN(parseFloat(numC))){
    console.log("Por favor, digite apenas números.");
} else {
    numA = parseFloat(numA);
    numB = parseFloat(numB);
    numC = parseFloat(numC);

    let delta = numB**2 - 4*numA*numC;

    if(delta < 0){
        console.log("Não há raízes. Delta menor que zero.");
    } else if (delta == 0) {
        let raiz = -numB + Math.sqrt(delta)/(2*numA);
        console.log(`Temos somente uma raiz: ${raiz}`);
    } else {
        let raizA = -numB + Math.sqrt(delta)/(2*numA);
        let raizB = -numB - Math.sqrt(delta)/(2*numA);
        console.log(`As raízes são: ${raizA} e ${raizB}`)
    }
}