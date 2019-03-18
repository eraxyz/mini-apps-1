
/// Variables ///
const board = {};
let playerOne = true, win = false;

/// Event Listener ///
document.addEventListener('click', (event) => {
    event.target.tagName === 'BUTTON' ? reset(true) : addPlay(event.target);
});

/// DOM Manipultation ///
const addPlay = (target) => {
    let invalidPlay = false;
    (target.textContent === "") ? (playerOne) ? target.textContent = 'X' : target.textContent = 'O' : invalidPlay = true;
    if (!invalidPlay) checkForWin(target);
    if (win || Object.keys(board).length === 9) endGame(); 
}

const reset = (bool) => {
    if (bool) {
        playerOne = true;
        for (let key in board) delete board[key];
        const table = document.getElementsByClassName('tictac')[0].children;
        for (let i = 0; i < table.length; i++) {
            table[i].textContent = "";
        }
    }
}

/// Checking for win ///
const checkForWin = (target) => {
    board[target.classList[2]] = (playerOne) ? 'X' : 'O';
    playerOne = !playerOne;
    win = (Object.keys(board).length > 4) ? (checkRows(target.classList[0].split('row')[1]) || checkColumns(target.classList[1].split('column')[1]) || checkDiags()) : false;
}

const checkRows = (row) => {
    return (board['square' + row] === board['square' + (+row + 1)] && board['square' + (+row + 2)] === board['square' + row]);
}

const checkColumns = (column) => {
    return (board['square' + column] === board['square' + (+column + 1)] && board['square' + column] === board['square' + (+column + 2)]);
}

const checkDiags = () => {
    return (board['square1'] === board['square5'] && board['square9'] === board['square5'] && board['square5'] !== "") || (board['square3'] === board['square5'] && board['square7'] === board['square5'] && board['square5'] !== "");
}

const endGame = () => {
    Object.keys(board).length === 9 && !win ? confirm("Tie game! \n Play new game?") ? reset(true) : reset(false) : confirm("Winner! \n Play new game?") ? reset(true) : reset(false);  
}

