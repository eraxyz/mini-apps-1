import Column from './components/column.jsx';
import update from 'immutability-helper';
import checkWin from './connectFourLogic.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width || 7,
            height: this.props.height || 6,
            board: [],
            currentPlayer: 1,
            piecesPlayed: 0
        };
    }

    boardCreator() {
        const newBoard = [];
        for (let i = 0; i < this.state.width; i++) {
            let columnArray = new Array(this.state.height);
            newBoard.push(columnArray.fill(0));
        }
        this.setState({
            board: newBoard
        });
    };

    componentWillMount() {
        this.boardCreator();
    };

    getNextPlayer() {
        let player = (this.state.currentPlayer === 1) ? 2 : 1;
        return player;  
    }

    handleAddPiece(xCoordinate, e) {
        let player = this.state.currentPlayer;
        let i = this.state.board[xCoordinate].lastIndexOf(0);
        
        if (i !== -1)    
        this.setState({
            board: update(this.state.board, {[xCoordinate]: {[i]: {$set: player}}}),
            currentPlayer: this.getNextPlayer(),
            piecesPlayed: 1 + this.state.piecesPlayed
        }, () => {
            if (checkWin(xCoordinate, i, this.state.board, player)) 
            this.handleWin(player);
        
            if (this.state.piecesPlayed === this.state.width * this.state.height)
            this.handleTie(player);   
        });
    };

    handleWin(player) {
        if (confirm(`Player ${player} is the winner! \nPlay again?`))
            this.resetGame(player);
    }

    handleTie(player) {
        if (confirm(`Tie game! \nPlay again?`))
            this.resetGame(player);
    }

    resetGame(player) {
        this.setState({
            currentPlayer: player,
            piecesPlayed: 0
        });
        this.boardCreator();
    }

    render() {
        return (
        <div className='board'>
            {this.state.board.map((column, index) => 
                <Column xPosition={index} 
                        currentColumn={this.state.board[index]}
                        addPiece={this.handleAddPiece.bind(this, index)}/>)}
        </div>)
    };
}

ReactDOM.render(<Board />, document.getElementsByClassName('board')[0]);
