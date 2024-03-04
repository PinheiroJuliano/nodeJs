// let nome = 'Juliano';
// let idade = 29;
// let casado = false;
// // console.log(nome+':', typeof(nome), idade+":", typeof(idade), casado+":", typeof(casado));
// console.log(`Nome: ${nome}, idade: ${idade}`);


// const noumbrella = 'Não leve guard-chuva tá moh sol';
// const umbrella = 'Leva guarda-chuva que tá muita água';
// let chuva = false;
// if(chuva == true){
//     console.log(noumbrella)
// }else {
//     console.log(umbrella)
// };

// let total = 13/3.5

// console.log(total, typeof(total));
// console.log(Math.round(total));
// total = total.toFixed(2)
// console.log(total, typeof(total));
// console.log(Math.floor(total));

// const cifrao = '\u0024'
// const aMaiusculo = '\u0041'
// const tique = '\u2705'
// const hiragana = '\u3041'

// console.log(cifrao)
// console.log(aMaiusculo)
// console.log(tique)
// console.log(hiragana)

// let numero = 13;
// let resto = numero%2
// console.log(resto);
// const par = resto > 0? "É ímpar.": "É par.";
// console.log(par);

// let user = 'Juliano'
// let logado = true;
// let permit = true;
// const login = (logado && permit)? `Bem-vindo, ${user}, acessando a plataforma.`: `Usuário ${user} não atende aos critérios.`
// console.log(login);


// let peso = 75;
// let altura = 1.85;

// function imc(peso, altura){
//     return (peso/(altura*altura));
// };

// console.log(imc(peso, altura));

// function calculaProduto(a, b = 2, c = 1) {
//     return a * b * c;
//   }
  
//   const resultado1 = calculaProduto(3);
//   const resultado2 = calculaProduto(2, 4);
//   const resultado3 = calculaProduto(1, 2, 3);
//   const resultado4 = calculaProduto(2, undefined, 5);
  

//   console.log("Resultado 1:", resultado1);
//   console.log("Resultado 2:", resultado2);
//   console.log("Resultado 3:", resultado3);
//   console.log("Resultado 4:", resultado4);
  

// const saudacao = (nome) => nome;
// console.log(`Olá, ${saudacao('Juliano')}!` );       

// const maior = function maiorIdade(idade) {
//     if(idade >= 18){
//         return true
//     }else {
//         return false
//     }
// }
// console.log(maior(15));

// function palindromo(palavra) {
//     if(palavra === palavra.split("").reverse().join("")) {
//         return true
//     }else {
//         return false
//     }
// }
// console.log(palindromo('arara'));

// let maior = 0
// function maiorNumero(a, b, c){
//      if (a > b && a > c){
//         maior = a;
//     } else if (b > a && b > c){
//         maior = b;
//     } else if (c > a && c > b){
//         maior = c;
//     }
//     return maior;
// }

// console.log(maiorNumero(1,2,3));

const potencia = (base, expoente) => base ** expoente;
console.log(potencia(3,2));