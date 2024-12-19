var gabarito = {
    1: "18 anos",
    2: "Jihyo",
    3: "Terror",
    4: "Framboesa",
    5: "Trovões",
    6: "Roxo",
    7: "Japonesa",
    8: "Comida picante",
    9: "Perfumes",
    10: "Savely"
};


var respostasUsuario = {};

//função para registrar as respostas

function selecionarResposta(pergunta, resposta, botao) {
    respostasUsuario[pergunta] = resposta;

    var botoesPergunta = document.querySelectorAll(`button[data-pergunta='${pergunta}']`);
    botoesPergunta.forEach(function(btn) {
        btn.classList.remove('selecionado');  
    });

    botao.classList.add('selecionado');
}



//corrigindo o quiz e mostrando o resultado
document.getElementById("quiz-sana").onsubmit = function (event) {
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
window.location.href = 'sanaresul.html';


};

