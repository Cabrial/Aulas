var pessoa = {
    nome: "João",
    idade: 40,
    Telefone: "(99) 99999-9999",
    animaisDeEstimacao: ["Totó", "Bob"],
    pai: {
        nome: "José",
        idade: 68
    }
};

//console.log(pessoa);
//console.log(pessoa.nome);
//console.log(pessoa.pai.nome);
//pessoa.animaisDeEstimacao.push("Billy");
//pessoa.nome = pessoa.nome + " Silva"; ou pessoa.nome += " Silva";
//pessoa.nome += " Silva";
//console.log(pessoa);

pessoa.mae = {
    nome: "Maria",
    idade: 68
}

//Para transformar tudo em String usamos JSON.stringify
console.log(JSON.stringify(pessoa));

/*salvarDadosPessoa(pessoa);

function salvarDadosPessoa(pessoa) {
    console.log(pessoa);
}*/