var fs = require("fs");
var nomeArquivo = "meuArquivo.txt"

/*var x = 1
if (x) {
    console.log("x tem valor");
}else{
    console.log("x não tem valor");
}
*/

console.log("1");

fs.writeFile(nomeArquivo, "Um texto qualquer", function(err){
    if (err !== null){
        console.log(err)
    }else{
        fs.appendFile(nomeArquivo, "\nnova linha de texto", function(err){
            if (err){
                console.lof(err);
            }else{
                fs.readFile(nomeArquivo, "utf-8", function(err, data){
                    if (err) {
        
                    }else{
                        console.log(data);
                    }
                })
            }
        })
    }
})

console.log("2");