/**
 * Creates a new 2 dimensional Vector.
 * 
 * @constructor
 * @this {Circle}
 * @param {number} x The x value of the new vector.
 * @param {number} y The y value of the new vector.
 */
function Vector2(x, y) {
    if (typeof x === 'undefined') {
        x = 0;
    }
    if (typeof y === 'undefined') {
        y = 0;
    }
    
    this.x = x;
    this.y = y;
}

Vector2.prototype.toString = function() {
    return "[" + this.x +  ", " + this.y + "]";
}