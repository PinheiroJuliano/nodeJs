const alunos = ['Ana', 'Juliano', 'Floyd'];
const medias = [9,7,4.5];

const aprovados = alunos.filter((_, indice) =>{
    return medias[indice] >= 7;
})

console.log(aprovados);