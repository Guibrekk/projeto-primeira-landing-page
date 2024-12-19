var leonardo =  window.document.getElementById("leonardo")
var samanta =  window.document.getElementById("samanta")
var bruna =  window.document.getElementById("bruna")
var SetaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    SetaEsquerda.style ="display:flex"
    SetaDireita.style ="display:none; marginn-top:65%"
}

function RolarParaEsquerda() {
    bruna.style ="display:none"
    leonardo.style ="display:flex"
    SetaEsquerda.style ="display:none"
    SetaDireita.style ="display:flex; margin-top:65%"
}


