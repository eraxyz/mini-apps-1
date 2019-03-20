class Model {

    constructor() {
        this.state = {
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
        this.state.board[target.classList[2]] = (this.state.playerOne) ? this.state.first : this.state.second;
        this.state.playerOne = !this.state.playerOne;
        this.state.win = (Object.keys(this.state.board).length > 4) ? (this.checkRows(target.classList[0].split('row')[1]) || this.checkColumns(target.classList[1].split('column')[1]) || this.checkDiags()) : false;
    };

    checkRows(row) {return (this.state.board['square' + row] === this.state.board['square' + (+row + 1)] && this.state.board['square' + (+row + 2)] === this.state.board['square' + row])};
    
    checkColumns(column) {return (this.state.board['square' + column] === this.state.board['square' + (+column + 3)] && this.state.board['square' + column] === this.state.board['square' + (+column + 6)])};
    
    checkDiags() {return (this.state.board['square1'] === this.state.board['square5'] && this.state.board['square9'] === this.state.board['square5'] && this.state.board['square5']) || (this.state.board['square3'] === this.state.board['square5'] && this.state.board['square7'] === this.state.board['square5'] && this.state.board['square5'])};
    
    endGame(reset, update) {
        this.state.winner = (this.state.playerOne) ? this.state.second : this.state.first;
        if (this.state.win) update();
        Object.keys(this.state.board).length === 9 && !this.state.win ? confirm("Tie game! \nPlay new game?") ? reset(true) : reset(false) : confirm(`${this.state.winner} is the winner! \nPlay new game?`) ? reset(true) : reset(false);  
    };
    
}