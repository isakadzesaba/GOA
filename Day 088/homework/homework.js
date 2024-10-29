const choices = ['rock', 'paper', 'scissors'];
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const result = document.getElementById('result');

const buttons = document.querySelectorAll('.choices button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const playerChoice = e.target.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        const winner = getWinner(playerChoice, computerChoice);
        result.textContent = winner;

        if (winner === 'You win!') {
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
        } else if (winner === 'Computer wins!') {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
    });
});

function getWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}