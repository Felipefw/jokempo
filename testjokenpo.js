function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Empate";
    } else if (
        (userChoice === 'pedra' && computerChoice === 'tesoura') ||
        (userChoice === 'papel' && computerChoice === 'pedra') ||
        (userChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        return "Você ganhou!";
    } else {
        return "Você perdeu.";
    }
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
}

function play(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    displayResult(result);
}