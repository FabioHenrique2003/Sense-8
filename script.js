/* ===========================
   ELEMENTOS
=========================== */
const fadeScreen = document.getElementById("fadeScreen");
const video = document.getElementById("memoryVideo");

const scenes = document.querySelectorAll(".scene");

const typing = document.getElementById("typing");
const subtyping = document.getElementById("subtyping");

const startButton = document.getElementById("startButton");

const videoPhrase = document.getElementById("videoPhrase");

/* ===========================
   TROCAR CENA
=========================== */

function showScene(index){

    scenes.forEach(scene=>{

        scene.classList.remove("active");

    });

    scenes[index].classList.add("active");

}

/* ===========================
   EFEITO DE DIGITAÇÃO
=========================== */

function typeWriter(element,text,speed=45){

    return new Promise(resolve=>{

        element.innerHTML="";

        let i=0;

        const timer=setInterval(()=>{

            element.innerHTML+=text.charAt(i);

            i++;

            if(i>=text.length){

                clearInterval(timer);

                resolve();

            }

        },speed);

    });

}

/* ===========================
   INTRO
=========================== */

async function intro(){

    await typeWriter(

        typing,

        "Algumas conexões simplesmente acontecem."

    );

    await new Promise(r=>setTimeout(r,1200));

    typing.innerHTML="";

    await typeWriter(

        typing,

        "Não importa a distância."

    );

    await new Promise(r=>setTimeout(r,1200));

    typing.innerHTML="";

    await typeWriter(

        typing,

        "Algumas pessoas sempre acabam conectadas."

    );

    subtyping.innerHTML=

    "Clique em Entrar e descubra onde essa conexão nos leva.";

}

intro();

/* ===========================
   BOTÃO ENTRAR
=========================== */

startButton.onclick=()=>{

    showScene(1);

}

/* ===========================
   PRIMEIRA PERGUNTA
=========================== */

document

.getElementById("yes1")

.onclick=()=>{

    showScene(2);

    playVideo();

}

/* ===========================
   FRASES DURANTE O VÍDEO
=========================== */

const phrases=[

"Feche os olhos.",

"Imagine que estamos vivendo a mesma memória.",

"Algumas pessoas passam pela nossa vida.",

"Outras mudam completamente quem somos.",

"Obrigado por estar aqui."

];

function playVideo(){


    video.play();

    let index=0;

    videoPhrase.innerHTML=phrases[0];

    const interval=setInterval(()=>{

        index++;

        if(index<phrases.length){

            videoPhrase.innerHTML=phrases[index];

        }

    },4500);

    video.onended=()=>{

        clearInterval(interval);

        showScene(3);

    }

}

/* ===========================
   SEGUNDA PERGUNTA
=========================== */

document

.getElementById("yes2")

.onclick=()=>{

    showScene(4);

}

/* ===========================
   BOTÃO NÃO
=========================== */

function makeRun(button){

    function move(){

        const margin=150;

        const x=Math.random()*(window.innerWidth-margin);

        const y=Math.random()*(window.innerHeight-margin);

        button.style.left=x+"px";

        button.style.top=y+"px";

    }

    button.addEventListener(

        "mouseenter",

        move

    );

    button.addEventListener(

        "mousemove",

        move

    );

}

makeRun(document.getElementById("no1"));

makeRun(document.getElementById("no2"));

/* ===========================
   PARTÍCULAS BRILHANDO
=========================== */

setInterval(()=>{

    const particles=document.getElementById("particles");

    particles.style.opacity=

    0.15+Math.random()*0.15;

},2500);

/* ======================================
   ESTRELAS CADENTES
====================================== */

function createStar(){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*300+"px";

    star.style.animationDuration=

    2+Math.random()*2+"s";

    document
    .getElementById("shootingStars")
    .appendChild(star);

    setTimeout(()=>{

        star.remove();

    },4000);

}

setInterval(createStar,2500);

/* ======================================
   FRASES FINAIS
====================================== */

const ending=document.querySelector(".ending");

const observer=new MutationObserver(()=>{

    ending.style.animation="fadeEnding 2s";

});

observer.observe(

document.getElementById("scene5"),

{

attributes:true

}

);
