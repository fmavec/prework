var linestxt = document.getElementById("linestxt");
var linesbtn = document.getElementById("linesbtn");
linesbtn.addEventListener("click", drawByClick);
var color = "white"

var d = document.getElementById("draw");
var widthCanvas = d.width;
var lienzo = d.getContext("2d");

function drawingLines(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function drawByClick() {
    var linesUser = parseInt(linestxt.value);
    var l = 0
    var space = widthCanvas / linesUser;
    var yi, xf;

    while (l < linesUser) {
        yi = space * l;
        xf = space * (l + 1);
        drawingLines("white", 0, yi, xf, 300);
        l = l + 1; //l + 1 para evitar el infinite loop
    }

    for (l = 0; l < linesUser; l++) {
        yi = 10 * l;
        xf = 10 * (l + 1);
        drawingLines("white", 0, 300, yi, xf);
    }
}

//Codigo para teclado
keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

document.addEventListener("keyup", keyDraw);
var drawArea = document.getElementById("draw_area");
var lienzo = drawArea.getContext("2d");
var x = 150;
var y = 150;
var movement = 10;

drawingLinesByKeys(color, 149, 149, 151, 151, lienzo);

function drawingLinesByKeys(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}


function keyDraw(event) {

    switch (event.keyCode) {
        case keys.DOWN:
            drawingLinesByKeys(color, x, y, x, y + movement);
            break;
        case keys.UP:
            drawingLinesByKeys(color, x, y, x, y - movement);
            break;
        case keys.LEFT:
            drawingLinesByKeys(color, x, y, x - movement, y);
            break;
        case keys.RIGHT:
            drawingLinesByKeys(color, x, y, x, y + movement);
            break;
        default:
            console.log("Dando golpecito pam pam pam")
    }
}