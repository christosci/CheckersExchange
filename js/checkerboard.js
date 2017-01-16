var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var whiteSquares = []; // stores x,y values of white squares and color of pieces over them
var pieceRadius = 26; // the radius of each piece to be drawn

drawCheckerboard();
drawStartingPieces();


function drawCheckerboard() {
    for (var row=0; row<8; row++) {
       for (var col=0; col<8; col++) {

            var xVal = col*80;
            var yVal = row*80;

            if (row % 2 == col % 2) {
                c.fillStyle = '#888888'; // white squares
                // store the center coordinates of each white square
                whiteSquares.push({x: xVal+40, y: yVal+40, color: null});
            }
            else {
                c.fillStyle = '#222222'; // black squares
            }

            c.fillRect(xVal, yVal, 80, 80);
       }
    }
}

function drawStartingPieces() {
    for (var i=0; i<12; i++) {
        drawPiece(i, 'green');
        whiteSquares[i].color = 'green';
    }

    for (i=20; i<32; i++) {
        drawPiece(i, 'blue');
        whiteSquares[i].color = 'blue';
    }
}

function drawPiece(i, color) {
    c.beginPath();
    c.fillStyle = color == 'blue' ? '#17157C' : '#157C4A';
    c.arc(whiteSquares[i].x, whiteSquares[i].y, pieceRadius, 0, 2 * Math.PI);
    c.fill();
    c.lineWidth = 2;
    c.strokeStyle = '#242424';
    c.stroke();
}