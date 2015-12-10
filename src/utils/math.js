/**
 * Creates a new 2 dimensional Vector.
 * 
 * @constructor
 * @this {Circle}
 * @param {number} x The x value of the new vector.
 * @param {number} y The y value of the new vector.
 */
function Vector2(x, y) {
    this.x = x;
    this.y = y;
}

Vector2.prototype.toString = function() {
    return "[" + this.x +  ", " + this.y + "]";
}