// Returns Secant of n
Math.sec = function(n) {
    if (typeof n != "number") return NaN;
    return 1 / this.cos(n)
}

// Returns Cosecant of n
Math.cosec = function(n) {
    if (typeof n != "number") return NaN;
    return 1 / this.sin(n);
}

// Returns Cotangent of n
Math.cotan = function(n) {
    if (typeof n != "number") return NaN;
    return 1 / this.tan(n);
}

// Shorter Version of querySelector
HTMLDocument.prototype.select = document.querySelector.bind(document);
HTMLDocument.prototype.selectAll = document.querySelectorAll.bind(document);
const doc = document;

// Canvas Shortcut
HTMLCanvasElement.prototype.ctx = function() {
    return this.getContext("2d");
}

CanvasRenderingContext2D.prototype.fillArc = function(x, y, r, sa, ea, ac) {
    this.beginPath();
    this.arc(x, y, r, sa, ea, ac);
    this.fill();
}

CanvasRenderingContext2D.prototype.strokeArc = function(x, y, r, sa, ea, ac) {
    this.beginPath();
    this.arc(x, y, r, sa, ea, ac);
    this.stroke();
}

CanvasRenderingContext2D.prototype.circ = function(x, y, r) {
    this.arc(x + (r / 2), y + (r / 2), r, 0, Math.PI * 2);
}

CanvasRenderingContext2D.prototype.fillCirc = function(x, y, r) {
    this.beginPath();
    this.arc(x + (r / 2), y + (r / 2), r, 0, Math.PI * 2);
    this.fill();
}

CanvasRenderingContext2D.prototype.strokeCirc = function(x, y, r) {
    this.beginPath();
    this.arc(x + (r / 2), y + (r / 2), r, 0, Math.PI * 2);
    this.stroke();
}

CanvasRenderingContext2D.prototype.oval = function(x, y, rx, ry, r) {
    this.ellipse(x + (rx / 2), y + (ry / 2), rx, ry, r, 0, Math.PI * 2)
}

CanvasRenderingContext2D.prototype.fillOval = function(x, y, rx, ry, r) {
    this.beginPath();
    this.ellipse(x + (rx / 2), y + (ry / 2), rx, ry, r, 0, Math.PI * 2);
    this.fill();
}

CanvasRenderingContext2D.prototype.strokeOval = function(x, y, rx, ry, r) {
    this.beginPath();
    this.ellipse(x + (rx / 2), y + (ry / 2), rx, ry, r, 0, Math.PI * 2);
    this.stroke();
}
