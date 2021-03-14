//stringify para poder ser lido pelo arquivo e parse para poder ser manipulado no VS Code

var fs = require("fs");
var nomeArquivo = "carros.json.txt"
var carros = ["Gol", "Palio","Uno", "Celta"];
var concessionaria = {
    nome: "Concessionária XYZ",
    carros
}
fs.writeFile(nomeArquivo, JSON.stringify(concessionaria), function (err){
    if(err){
        console.log(err)   ;
    }else{
        fs.readFile(nomeArquivo, "utf-8", function(err,data){
            if(err){
                console.log(err);
            }else{
                var obj = JSON.parse(data);
                obj.carros.push("HRV");
                console.log(obj)
                fs.writeFile(nomeArquivo, JSON.stringify(obj), function(err){
                    if(err){
                        console.log(err);
                    }
                })
            }
        })
    }
})