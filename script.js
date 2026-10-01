const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const officialButton = document.getElementById("officialButton");

const mainWindow = document.getElementById("window");
const acceptedWindow = document.getElementById("acceptedWindow");
const finalWindow = document.getElementById("finalWindow");

const heartsContainer = document.getElementById("hearts");
const buttonsArea = document.getElementById("buttonsArea");


// =====================================
// BOTÃO NÃO 😿
// =====================================

function runAway() {

    const areaWidth = buttonsArea.clientWidth;
    const areaHeight = buttonsArea.clientHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;


    // Espaço disponível

    const maxX = areaWidth - buttonWidth;
    const maxY = areaHeight - buttonHeight;


    // Nova posição aleatória

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;


    // Evita colocar o NÃO muito perto do SIM

    const yesRect = yesButton.getBoundingClientRect();
    const areaRect = buttonsArea.getBoundingClientRect();


    const yesX = yesRect.left - areaRect.left;
    const yesY = yesRect.top - areaRect.top;


    const distancia = Math.sqrt(
        Math.pow(x - yesX, 2) +
        Math.pow(y - yesY, 2)
    );


    // Se ficar perto do SIM, tenta outra posição

    if (distancia < 100) {

        x = Math.random() * maxX;
        y = Math.random() * maxY;
    }


    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;


    // Pequeno efeito de pulo

    noButton.style.transform =
        `scale(${0.9 + Math.random() * 0.15})`;
}


// =====================================
// COMPUTADOR
// =====================================

noButton.addEventListener(
    "mouseenter",
    runAway
);


// =====================================
// CELULAR
// =====================================

noButton.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        runAway();
    }
);


// =====================================
// SE CONSEGUIR CLICAR
// =====================================

noButton.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        runAway();
    }
);


// =====================================
// BOTÃO SIM ❤️
// =====================================

yesButton.addEventListener(
    "click",
    function() {

        mainWindow.classList.add("hidden");

        acceptedWindow.classList.remove("hidden");

        criarCoracoes(25);
    }
);


// =====================================
// BOTÃO É OFICIAL? 😿
// =====================================

officialButton.addEventListener(
    "click",
    function() {

        acceptedWindow.classList.add("hidden");

        finalWindow.classList.remove("hidden");

        criarCoracoes(40);
    }
);


// =====================================
// CORAÇÕES ❤️
// =====================================

function criarCoracoes(quantidade) {

    for (let i = 0; i < quantidade; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");


        const emojis = [
            "❤️",
            "💗",
            "💕",
            "💖",
            "💘"
        ];


        heart.innerHTML =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";


        heart.style.animationDelay =
            Math.random() * 2 + "s";


        heartsContainer.appendChild(heart);


        setTimeout(
            () => heart.remove(),
            8000
        );
    }
}