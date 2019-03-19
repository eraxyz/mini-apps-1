class Model extends App{

    constructor() {
        super();
        const state = {
            board: {},
            scoreBoard: {'X': 0, 'O': 0},
            playerOne: true, 
            win: false, 
            winner: null, 
            first: 'X', 
            second: 'O', 
            rotation: 0
        }
    };

    checkForWin(target) {
        Model.state.board[target.classList[2]] = (Model.state.playerOne) ? Model.state.first : Model.state.second;
        Model.state.playerOne = !Model.state.playerOne;
        Model.state.win = (Object.keys(Model.state.board).length > 4) ? (Model.checkRows(target.classList[0].split('row')[1]) || Model.checkColumns(target.classList[1].split('column')[1]) || Model.checkDiags()) : false;
        View.rotator();
    };

    checkRows(row) {
        (Model.state.board['square' + row] === Model.state.board['square' + (+row + 1)] && Model.state.board['square' + (+row + 2)] === Model.state.board['square' + row])
    };
    
    checkColumns(column) {
        (Model.state.board['square' + column] === Model.state.board['square' + (+column + 3)] && Model.state.board['square' + column] === Model.state.board['square' + (+column + 6)])
    };
    
    checkDiags() {
        (Model.state.board['square1'] === Model.state.board['square5'] && Model.state.board['square9'] === Model.state.board['square5'] && Model.state.board['square5']) || (Model.state.board['square3'] === Model.state.board['square5'] && Model.state.board['square7'] === Model.state.board['square5'] && Model.state.board['square5'])
    };
    
    endGame() {
        Model.state.winner = (Model.state.playerOne) ? Model.state.second : Model.state.first;
        if (Model.state.win) View.updateScore();
        Object.keys(Model.state.board).length === 9 && !Model.state.win ? confirm("Tie game! \nPlay new game?") ? reset(true) : reset(false) : confirm(`${Model.state.winner} is the winner! \nPlay new game?`) ? reset(true) : reset(false);  
    };
    
}