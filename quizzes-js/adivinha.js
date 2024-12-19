

let nome = prompt("Primeiro digite o seu nome!")
alert(`Tudo certo, ${nome}! vamos começar o quiz!`)
let currentQuestionIndex = 0;  // Define o índice inicial
let score = 0;  // Inicializa a pontuação

const questions = [
    {
        image: "/img/set-me-free.jpg",  // Caminho da imagem para a primeira pergunta
        options: ["Moonlight Sunrise", "Talk That Talk", "Set me free", "Do not touch"],  // Alternativas da primeira pergunta
        correctAnswer: "Set me free"  // Resposta correta da primeira pergunta
    },
    {
        image: "/img/feel-special.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Fancy", "Feel special", "What is love", "Likey"],  // Alternativas da segunda pergunta
        correctAnswer: "Feel special"  // Resposta correta da segunda pergunta
    },
    {
        image: "/img/like-ohh-ahh.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Like ohh ahh", "TT", "Knock Knock", "Get Loud"],  // Alternativas da segunda pergunta
        correctAnswer: "Like ohh ahh" 
    
    },
    {
       
        image: "/img/i-cant-stop-me.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["More & More", "Better", "Talk That Talk", "I can't stop me"],  // Alternativas da segunda pergunta
        correctAnswer: "I can't stop me" 
    
    },
    {
        image: "/img/strategy.png",  // Caminho da imagem para a segunda pergunta
        options: ["Strategy", "Dive", "Mamushi(remix)", "BDZ"],  // Alternativas da segunda pergunta
        correctAnswer: "Strategy" 
    
    },
    {
        image: "/img/talk-that-talk.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Fancy", "The feels", "Talk That Talk", "Scientist"],  // Alternativas da segunda pergunta
        correctAnswer: "Talk That Talk" 
    
    },
    {
        image: "/img/the-feels.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["The feels", "Kura Kura", "Cheer up", "Moonlight Sunrise"],  // Alternativas da segunda pergunta
        correctAnswer: "The feels" 
    
    },
    {
        image: "/img/tt.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Signal", "What is love", "Likey", "TT"],  // Alternativas da segunda pergunta
        correctAnswer: "TT" 
    
    },
    {
        image: "/img/alcohol-free.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Dance the night away", "Alcohol free", "Celebrate", "Happy Happy"],  // Alternativas da segunda pergunta
        correctAnswer: "Alcohol free" 
    
    },
    {
        image: "/img/doughnut.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Doughnut", "Dive", "Kura Kura", "Merry & Happy"],  // Alternativas da segunda pergunta
        correctAnswer: "Doughnut" 
    
    },
    {
        image: "/img/cheer-up.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Signal", "What is love", "Cheer up", "Candy pop"],  // Alternativas da segunda pergunta
        correctAnswer: "Cheer up" 
    
    },

    {
        image: "/img/do not touch.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Identity", "Do not touch", "Funny valentine", "Cry for me"],  // Alternativas da segunda pergunta
        correctAnswer: "Do not touch" 
    
    },
    {
        image: "/img/fancy.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Fancy", "More & More", "Candy pop", "Yes or Yes"],  // Alternativas da segunda pergunta
        correctAnswer: "Fancy" 
    
    },
    {
        image: "/img/go-hard.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Go Hard", "Get Loud", "Hare Hare", "Perfect World"],  // Alternativas da segunda pergunta
        correctAnswer: "Go Hard" 
    
    },
    {
        image: "/img/killing-me-good.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Closer", "BDZ", "Fanfare", "Killing me good"],  // Alternativas da segunda pergunta
        correctAnswer: "Killing me good" 
    
    },
    {
        image: "/img/i-got-you.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["I got you", "One spark", "Dance the night away", "Wake me up"],  // Alternativas da segunda pergunta
        correctAnswer: "I got you" 
    
    },
    {
        image: "/img/knock-knock.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["TT", "What is love", "Knock Knock", "Signal"],  // Alternativas da segunda pergunta
        correctAnswer: "Knock Knock" 
    
    },
    {
        image: "/img/likey.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Happy Happy", "Likey", "Pop", "One more time"],  // Alternativas da segunda pergunta
        correctAnswer: "Likey" 
    
    },
    {
        image: "/img/monlight-sunrise.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Scientist", "The feels", "Moonlight Sunrise", "One Spark"],  // Alternativas da segunda pergunta
        correctAnswer: "Moonlight Sunrise" 
    
    },
    {
        image: "/img/more&more.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Hare Hare", "Dive", "Kura Kura", "More & More"],  // Alternativas da segunda pergunta
        correctAnswer: "More & More" 
    
    },
    {
        image: "/img/perfect-world.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Go Hard", "Better", "Perfect world", "Yes or Yes"],  // Alternativas da segunda pergunta
        correctAnswer: "Perfect world" 
    
    },
    {
        image: "/img/pop.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Fancy", "Pop", "Cheer up", "Fake & True"],  // Alternativas da segunda pergunta
        correctAnswer: "Pop" 
    
    },
    {
        image: "/img/scientist.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Scientist", "The feels", "Fanfare", "Alcohol free"],  // Alternativas da segunda pergunta
        correctAnswer: "Scientist" 
    
    },
    {
        image: "/img/what-is-love.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["BDZ", "What is love", "Cheer up", "One more time"],  // Alternativas da segunda pergunta
        correctAnswer: "What is love" 
    
    },
    {
        image: "/img/yes-or-yes.jpg",  // Caminho da imagem para a segunda pergunta
        options: ["Breakthrough", "Better", "Yes or Yes", "Signal"],  // Alternativas da segunda pergunta
        correctAnswer: "Yes or Yes" 
    
    },
        
    
];

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Atualiza a imagem da pergunta
    document.getElementById("musicImage").src = question.image;
    
    // Pega o container das opções
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";  // Limpa as opções anteriores

    // Adiciona os botões das alternativas
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });

    // Limpa resultado de acertos/erros
    document.getElementById('result').textContent = '';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        alert(`Fim do Quiz ${nome}! Você acertou`  + score + "/" + questions.length);
        currentQuestionIndex = 0;  // Reinicia o quiz
        score = 0;  // Reinicia a pontuação
    }
    loadQuestion();
}

function checkAnswer(selectedOption, button) {
    const question = questions[currentQuestionIndex];
    const resultDiv = document.getElementById('result');
    
    // Verifica se a resposta está correta
    if (selectedOption === question.correctAnswer) {
        button.style.backgroundColor = "green";  // Resposta correta (verde)
        button.style.color = "white";
        button.style.border = "1px solid #6cdb6c";
        score++;  // Incrementa a pontuação
    } else {
        button.style.backgroundColor = "red";  // Resposta errada (vermelho)
        button.style.color = "white";
        button.style.border = "1px solid #ff8989";
        // Desabilita o botão de resposta errada
        button.disabled = true;

        // Encontrar o botão com a resposta correta e colorir em verde
        const correctButton = Array.from(button.parentNode.children).find(btn => btn.textContent === question.correctAnswer);
        if (correctButton) {
            correctButton.style.backgroundColor = "green";  // Resposta correta (verde)
            correctButton.style.color = "white";
            correctButton.style.border = "1px solid #6cdb6c";
        }
    }

    // Desabilita todos os botões de resposta após a escolha
    document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
}

// Chama a função para carregar a primeira pergunta
loadQuestion();