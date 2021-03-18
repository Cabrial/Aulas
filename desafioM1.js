var fs = require("fs");
fs.readFile("funcionarios.json", "utf-8", function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var arquivo = JSON.parse(data);
    }
    function maiorSalario(salarioMaior) {
        var salarioMaior = 0
        for (var i = 0; i < arquivo.funcionarios.length; i++) {
            if (arquivo.funcionarios[i].salario > salarioMaior) {
                salarioMaior = arquivo.funcionarios[i].salario
            }
        }
        console.log("O maior salário da empresa é de R$" + salarioMaior);
    }
    function funcionarioMenorSalario (funcMenorSal) {
        var funcMenorSal = arquivo.funcionarios[0].salario
        for (var i = 0; i < arquivo.funcionarios.length; i++) {
            if (arquivo.funcionarios[i].salario < funcMenorSal) {
                funcMenorSal = arquivo.funcionarios[i].salario
                var nomeMenorSal = arquivo.funcionarios[i].nome
            }
        }
        console.log("O colaborador " + nomeMenorSal + " possui o menor salário!")
    }  
    function mediaSalEmpresa (mediaSalarial) {
        var i = 0;
        salTotal = 0;
        while (i < arquivo.funcionarios.length) {
            salTotal += arquivo.funcionarios[i].salario;
            i++;
        }
        console.log("A média salarial da empresa é de R$" + Math.round(salTotal / arquivo.funcionarios.length));
    }
    function setorFuncMaiorSal (setorMaiorSal) {
        setor = arquivo.funcionarios[0].setor
        var setorEscolhido = "Comercial"
        var salarioMaior = 0
        for (var i = 0; i < arquivo.funcionarios.length; i++) {
            if ( setorEscolhido == arquivo.funcionarios[i].setor){
                if (arquivo.funcionarios[i].salario > salarioMaior) {
                    salarioMaior = arquivo.funcionarios[i].salario
                }
            }    
        }
        console.log("O maior salário do setor " + setorEscolhido + " é de R$" + salarioMaior);

    }
    function setorFuncMenorSal (SetorMenorSal) {
        setor = arquivo.funcionarios[0].setor
        var setorEscolhido = "Comercial"
        var salarioMenor = arquivo.funcionarios[0].salario
        for (var i = 0; i < arquivo.funcionarios.length; i++) {
            if ( setorEscolhido == arquivo.funcionarios[i].setor){
                if (arquivo.funcionarios[i].salario < salarioMenor) {
                    salarioMenor = arquivo.funcionarios[i].salario
                }
            }    
        }
        console.log("O menor salário do setor " + setorEscolhido + " é de R$" + salarioMenor);
    }
    function setorMediaSalEmpresa (setorMediaSal){
        setor = arquivo.funcionarios[0].setor
        var setorEscolhido = "Comercial"
        salTotal = 0
        var quantFunc = 0
        for (var i = 0; i < arquivo.funcionarios.length; i++){
            if ( setorEscolhido == arquivo.funcionarios[i].setor){
                salTotal += arquivo.funcionarios[i].salario;
                quantFunc++
            }
        }
        console.log("A média salarial do setor " + setorEscolhido + " é de R$" + (salTotal / quantFunc));
    }

    maiorSalario();
    funcionarioMenorSalario();
    mediaSalEmpresa();
    setorFuncMaiorSal();
    setorFuncMenorSal();
    setorMediaSalEmpresa();
})