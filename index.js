console.log("Hello World no arquivo externo!");


function clickBotao() {
    //DOM
    //document.getElementById("paragrafo").innerHTML = "Texto Alterado com sucesso";
    //document.getElementById("paragrafo").style.display = "none";//none faz sumir do display
    for (var i = 0; i < document.getElementsByClassName("paragrafo").length; i++) {
        document.getElementsByClassName("paragrafo")[i].style.color = "blue";
        document.getElementsByClassName("paragrafo")[i].style.fontWeight = "bold"; //fontWeight para alterar negrito, itálico
    }
}

function clickBotao2() {
    document.getElementById("paragrafo").style.display = "block";//block faz aparecer no display
    var botoes = document.getElementsByTagName("button");
    var i = 0;
    while (i < botoes.length) {
        botoes[i].style.fontSize = "20px"
        i++
    }
}

function ligarLampada() {
    document.getElementById("lampada").src="lampada-on.gif";
}

function desligarLampada() {
    document.getElementById("lampada").src="lampada-off.gif";
}

var quantidadeElementos = 0;

function adicionarElementos() {
    var elemento = document.createElement("P")
    elemento.innerHTML = "Elemento " + quantidadeElementos;
    quantidadeElementos++
    document.getElementById("div-elementos").appendChild(elemento);
}

function removerElementos() {
    var filhos = document.getElementById("div-elementos").childNodes;
    var size = filhos.length;
    for (var i = 0; i < size; i++) {
        document.getElementById("div-elementos").removeChild(filhos[0])
    }
}