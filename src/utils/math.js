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

Vector2.prototype.add = function(v) {
    if ( !(v instanceof Vector2) ) {
        throw new InvalidArgumentError("v", "You can only add a vector to another vector! The object passed was: " + v);
    }
    
    this.x += v.x;
    this.y += v.y;
}

Vector2.prototype.toString = function() {
    return "[" + this.x +  ", " + this.y + "]";
}