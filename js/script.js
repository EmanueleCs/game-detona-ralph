// criando variaveis que guardam as classes colocadas no html e utilizadas no css
const ralph = document.querySelector('.ralph');
const tijolo = document.querySelector('.tijolo');
const predio = document.querySelector('.predio');
const nuvem = document.querySelector('.nuvem');
const nuvem2 = document.querySelector('.nuvem2');
const popup = document.querySelector('.popup');
const audioPulo = new Audio('./musics/pulo.mp3');
const musicaFundo = document.getElementById('player');
const botaoMusica = document.getElementById('play');


// PAUSE E PLAY DA MUSICA DE FUNDO
function playMusica() {

    // dá play na música de fundo
    musicaFundo.play(); 
    // troca o icone do botao de pausar e dar play na musica
    document.getElementById("play").innerHTML = "<i class='bi bi-volume-up'></i>";
    
}

function pausarMusica() {

    // pausa a música de fundo
    musicaFundo.pause()
    
    // troca o icone do botao de pausar e dar play na musica
    document.getElementById("play").innerHTML = "<i class='bi bi-volume-mute'></i>";

}

// adiciona no botao de play e pause da  musica um método chamado addEventListener que verifica ao clicarmos no botao se a musica está pausada ou não
botaoMusica.addEventListener('click', ()=>{
    if (musicaFundo.paused) {

        playMusica();

    } else {

        pausarMusica();

    }
})

//FIM PAUSE E PLAY DA MUSICA DE FUNDO

// variavel que guarda a função de pulo
const pulo =() =>{

    // aqui o js insere a classe pulo (do css) ao elemento do html que tem a classe ralph
    ralph.classList.add('pulo');
    audioPulo.play();

    // nesta função nativa do js, a classe 'pulo' é removida do lemento html após 500 milisegundos
    setTimeout(() => {

        ralph.classList.remove('pulo');

    }, 500);

}

// este trecho de código de código serve para verificar a todo momento (num intervalo de 10 milisegundos entre cada verificação) se o ralph está encostando no tijolo
const loop = setInterval(() => {

    // offsetLeft verifica a posição do elemento tijolo em relação ao lado esquerdo da página html
    const tijoloPosition = tijolo.offsetLeft;

    // verifica a distância de baixo do elemento ralph (na folha de estilo e até mesmo fora dela já que elementos podem vir com um estilo nativo); o replace serve para substituirmos o 'px' por nada já que utilizaremos o valor encontrado como um tipo number; o + faz justamente isso, diz que aquele valor é um number
    const ralphPosition = +window.getComputedStyle(ralph).bottom.replace('px', '');

    const nuvemPosition = nuvem.offsetLeft;
    const nuvemPosition2 = nuvem2.offsetLeft;
    // console.log(tijoloPosition);

    // se a posição do tijolo em relação a esquerda do html for menor ou igual a 160px e maior ou igual a zero e a posição do ralph em relaçõ ao chão for menor que 85, então realiaremos o próximo trecho de código
    if (tijoloPosition <= 160 && tijoloPosition >= 0 && ralphPosition < 85) {

        nuvem.style.animation ='none';
        nuvem.style.left =`${nuvemPosition}px`;
        nuvem2.style.animation ='none';
        nuvem2.style.left =`${nuvemPosition2}px`;

        tijolo.style.animation ='none';
        tijolo.style.left =`${tijoloPosition}px`;
        // tira a animação do tijolo e congela ele no mesmo lugar

        ralph.style.animation ='none';
        ralph.style.bottom =`${ralphPosition}px`;
        // tira a animação do ralph e congela ele no mesmo lugar

        ralph.style.width = '120px';
        // define o tamanho do ralph
        ralph.style.marginLeft = '50px';
        // dá uma margem a esquerda para q a imagem n fique grudada 
        ralph.src = './imgs/perdeu.gif';
        // troca a imagem q está no src do elemento html com a classe ralph

        document.getElementById("contador2").innerHTML = contador;
        // insere o ultimo valor do contador na tag html q tem a clsse contador2

        popup.style.display ='block';
        // troca o valor contido no display na folha de estilo para que a div popup apareça na tela

        clearInterval(loop);
        clearInterval(pontuacao);
        // zera o loop e a pontuação
    }
}, 10);

document.addEventListener('keydown', pulo)
// adiciona no documento um escutador que a cada tecla apertada (keydown) a variavel pulo é acionada


// ------------------------------------------------------
// cria variavel para o contador
let contador = 0;

// variavel que seta um intervalo onde a cada 100 milisegundos o contador adiciona um e é mostrado em tela sendo inserido no elemento com id 'contador'
const pontuacao = setInterval(() =>{

        contador++;
        document.getElementById("contador").innerHTML = contador;

        if (contador == 25) {
            predio.src = './imgs/predio.png';
            ralph.style.animation ='ralph-venceu 10s normal';
            tijolo.style.display ='none';
        }

    }, 100)

// na função comecarContador é chamada a variável pontuação
// a função comecarContador é iniciada quando a página é carregada, na tag body do html há o onload (escutador de evento)
function comecarContador() {
   pontuacao;
}