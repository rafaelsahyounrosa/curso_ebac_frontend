"use strict";

var alunos = new Map();
alunos.set("Rafael", 10);
alunos.set("Mariana", 9);
alunos.set("Joao", 3);
alunos.set("Yasminn", 10);
alunos.set("Leo", 8);
function preencheArovados(arrayDeAlunos) {
  var aprovados = new Map();
  arrayDeAlunos.forEach(function (nota, nome) {
    if (nota >= 6) {
      // console.log(nome,nota);
      aprovados.set(nome, nota);
    }
  });
  return aprovados;
}
console.log(preencheArovados(alunos));