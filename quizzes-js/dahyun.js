var gabarito = {
    1: "Dubu/Tofu",
    2: "Rapper",
    3: "Maio",
    4: "Branco",
    5: "Atriz",
    6: "1.61m",
    7: "Águia",
    8: "Chocolate",
    9: "Sana",
    10: "Nossa, Nossa/Brasil, te amo!"
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
document.getElementById("quiz-dahyun").onsubmit = function (event) {
    event.preventDefault();
    var pontuacao = 0;


//comparando as respostas do usuário com o gabarito
for (var i = 1; i <=10; i++) {
    if (respostasUsuario[i] === gabarito[i]) {
        pontuacao++;
    }
}

//exibindo o resultado 

localStorage.setItem('pontuacaoQuiz', pontuacao);
window.location.href = 'duburesul.html';


}