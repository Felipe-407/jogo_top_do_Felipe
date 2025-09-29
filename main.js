let startButton = document.getElementById("start-btn");
    let timeDisplay = document.getElementById("time-display");
    let messageDisplay = document.getElementById("message");
    let timer;
    let gameStarted = false;
    let startTime;
    
    function startGame() {
        if (gameStarted) return; // Impede de reiniciar o jogo

messageDisplay.textContent = "";
        timeDisplay.textContent = "Tempo: -- segundos";
        
        // Mudando o botão para estado de "pronto para clicar"
        startButton.textContent = "Clique Agora!";
        startButton.style.backgroundColor = "#4CAF50";

        // Espera de 2 a 5 segundos antes de mudar a cor
        let waitTime = Math.floor(Math.random() * 3000) + 2000;
        
        timer = setTimeout(function() {
            // Mudar a cor do botão para sinalizar que pode clicar
            startButton.textContent = "Clique Aqui!";
            startButton.style.backgroundColor = "#FF5722";

 startTime = Date.now(); // Marca o tempo inicial do clique
            gameStarted = true;
        }, waitTime);
    }

     startButton.addEventListener('click', function() {
        if (!gameStarted) return; // Se o jogo não foi iniciado, ignora o clique

        let endTime = Date.now();
        let reactionTime = (endTime - startTime) / 1000; // Tempo em segundos

        // Exibe o tempo de resposta
        timeDisplay.textContent = "Tempo: " + reactionTime.toFixed(2) + " segundos";
        
        messageDisplay.textContent = "Você foi rápido! Tente novamente.";
        gameStarted = false; // Reseta o estado do jogo
        startButton.textContent = "Começar Jogo"; // Restaura o botão inicial
        startButton.style.backgroundColor = "#FF5722"; // Cor original
    });