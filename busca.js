const clientes = require("./json_files/clientes.json");

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrados = [] 

encontrados.push(encontrar(clientes, "nome", "Kirby"));
encontrados.push(encontrar(clientes, "telefone", "1918820860"));

console.log(encontrados);