// Banco de dados de perguntas do Free Fire
const quizData = [
    {
        question: "Qual é o mapa clássico e mais antigo do Free Fire?",
        options: ["Purgatório", "Kalahari", "Bermuda", "Alpes"],
        correct: 2 // Bermuda está na posição 2 (0, 1, 2...)
    },
    {
        question: "Qual personagem tem a habilidade 'Som na Caixa'?",
        options: ["Alok", "Chrono", "K", "Kelly"],
        correct: 0 // Alok
    },
    {
        question: "Qual o nome do rifle de precisão mais famoso do jogo (Sniper)?",
        options: ["MP40", "AWM", "M4A1", "Groza"],
        correct: 1 // AWM
    },
    {
        question: "Quantos jogadores caem no mapa em uma partida clássica no Modo Battle Royale?",
        options: ["40 jogadores", "50 jogadores", "60 jogadores", "100 jogadores"],
        correct: 1 // 50 jogadores
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Elementos do HTML
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const gameZone = document.getElementById("game-zone");
const resultZone = document.getElementById("result-zone");
const scoreText = document.getElementById("score-text");

// Inicializa o jogo
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultZone.classList.add("hidden");
    gameZone.classList.remove("hidden");
    showQuestion();
}

// Mostra a pergunta atual
function showQuestion() {
    resetState();
    let currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    // Cria os botões para cada opção
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
}

// Limpa os botões antigos
function resetState() {
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

// Processa a resposta selecionada
function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    
    if (selectedIndex === currentQuestion.correct) {
        score++;
        alert("Boa! Capa neles! Resposta certa. 🎯");
    } else {
        alert("Errou! Foi abatido dessa vez. ❌");
    }

    currentQuestionIndex++;

    // Verifica se ainda tem perguntas ou se o jogo acabou
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Mostra o resultado final
function showResult() {
    gameZone.classList.add("hidden");
    resultZone.classList.remove("hidden");
    scoreText.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;
}

// Reinicia o jogo
function restartGame() {
    startQuiz();
}

// Executa o jogo ao carregar a página
startQuiz();