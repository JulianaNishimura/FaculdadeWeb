const dados = [
    {
        nome: "Futebol",
        individual: false,
        jogadores: [
            { nome: "Pelé", nota: 10.0 },
            { nome: "Lionel Messi", nota: 10.0 },
            { nome: "Cristiano Ronaldo", nota: 9.4 },
            { nome: "Diego Maradona", nota: 6.6 },
            { nome: "Zinedine Zidane", nota: 8.7 },
            { nome: "Ronaldinho Gaúcho", nota: 8.9 }
        ]
    },
    {
        nome: "Basquete",
        individual: false,
        jogadores: [
            { nome: "Michael Jordan", nota: 10.0 },
            { nome: "LeBron James", nota: 5.8 },
            { nome: "Kobe Bryant", nota: 9.1 },
            { nome: "Magic Johnson", nota: 8.8 },
            { nome: "Larry Bird", nota: 8.5 }
        ]
    },
    {
        nome: "Tênis",
        individual: true,
        jogadores: [
            { nome: "Roger Federer", nota: 9.7 },
            { nome: "Rafael Nadal", nota: 9.8 },
            { nome: "Novak Djokovic", nota: 9.9 },
            { nome: "Pete Sampras", nota: 4.6 },
            { nome: "Bjorn Borg", nota: 8.4 },
            { nome: "Andy Murray", nota: 1.9 }
        ]
    },
    {
        nome: "Natação",
        individual: true,
        jogadores: [
            { nome: "Michael Phelps", nota: 10.0 },
            { nome: "Mark Spitz", nota: 9.1 },
            { nome: "Ian Thorpe", nota: 1.6 },
            { nome: "Caeleb Dressel", nota: 8.3 }
        ]
    },
    {
        nome: "Vôlei",
        individual: false,
        jogadores: [
            { nome: "Giba", nota: 9.3 },
            { nome: "Karch Kiraly", nota: 9.6 },
            { nome: "Serginho", nota: 8.8 },
            { nome: "Bernard Rajzman", nota: 2.5 },
            { nome: "Earvin N'Gapeth", nota: 6.9 }
        ]
    },
    {
        nome: "Boxe",
        individual: true,
        jogadores: [
            { nome: "Muhammad Ali", nota: 10.0 },
            { nome: "Mike Tyson", nota: 9.2 },
            { nome: "Floyd Mayweather Jr.", nota: 9.0 },
            { nome: "George Foreman", nota: 4.1 },
            { nome: "Joe Frazier", nota: 7.6 },
            { nome: "Deontay Wilder", nota: 6.2 },
            { nome: "Jake Paul", nota: 3.5 }
        ]
    },
    {
        nome: "Atletismo",
        individual: true,
        jogadores: [
            { nome: "Usain Bolt", nota: 10.0 },
            { nome: "Carl Lewis", nota: 10.0 },
            { nome: "Jesse Owens", nota: 3.0 },
            { nome: "Yohan Blake", nota: 7.8 },
            { nome: "Asafa Powell", nota: 7.2 },
            { nome: "Justin Gatlin", nota: 6.0 },
            { nome: "Fred Kerley", nota: 5.4 }
        ]
    }
];

function parte1(dados){
    let esportes = dados.map((elemento) => {
        let media = elemento.jogadores.map((elemento)=>{return elemento.nota}).reduce((soma, nota) => soma + nota, 0);
        media = media/(elemento.jogadores).length;
        let nomes = elemento.jogadores.map((elemento)=>{return elemento.nome});
        return{
            nome: elemento.nome,
            media: media,
            jogadores: nomes
        };
    });
    return esportes;
}

function verSeTem10(lista){
    return lista.reduce((acumulador, elemento) => {
        const nomes10 = elemento.jogadores
            .filter(jogador => jogador.nota === 10.0)
            .map(jogador => jogador.nome);

        return acumulador.concat(nomes10);
    }, []); 
}

function parte2(dados){
    const individuais = verSeTem10(dados.filter(e => e.individual));

    const coletivos = verSeTem10(dados.filter(e => !e.individual));

    return {
        individuais,
        coletivos
    };
}

console.log(parte2(dados));
console.log(parte1(dados))
console.log(parte2(dados))