const cliente = {
    nome: 'Juliano',
    sobrenome: 'Silva',
    idade: 29,
    email: ['psjuliano_@bmail.com', 'pinheirojuliano92@bmail.com'],
    enderecos: [{
            rua: 'Lero Liro de Souza',
            numero: 32,
            tipo: 'casa',
            complemento: '',
            cidade: 'Lauras',
            principal: true,
        },
        {    
            rua: 'Laro Lero de Souza',
            numero: 325,
            tipo: 'apartamento',
            complemento: 'ap 103',
            cidade: 'Lauras',
            principal: false,
        }],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (this.saldo < valor) {
            console.log("Saldo Insuficiente");
        } else{
            this.saldo -= valor;
            console.log(`Pagamento efetuado, novo saldo: ${this.saldo}`);
        }
    },
    mostraEndereco: function () {
        const enderecoPrincipal = this.enderecos.find(endereco => endereco.principal);
        console.log(`O endereço do cliente é: ${enderecoPrincipal.rua}, ${enderecoPrincipal.numero}, ${enderecoPrincipal.tipo}, ${enderecoPrincipal.complemento}, ${enderecoPrincipal.cidade}`);
    }    
};

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    } else if (chave === 'enderecos' && tipo === 'object') {
        cliente.mostraEndereco(); 
    }
}

cliente.efetuaPagamento(250);

const enderecoPrincipal = cliente.enderecos.find(endereco => endereco.principal);

const entrega = {
    destinatario: cliente.nome,
    ...enderecoPrincipal,
}

console.log(entrega);