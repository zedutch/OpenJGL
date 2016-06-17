/**
 * Creates a new 2-dimensional Vector.
 * 
 * @constructor
 * @param {number} x The x value of the new vector.
 * @param {number} y The y value of the new vector.
 */
function Vector2 (x, y) {
    if (typeof x === 'undefined') {
        x = 0;
    }
    if (typeof y === 'undefined') {
        y = 0;
    }
    
    this.x = x;
    this.y = y;
}

/**
 * Add another 2-dimensional Vector to the current one.
 * This modifies the current Vector.
 * 
 * @throws  {InvalidArgumentError}
 *                      If 'v' is not a valid Vector2 object.
 * @param   {Vector2} v The Vector to add to the current one.
 * @returns {Vector2}   The current Vector.
 */
Vector2.prototype.add = function (v) {
    if ( !(v instanceof Vector2) ) {
        throw new InvalidArgumentError("v", "You can only add a vector to another vector! The object passed was: " + v);
    }
    
    this.x += v.x;
    this.y += v.y;
    
    return this;
}

/**
 * Create a deep copy of the current Vector.
 * This is effectively a new Vector2 object, but with the
 * exact same attributes as the original Vector.
 * 
 * @returns {Vector2} A copy of the current Vector.
 */
Vector2.prototype.copy = function () {
    return new Vector2(this.x, this.y);
}

/**
 * @override
 * @returns {string} The textual representation of this Vector.
 */
Vector2.prototype.toString = function () {
    return "[" + this.x +  ", " + this.y + "]";
}