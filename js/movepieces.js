var selectedPiece = {whiteSquareIndex: null, color: null};
var colorTurn = 'blue';


// select piece to be moved
function setSelectedPiece(e) {
    if (selectedPiece.color === null) {
        for (var i=0; i<32; i++) {
            if (isCursorOverWhiteSquare(i, e) && whiteSquares[i].color === colorTurn) {
                selectedPiece = {whiteSquareIndex: i, color: whiteSquares[i].color};
            }
        }
    }
    else {moveSelectedPiece(e);}
}

function moveSelectedPiece(e) {
    for (var i=0; i<32; i++) {
        // check if a legal destination square was selected first
        if (isCursorOverWhiteSquare(i, e) && whiteSquares[i].color === null && 
            Math.abs(whiteSquares[selectedPiece.whiteSquareIndex].x - whiteSquares[i].x) == 80 &&
            isDestinationSquareAhead(i)) 
            {
                whiteSquares[selectedPiece.whiteSquareIndex].color = null; // set starting white square to empty
                whiteSquares[i].color = selectedPiece.color; // set color of piece for the destination square
                switchColorTurn();
                drawMovedPieces();
                break;
            }
    }
    selectedPiece = {whiteSquareIndex: null, color: null};
}

// clear canvas and redraw everything
function drawMovedPieces() {
    c.clearRect(0, 0, c.width, c.height);
    drawCheckerboard();
    for (var i=0; i<32; i++) {
        if (whiteSquares[i].color !== null) {
            drawPiece(i, whiteSquares[i].color);
        }
    }
}

function isCursorOverWhiteSquare(i, e) {
    var cursorPos = getMousePos(e);
    if (Math.abs(whiteSquares[i].x - cursorPos.x) <= 40 && Math.abs(whiteSquares[i].y - cursorPos.y) <= 40) 
        return true;
}

function isDestinationSquareAhead(i) {
    var yDifference = whiteSquares[selectedPiece.whiteSquareIndex].y - whiteSquares[i].y;
    if ((yDifference == 80 && colorTurn == 'blue') || (yDifference == -80 && colorTurn == 'green')) 
        return true;
}

function switchColorTurn() {
    colorTurn = colorTurn == 'blue' ? 'green' : 'blue';
    document.getElementById('colorTurn').innerHTML = colorTurn;
}