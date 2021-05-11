const p1Button = document.querySelector("#p1Button")
const p2Button = document.querySelector("#p2Button")
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playTo')

let p2Score = 0;
let p1Score = 0;
let winningScore = 3;
let gameOver = false;

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

p1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.textContent = p1Score;
            p1Display.style.color = 'green';
            p2Display.style.color = 'red';
            p1Button.disabled = true;
            p2Button.disabled = true;
        } else {
            p1Display.textContent = p1Score;
        }
    }
})

p2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.textContent = p2Score;
            p2Display.style.color = 'green';
            p1Display.style.color = 'red'
            p1Button.disabled = true;
            p2Button.disabled = true;
        } else {
            p2Display.textContent = p2Score;
        }
    }
})
resetButton.addEventListener('click', function () {
    reset()
})

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.style.color = '';
    p2Display.style.color = '';
    p1Button.disabled = false;
    p2Button.disabled = false;
}