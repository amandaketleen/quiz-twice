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
document.getElementById("quiz-jihyo").onsubmit = function (event) {
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
window.location.href = 'resulhyo.html';


}

