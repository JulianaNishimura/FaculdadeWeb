const alunos = [
  { nome: "Ana Pereira", semestre: 1, notas: [8.5, 7.0, 9.2] },
  { nome: "Carlos Souza", semestre: 2, notas: [6.5, 7.8, 8.0, 5.9] },
  { nome: "Mariana Costa", semestre: 3, notas: [9.1, 8.7] },
  { nome: "Lucas Almeida", semestre: 4, notas: [7.5, 6.8, 8.2, 7.9, 9.0] },
  { nome: "Fernanda Lima", semestre: 2, notas: [5.5, 6.0, 7.2] },
  { nome: "Rafael Martins", semestre: 5, notas: [8.8, 9.3, 7.6] },
  { nome: "Juliana Rocha", semestre: 1, notas: [6.2, 7.4] },
  { nome: "Pedro Henrique", semestre: 3, notas: [9.0, 8.5, 8.7, 9.4] }
];

let aprovados = alunos
  .filter(aluno => {
    let soma = aluno.notas.reduce((soma, nota) => soma + nota, 0);
    let media = soma / aluno.notas.length;
    return media >= 6;
  })
  .map(aluno => aluno.nome);

console.log("Aprovados:", aprovados);

let reprovadosPorSemestre = alunos.reduce((resultado, aluno) => {
  let soma = aluno.notas.reduce((soma, nota) => soma + nota, 0);
  let media = soma / aluno.notas.length;

  if (media < 6) {
    let indice = aluno.semestre - 1;

    if (indice in resultado) {
      resultado[indice] = resultado[indice] + 1;
    } else {
      resultado[indice] = 1;
    }
  }

  return resultado;
}, []);

console.log("Reprovados por semestre:", reprovadosPorSemestre);

let maiorNota = alunos.reduce((melhor, aluno) => {
  let maiorNotaAluno = aluno.notas.reduce((maior, nota) => {
    return nota > maior ? nota : maior;
  }, aluno.notas[0]);

  if (maiorNotaAluno > melhor.nota) {
    return { nome: aluno.nome, nota: maiorNotaAluno };
  }

  return melhor;
}, { nome: "", nota: 0 });

console.log("Maior nota:", maiorNota.nome, "-", maiorNota.nota);

let melhorPorSemestre = alunos.reduce((resultado, aluno) => {

  let soma = aluno.notas.reduce((soma, nota) => soma + nota, 0);
  let media = soma / aluno.notas.length;

  let indice = aluno.semestre - 1;

  if (!(indice in resultado) || media > resultado[indice].media) {
    resultado[indice] = {
      nome: aluno.nome,
      semestre: aluno.semestre,
      notas: aluno.notas,
      media: media
    };
  }

  return resultado;
}, []);

console.log("Melhores por semestre:", melhorPorSemestre);

let alunosComMedia = alunos.map(aluno => {

  let soma = aluno.notas.reduce((soma, nota) => soma + nota, 0);
  let media = soma / aluno.notas.length;

  return {
    nome: aluno.nome,
    semestre: aluno.semestre,
    notas: aluno.notas,
    media: media
  };
});

console.log("Alunos com média:", alunosComMedia);