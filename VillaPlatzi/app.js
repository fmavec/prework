var vm = document.getElementById("villaMavec");
var papel = vm.getContext("2d");

var fondo = {
    url: "tile.webp",
    cargaOk: false
}

var vaca = {
    url: "vaca.webp",
    cargaOk: false
}

var pollo = {
    url: "pollo.webp",
    cargaOk: false
}

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);
var cantidadv = aleatorio(1, 10)

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);
var cantidadp = aleatorio(1, 10)

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
};

function cargarVacas() {
    vaca.cargaOk = true;
    dibujar();
};

function cargarPollos() {
    pollo.cargaOk = true;
    dibujar();
};

function dibujar() {
    if (fondo.cargaOk) {
        papel.drawImage(fondo.objeto, 0, 0);
    }
    if (vaca.cargaOk) {
        for (var v = 0; v < cantidadv; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 50;
            var y = y * 50;
            papel.drawImage(vaca.objeto, x, y);
        }
    }
    if (pollo.cargaOk) {
        for (var p = 0; p < cantidadp; p++) {
            var xp = aleatorio(0, 10);
            var yp = aleatorio(0, 10);
            var xp = xp * 50;
            var yp = yp * 50;
            papel.drawImage(pollo.objeto, xp, yp);
        }
    }
}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}