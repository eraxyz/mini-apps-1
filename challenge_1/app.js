
/// Variables ///
const state = {
    board = {},
    scoreBoard = {'X': 0, 'O': 0},
    playerOne = true, 
    win = false, 
    winner = null, 
    first = 'X', 
    second = 'O' 
}; 

/// Event Listener ///
document.addEventListener('click', (event) => (event.target.classList[0] === 'restart' ? reset(true) : (event.target.classList[0] === 'submit') ? setPlayers() : (event.target.classList.length === 3) ? addPlay(event.target) : null));

/// DOM Manipultation ///
const addPlay = (target) => {
    let invalidPlay = false;
    (target.textContent === "") ? (playerOne) ? target.textContent = first : target.textContent = second : invalidPlay = true;
    if (!invalidPlay) checkForWin(target);
    if (win || Object.keys(state.board).length === 9) endGame(); 
}

const reset = (bool) => {
    if (bool) {
        first = (winner === null) ? 'X' : winner;
        second = (winner === null) ? 'O' : (winner === 'X') ? 'O' : 'X'; 
        playerOne = true;
        for (let key in state.board) delete state.board[key];
        const table = document.getElementsByClassName('tictac')[0].children;
        for (let i = 0; i < table.length; i++) table[i].textContent = "";
    }
}

const updateScore = (winner) => (document.getElementsByClassName(winner)[0].textContent = ++scoreBoard[winner]);

const setPlayers = () => (document.getElementsByClassName('players')[0].textContent = `X (${document.getElementsByClassName('names')[0].value}) vs O (${document.getElementsByClassName('names')[1].value})`);

/// Checking for win ///
const checkForWin = (target) => {
    state.board[target.classList[2]] = (playerOne) ? first : second;
    playerOne = !playerOne;
    win = (Object.keys(state.board).length > 4) ? (checkRows(target.classList[0].split('row')[1]) || checkColumns(target.classList[1].split('column')[1]) || checkDiags()) : false;
}

const checkRows = (row) => (
    (state.board['square' + row] === state.board['square' + (+row + 1)] && state.board['square' + (+row + 2)] === state.board['square' + row])
);

const checkColumns = (column) => (
    (state.board['square' + column] === state.board['square' + (+column + 3)] && state.board['square' + column] === state.board['square' + (+column + 6)])
);

const checkDiags = () => (
    (state.board['square1'] === state.board['square5'] && state.board['square9'] === state.board['square5'] && state.board['square5']) || (state.board['square3'] === state.board['square5'] && state.board['square7'] === state.board['square5'] && state.board['square5'])
);

const endGame = () => {
    winner = (playerOne) ? second : first;
    if (win) updateScore(winner);
    Object.keys(state.board).length === 9 && !win ? confirm("Tie game! \nPlay new game?") ? reset(true) : reset(false) : confirm(`${winner} is the winner! \nPlay new game?`) ? reset(true) : reset(false);  
}

