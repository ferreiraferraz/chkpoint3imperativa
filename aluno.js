class Aluno {
    listaAlunos = [];
    adicionaAluno(nome, quantidadeFaltas, notas) {
        this.listaAlunos.push({
            nome: nome,
            quantidadeFaltas: quantidadeFaltas,
            notas: notas,
            media: 0,
        });
    }
    calcularMedia() {
        let total;
        this.listaAlunos.forEach(parametro => {
            total = 0;
            parametro.notas.forEach(valor => {
                total += valor;
            });
            parametro.media = total/parametro.notas.length;
        });
    }
    aumentarFaltas(incremento) {
        this.listaAlunos[incremento].quantidadeFaltas++;
    }
}
// criação da constante para exportação
const alunos = new Aluno();
module.exports = alunos;