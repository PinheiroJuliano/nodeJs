const cliente = {
    nome: 'Juliano',
    idade: 19,
    sobrenome: 'Silva',
    email: ['psjuliano_@bmail.com', 'pinheirojuliano92@bmail.com'],
    enderecos: {
            rua: 'Lero Liro de Souza',
            numero: 32,
            tipo: 'casa',
            complemento: '',
            cidade: 'Lauras',
            principal: true,}
        };

const checaIdade = (objeto) => {
    if (!objeto.hasOwnProperty("idade")) {
        console.error("Erro: é necessário ter uma idade válida.");
    } else if (objeto.idade < 18){
        console.error("Venda não permitida a menores de 18 anos.");
    } else {
        console.log("Venda permitida, redirecionando para a tela de pagamentos.");
    }
};

checaIdade(cliente);
