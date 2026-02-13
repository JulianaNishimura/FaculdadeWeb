let fahrenheit;

for(let i = -30;i < 151;i+=10){
    console.log(`Temperatura em Celsius: ${i}ºC`);
    fahrenheit = (i * 9/5) + 32;
    console.log(`Temperatura em Fahrenheit: ${fahrenheit}ºF\n`);
}