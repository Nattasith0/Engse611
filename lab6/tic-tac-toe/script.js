const boxes = document.querySelectorAll("#grid div");
const resetButton = document.getElementById("reset");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let scores = { X: 0, O: 0 };

function handleClick(event) {
    const index = Array.from(boxes).indexOf(event.target);
    if (board[index] === "") {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        event.target.classList.add(currentPlayer.toLowerCase());
        if (checkWin(currentPlayer)) {
            alert(`Player ${currentPlayer} wins!`);
            scores[currentPlayer]++;
            updateScoreboard();
            resetBoard();
            return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => 
        pattern.every(index => board[index] === player)
    );
}

function updateScoreboard() {
    scoreX.textContent = scores.X;
    scoreO.textContent = scores.O;
}

function resetBoard() {
    board.fill("");
    boxes.forEach(box => {
        box.textContent = "";
        box.classList.remove("x", "o");
    });
    currentPlayer = "X";
}

boxes.forEach(box => box.addEventListener("click", handleClick));
resetButton.addEventListener("click", resetBoard);
