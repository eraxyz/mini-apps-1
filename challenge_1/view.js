class View extends App{

    constructor() {
        super();
    };

    addPlay(target) {
        let invalidPlay = false;
        (target.textContent === "") ? (Model.state.playerOne) ? target.textContent = Model.state.first : target.textContent = Model.state.second : invalidPlay = true;
        if (!invalidPlay) Model.checkForWin(target);
        if (Model.state.win || Object.keys(Model.state.board).length === 9) Model.endGame(); 
    };
    
    reset(bool) {
        if (bool) {
            Model.state.first = (Model.state.winner === null) ? 'X' : Model.state.winner;
            Model.state.second = (Model.state.winner === null) ? 'O' : (Model.state.winner === 'X') ? 'O' : 'X'; 
            Model.state.playerOne = true;
            for (let key in Model.state.board) delete Model.state.board[key];
            const table = document.getElementsByClassName('tictac')[0].children;
            for (let i = 0; i < table.length; i++) table[i].textContent = "";
        }
    };
    
    rotator() {
        Model.state.rotation += 90;
        document.getElementsByClassName('tictac')[0].style.transform = `rotate(${Model.state.rotation}deg)`;
    };
    
    updateScore() {
        (document.getElementsByClassName(Model.state.winner)[0].textContent = ++Model.state.scoreBoard[Model.state.winner]);
    };

    setPlayers() {
        (document.getElementsByClassName('players')[0].textContent = `X (${document.getElementsByClassName('names')[0].value}) vs O (${document.getElementsByClassName('names')[1].value})`)
    };

    
}