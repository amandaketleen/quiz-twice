var gabarito = {
    1: "1997",
    2: "10 anos",
    3: "Amarelo",
    4: "Líder/Main Vocalist",
    5: "Park Jisoo",
    6: "Brasil",
    7: "Pense Positivo",
    8: "Sad",
    9: "Nayeon/Sana/Mina",
    10: "Coreana"
};

var respostasUsuario = {};

// Função para registrar as respostas
function selecionarResposta(pergunta, resposta, botao) {
    respostasUsuario[pergunta] = resposta;

    var botoesPergunta = document.querySelectorAll(`button[data-pergunta='${pergunta}']`);
    botoesPergunta.forEach(function(btn) {
        btn.classList.remove('selecionado');  
    });

    botao.classList.add('selecionado');
}

// Corrigindo o quiz e mostrando o resultado
document.getElementById("quiz-jihyo").onsubmit = function (event) {
    event.preventDefault();
    var pontuacao = 0;

    // Verificando se o usuário respondeu a todas as perguntas
    for (var i = 1; i <= 10; i++) {
        if (respostasUsuario[i] === undefined) {
            alert(`Por favor, responda todas as perguntas.`);
            return; // Não continua o cálculo se não respondeu a todas
        }
        if (respostasUsuario[i] === gabarito[i]) {
            pontuacao++;
        }
    }

    // Exibindo o resultado
    localStorage.setItem('pontuacaoQuiz', pontuacao);
    window.location.href = 'resulhyo.html';    // Ajuste o nome da página aqui
};


