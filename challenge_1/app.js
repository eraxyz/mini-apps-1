
class App {

    constructor() {
        this.controller = new Controller();
        this.model = new Model();
        this.view = new View();
    }

    initialize () {
        this.controller.listener();
    }

}

// const app = new App();
// app.initialize();
// let controller = new Controller;
// controller.listener();


/// Event Listener ///
// document.addEventListener('click', (event) => (event.target.classList[0] === 'restart' ? reset(true) : (event.target.classList[0] === 'submit') ? setPlayers() : (event.target.classList.length === 3) ? addPlay(event.target) : null));

/// DOM Manipultation ///
// const addPlay = (target) => {
//     let invalidPlay = false;
//     (target.textContent === "") ? (state.playerOne) ? target.textContent = state.first : target.textContent = state.second : invalidPlay = true;
//     if (!invalidPlay) checkForWin(target);
//     if (state.win || Object.keys(state.board).length === 9) endGame(); 
// }

// const reset = (bool) => {
//     if (bool) {
//         state.first = (state.winner === null) ? 'X' : state.winner;
//         state.second = (state.winner === null) ? 'O' : (state.winner === 'X') ? 'O' : 'X'; 
//         state.playerOne = true;
//         for (let key in state.board) delete state.board[key];
//         const table = document.getElementsByClassName('tictac')[0].children;
//         for (let i = 0; i < table.length; i++) table[i].textContent = "";
//     }
// }

// const rotator = () => {
//     state.rotation += 90;
//     document.getElementsByClassName('tictac')[0].style.transform = `rotate(${state.rotation}deg)`;
// };

// const updateScore = () => (document.getElementsByClassName(state.winner)[0].textContent = ++state.scoreBoard[state.winner]);

// const setPlayers = () => (document.getElementsByClassName('players')[0].textContent = `X (${document.getElementsByClassName('names')[0].value}) vs O (${document.getElementsByClassName('names')[1].value})`);

/// Checking for win ///
// const checkForWin = (target) => {
//     state.board[target.classList[2]] = (state.playerOne) ? state.first : state.second;
//     state.playerOne = !state.playerOne;
//     state.win = (Object.keys(state.board).length > 4) ? (checkRows(target.classList[0].split('row')[1]) || checkColumns(target.classList[1].split('column')[1]) || checkDiags()) : false;
//     rotator();
// }

// const checkRows = (row) => (
//     (state.board['square' + row] === state.board['square' + (+row + 1)] && state.board['square' + (+row + 2)] === state.board['square' + row])
// );

// const checkColumns = (column) => (
//     (state.board['square' + column] === state.board['square' + (+column + 3)] && state.board['square' + column] === state.board['square' + (+column + 6)])
// );

// const checkDiags = () => (
//     (state.board['square1'] === state.board['square5'] && state.board['square9'] === state.board['square5'] && state.board['square5']) || (state.board['square3'] === state.board['square5'] && state.board['square7'] === state.board['square5'] && state.board['square5'])
// );

// const endGame = () => {
//     state.winner = (state.playerOne) ? state.second : state.first;
//     if (state.win) updateScore();
//     Object.keys(state.board).length === 9 && !state.win ? confirm("Tie game! \nPlay new game?") ? reset(true) : reset(false) : confirm(`${state.winner} is the winner! \nPlay new game?`) ? reset(true) : reset(false);  
// }

