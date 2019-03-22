const checkNewBoard = (xPos, yPos, board, player) => {
    return (checkRow(yPos, board, player) ||
            checkColumn(board[xPos], player) ||
            checkMajorDiag(xPos, yPos, board, player) ||
            checkMinorDiag(xPos, yPos, board, player));
};

const checkRow = (yPos, board, player) => {
    let counter = 0;
    for (let i = 0; i < board.length; i++) {
        board[i][yPos] === player ? ++counter : counter = 0;
        if (counter === 4)
            return true;
    }
    return false;
};

const checkColumn = (column, player) => {
    let counter = 0;
    for (let i = column.length - 1; i >= 0; i--) {
        column[i] === player ? ++counter : counter = 0; 
        if (counter === 4) 
            return true;
    }
    return false;
};

const checkMajorDiag = (xPos, yPos, board, player) => {
    const width = board.length;
    const height = board[0].length;
    const diag = xPos - yPos;

    if (diag < -height + 4 || diag > width - 4 ) 
        return false;

    let counter = 0, i =0, j = 0;
        
    (diag < 0) ? j = -diag : i = diag;    

    for (; i < width && j < height; i++, j++) {
        (board[i][j] === player) 
            ? counter++ 
            : counter = 0;
        if (counter === 4) 
            return true;
    }
    return false;
};

const checkMinorDiag = (xPos, yPos, board, player) => {
    const width = board.length;
    const height = board[0].length;
    const diag = xPos + yPos;

    if (diag < 3 || diag > width + height - 5 ) 
        return false;

    let counter = 0, i = width-1, j = 0;
    
    (diag >= width) ? j = diag - width + 1 : i = diag; 

    for (; i >= 0 && j < height; i--, j++) {
        (board[i][j] === player) 
            ? counter++ 
            : counter = 0;
        if (counter === 4) return true;
    }
    return false;
};

export default checkNewBoard;