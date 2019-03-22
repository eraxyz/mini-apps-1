export default class Piece extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        if (this.props.player === 1) {
            return <div className="player1" id={this.props.yPosition}></div>
        } else if (this.props.player === 2) {
            return <div className="player2" id={this.props.yPosition}></div>
        } else if (this.props.player === 0) {
            return <div className="empty" id={this.props.yPosition}></div>
        } else {
            console.log('how?');
            return null;
        }
    };
}