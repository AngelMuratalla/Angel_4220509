let randomNumber = Math.floor(Math.random() * 11);
let lives = 3;

document.getElementById('lives').textContent = `Vidas restantes: ${lives}`;

document.getElementById('guessInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

function checkGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);
    
    if (isNaN(guess) || guess < 0 || guess > 10) {
        document.getElementById('feedback').textContent = 'Por favor, introduce un número válido entre 0 y 10.';
        return;
    } else if (guess === randomNumber) {
        document.getElementById('feedback').textContent = '¡Felicidades! Adivinaste el número.';
        document.getElementById('lives').textContent = '';
    } else {
        lives--;
        if (lives > 0) {
            let hint = guess > randomNumber ? 'menor' : 'mayor';
            document.getElementById('feedback').textContent = `Incorrecto. El número es ${hint}.`;
            document.getElementById('lives').textContent = `Vidas restantes: ${lives}`;
        } else {
            document.getElementById('feedback').textContent = `Game Over. El número era ${randomNumber}. Intentalo de nuevo`;
            document.getElementById('lives').textContent = '';
            lives = 3;
            randomNumber = Math.floor(Math.random() * 11);
        }
    }

    

    document.getElementById('guessInput').value = '';
}