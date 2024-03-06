const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota){
    somaDasNotas += nota;
});

const media = somaDasNotas/notas.length;

console.log(`O total das notas é ${somaDasNotas}`);
console.log(`A média das notas é ${media}`);