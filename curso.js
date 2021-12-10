// importação da constante do arquivo estudantes.js
const alunos = require('./estudantes');
// criação da classe curso
class curso {
    nomeDoCurso = 'Programação';
    notaAprovacao = 7;
    faltasMaxima = 2;
    listaEstudantes = [];
    // criação do construtor para receber a lista
    constructor(listando) {
        this.listaEstudantes = listando;
    }
    adicionarEstudantes(nome, quantidadeFaltas, notas) {
        this.listaEstudantes.push({
            nome: nome,
            quantidadeFaltas: quantidadeFaltas,
            notas: notas,
            media: 0,
        });
    }
    aprovacao(alunoPegar) {
        if (alunoPegar.media >= estudantes.notaAprovacao && alunoPegar.quantidadeFaltas < estudantes.faltasMaxima) {
            return  `O estudante: ${alunoPegar.nome} foi Aprovado(a). Parabéns! Siga em frente!`;
        } else if (
            alunoPegar.media >= estudantes.notaAprovacao * 1.1 &&
            alunoPegar.quantidadeFaltas === estudantes.faltasMaxima
        ) {
            return `O estudante: ${alunoPegar.nome} foi Aprovado(a). Parabéns! Siga em frente!`;
        } else {
            return `O estudante: ${alunoPegar.nome} foi Reprovado(a). Tente novamente, você é capaz!`;
        }
    }
    listaAprovacao() {
        const lista = this.listaEstudantes;
        const resultadoLista = [];
        lista.forEach(function(alunoPegar) {
            resultadoLista.push(estudantes.aprovacao(alunoPegar));
        });
              return resultadoLista;
}}
const estudantes = new curso(alunos.listaAlunos);
estudantes.adicionarEstudantes('Carolina', 4, [5, 7, 10]);
alunos.calcularMedia();
// comando para aumentar as faltas no aluno de index 0 e modificar o resultado
//alunos.aumentarFaltas(0);
//alunos.aumentarFaltas(0);
//alunos.aumentarFaltas(0);
// mostrando todos os resultados em uma tabela
console.table(estudantes.listaAprovacao());
//table(tabularData?: any, properties?: string[])
// mostrando todos os resultados em linha
//console.log(estudantes.listaAprovacao());







