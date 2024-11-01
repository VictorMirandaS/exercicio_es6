const alunosAvaliadosEmFrontend = [
    { nome: 'Victor', nota: 5 },
    { nome: 'Luis', nota: 9 },
    { nome: 'Victoria', nota: 7 },
    { nome: 'Nicole', nota: 8 },
    { nome: 'Gabriel', nota: 4 },
    { nome: 'Douglas', nota: 6 },
    { nome: 'Ryan', nota: 8 },
    { nome: 'Joao', nota: 5 },
    { nome: 'Giovanna', nota: 6 },
    { nome: 'Wallace', nota: 5 }
];

const relatorioDosAlunosAprovados = (alunosAvaliadosEmFrontend) =>
    alunosAvaliadosEmFrontend.filter(alunosAvaliadosEmFrontend => alunosAvaliadosEmFrontend.nota >= 6);

const alunosQuePassaram = relatorioDosAlunosAprovados(alunosAvaliadosEmFrontend);
console.log("Estes foram os alunos que PASSARAM em Frontend.");
console.log(alunosQuePassaram);


const relatorioDosAlunosReprovados = (alunosAvaliadosEmFrontend) =>
    alunosAvaliadosEmFrontend.filter(alunosAvaliadosEmFrontend => alunosAvaliadosEmFrontend.nota <= 5);

const alunosQueReprovaram = relatorioDosAlunosReprovados(alunosAvaliadosEmFrontend);
console.log("Estes foram os alunos que REPROVARAM em Frontend.");
console.log(alunosQueReprovaram);