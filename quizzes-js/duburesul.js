document.addEventListener('DOMContentLoaded', function() {
    const pontuacao = localStorage.getItem('pontuacaoQuiz'); // Recupera a pontuação armazenada

    if (pontuacao !== null) {
       

        // Seleciona o elemento da imagem
        const imagemResultado = document.getElementById("imagemResultado");

        // Lógica para mensagens e imagens com base na pontuação
        if (pontuacao <= 6) {
            document.getElementById('pontuacao').innerHTML = `Você acertou ${pontuacao}/10! </br> Dubu ficou tristinha.`;
           
            imagemResultado.src = "/img/dubu-gif1.gif";  // Caminho correto
            imagemResultado.style.display = "block";
        } else if (pontuacao > 6 && pontuacao <= 9) {
            document.getElementById('pontuacao').innerHTML = `Você acertou ${pontuacao}/10! </br> Parabéns!`;
            imagemResultado.src = "/img/dubu-gif2.gif";  // Substitua pelo caminho da imagem feliz
            imagemResultado.style.display = "block";
        } else if (pontuacao == 10) {
            document.getElementById('pontuacao').innerHTML = `Você acertou ${pontuacao}/10! </br> UAU, você é um ótimo fã da Dubu!`;
            imagemResultado.src = "/img/dubu-gif3.gif";  // Caminho para imagem especial
            imagemResultado.style.display = "block";
        }

        // Limpa a pontuação do localStorage para futuras tentativas
        localStorage.removeItem('pontuacaoQuiz');
    }
});