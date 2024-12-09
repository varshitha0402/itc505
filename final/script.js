const gameBoard = document.getElementById("game-board");
let rows, cols;

// Function to initialize the game board
function initializeBoard(level) {
    rows = level === "easy" ? 3 : level === "medium" ? 5 : 7;
    cols = rows;

    gameBoard.innerHTML = ""; // Clear the board
    gameBoard.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    gameBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement("div");
        square.classList.add("square", "is-off");
        square.addEventListener("click", () => toggleSquare(i));
        gameBoard.appendChild(square);
    }

    randomizeBoard(level); // Make the board solvable
}

// Function to toggle a square and its neighbors
function toggleSquare(index) {
    const squares = document.querySelectorAll(".square");
    const toggle = (idx) => {
        if (idx >= 0 && idx < rows * cols) {
            squares[idx].classList.toggle("is-off");
        }
    };

    toggle(index);
    if (index % cols !== 0) toggle(index - 1); // Left
    if ((index + 1) % cols !== 0) toggle(index + 1); // Right
    toggle(index - cols); // Above
    toggle(index + cols); // Below

    checkWin();
}

// Function to check if the player has won
function checkWin() {
    const squares = document.querySelectorAll(".square");
    const allOff = Array.from(squares).every((sq) => sq.classList.contains("is-off"));
    if (allOff) {
        setTimeout(() => {
            alert("Congratulations! You won the game. Try a new level or reset to play again.");
        }, 300);
    }
}

// Function to randomize the board with fewer toggles for simplicity
function randomizeBoard(level) {
    const squares = document.querySelectorAll(".square");
    const toggles = level === "easy" ? 2 : level === "medium" ? 5 : 8;

    for (let i = 0; i < toggles; i++) {
        const randomIndex = Math.floor(Math.random() * (rows * cols));
        toggleSquare(randomIndex); // Simulate a click
    }
}

// Function to set the game level
function setLevel(level) {
    initializeBoard(level);
}

// Function to reset the current level
function resetGame() {
    const currentLevel = rows === 3 ? "easy" : rows === 5 ? "medium" : "hard";
    setLevel(currentLevel);
}

// Start the game at Easy level
setLevel("easy");
