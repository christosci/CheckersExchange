canvas.addEventListener('mousemove', setCursorStyle, false);

// set cursor style to pointer if hovering over an occupied square
function setCursorStyle(e) {
    var cursorPos = getMousePos(e);
    canvas.style.cursor = 'default';
    for (var i=0; i<32; i++) {
        if (Math.abs(whiteSquares[i].x - cursorPos.x) <= 40 && Math.abs(whiteSquares[i].y - cursorPos.y) <= 40 &&
        whiteSquares[i].color !== null) 
        {
            canvas.style.cursor = 'pointer';
            break;
        }
    }
}

function getMousePos(e)
{
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}