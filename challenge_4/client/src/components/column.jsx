import Piece from './piece.jsx'

export default class Column extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className='column' id={this.props.xPosition} onClick={this.props.addPiece}>
                {this.props.currentColumn.map((value, index) => {
                    switch (value) {
                        case 1:
                            return <Piece yPosition={index} player={1}/>
                        case 2:
                            return <Piece yPosition={index} player={2}/>
                        default:
                            return <Piece yPosition={index} player={0}/>
                    }
                })}
            </div>);
    };
}