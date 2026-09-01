//DEFINIR PALCO
var altura
var largura
var vidas = 3
var tempo = 15

function ajustarTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
ajustarTamanho()

//CRONOMETRO
var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo == 0) {
        window.location.href = 'vitoria.html'
        clearInterval(cronometro)
        clearInterval(criamosquito)
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//POSIÇÃO RANDOM
function randomP() {

    //verificação de existência
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //controle de vidas
        if (vidas <= 0) {
            window.location.href = 'fim_de_jogo.html'
        }
        else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas--
        }
    }

    var posicaoX = Math.floor(Math.random() * (largura - 90))
    var posicaoY = Math.floor(Math.random() * (altura - 90))

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar elemento html
    var mosquito = document.createElement('img')
    mosquito.id = 'mosquito'
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = randomT() + ' ' + lados()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

//TAMANHOS RANDOM
function randomT() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

//LADOS DO MOSQUITO
function lados() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

