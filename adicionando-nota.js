//Média das notas

let notas = [10, 6, 8];

notas.push(7);
console.log(notas);

function somanotas(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma;
}

let soma = somanotas(notas);
console.log("A soma das notas é:", soma);

let media = soma / notas.length;
console.log("A média das notas é:", media);

notas.pop();
console.log(notas);

soma = somanotas(notas);
media = soma / notas.length;
console.log("A nova soma das notas é:", soma);
console.log("A nova média das notas é:", media);
