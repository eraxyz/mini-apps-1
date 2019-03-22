// describe is not defined??
// Need to comment out export default in connectFourLogic.js to get it to work

// var describe = require('mocha').describe;
// var checkRow = require('../src/connectFourLogic.js').checkRow;


(function() {

    describe('Connect Four win conditions', function() {


        it('should end the game if there are 4 pieces of the same color horizontally', function() {
            let board = [[0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 1], 
                        [0, 0, 0, 0, 0, 1], 
                        [0, 0, 0, 0, 0, 1], 
                        [0, 0, 0, 0, 0, 1], 
                        [0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0]];
            expect(checkRow(5, board, 1).to.equal(true));
        });

        it('should end the game if there are 4 pieces of the same color vertically', function() {
            let board = [[0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0], 
                        [0, 0, 1, 1, 1, 1], 
                        [0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0]];
            expect(checkRow(4, board, 1).to.equal(true));
        });

        it('should end the game if there are 4 pieces of the same color diagonally', function() {
            let board = [[0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0], 
                        [0, 0, 1, 0, 0, 0], 
                        [0, 0, 0, 1, 0, 0], 
                        [0, 0, 0, 0, 1, 0], 
                        [0, 0, 0, 0, 0, 1]];
            expect(checkMajorDiag(6, 5, board, 1).to.equal(true));
            let board = [[0, 0, 0, 0, 0, 2], 
                        [0, 0, 0, 0, 2, 0], 
                        [0, 0, 0, 2, 0, 0], 
                        [0, 0, 2, 0, 0, 0], 
                        [0, 0, 1, 0, 0, 0], 
                        [0, 0, 0, 1, 0, 0], 
                        [0, 0, 0, 0, 1, 0], 
                        [0, 0, 0, 0, 0, 1]];
            expect(checkMinorDiag(0, 5, board, 2).to.equal(true));
        });


    });

})()