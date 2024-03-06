const alunos = ['Juliano', 'Ana', 'Floyd', 'Maria'];
const medias = [7.5, 10, 8, 9];
const listaAlunosEMedias = [alunos, medias];

function exibeNomeNota(aluno){
    if (listaAlunosEMedias[0].includes(aluno)){
        console.log(`${aluno} está cadastrado(a)!`);

        const [alunos, medias] = listaAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];

        console.log(`A média de ${aluno} é ${mediaAluno}!`);

    } else{
        console.log("Aluno não encontrado!");
    }
}

exibeNomeNota("Ana");