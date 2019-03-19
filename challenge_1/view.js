class View {

    constructor() {
        this.model = new Model();
    };

    addPlay(target) {
        let invalidPlay = false;
        (target.textContent === "") ? (this.model.state.playerOne) ? target.textContent = this.model.state.first : target.textContent = this.model.state.second : invalidPlay = true;
        if (!invalidPlay) {
            this.model.checkForWin(target);
            this.rotator();
        }
        if (this.model.state.win || Object.keys(this.model.state.board).length === 9) this.model.endGame(this.reset.bind(this), this.updateScore.bind(this)); 
    };
    
    reset(bool) {
        if (bool) {
            this.model.state.first = (this.model.state.winner === null) ? 'X' : this.model.state.winner;
            this.model.state.second = (this.model.state.winner === null) ? 'O' : (this.model.state.winner === 'X') ? 'O' : 'X'; 
            this.model.state.playerOne = true;
            for (let key in this.model.state.board) delete this.model.state.board[key];
            const table = document.getElementsByClassName('tictac')[0].children;
            for (let i = 0; i < table.length; i++) table[i].textContent = "";
        }
    };
    
    rotator() {
        this.model.state.rotation += 90;
        document.getElementsByClassName('tictac')[0].style.transform = `rotate(${this.model.state.rotation}deg)`;
    };
    
    updateScore() {
        (document.getElementsByClassName(this.model.state.winner)[0].textContent = ++this.model.state.scoreBoard[this.model.state.winner]);
    };

    setPlayers() {
        (document.getElementsByClassName('players')[0].textContent = `X (${document.getElementsByClassName('names')[0].value}) vs O (${document.getElementsByClassName('names')[1].value})`)
    };

    
}