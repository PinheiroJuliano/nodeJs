const sala1 = [7,8,8,7,10,6.5,4,10,7];
const sala2 = [6,5,8,9,5,6];
const sala3 = [7,3.5,8,9.5];
const geral = [];

function calculaMedia(notasDaSala) {
   const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0)

    const media = somaDasNotas/notasDaSala.length;
    geral.push(media);
    return media;
}


console.log(`A media da sala1 é: ${calculaMedia(sala1)}`);
console.log(`A media da sala2 é: ${calculaMedia(sala2)}`);
console.log(`A media da sala3 é: ${calculaMedia(sala3)}`);
console.log(`A media de todas as turmas é: ${calculaMedia(geral)}`);