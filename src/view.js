/**
 * Creates a new View.
 * This view will automatically add itself as a child to its parent,
 * if a parent is specified.
 * 
 * @constructor
 * @throws {InvalidArgumentError}
                        If parent is neither a valid View, nor 'undefined'.
 * @param {View} parent The parent View of this View.
 */
function View(parent) {
    if ( parent !== undefined && !(parent instanceof View) ) {
        throw new InvalidArgumentError("parent", "You can only specify a View object as the parent of a new View object! The object passed was: " + parent);
    }
    
    this.parent   = parent;
    this.children = [];
    
    if (this.parent !== undefined) {
        this.parent.addChild(this);
    }
}

/**
 * Add a new child View to this View.
 * 
 * @throws {InvalidArgumentError}
                       If child is not a valid View.
 * @param {View} child The child to add to this View.
 */
View.prototype.addChild = function (child) {
    if ( !(child instanceof View) ) {
        throw new InvalidArgumentError("child", "You can only add a View object as the child of another View object! The object passed was: " + child);
    }
    
    this.children.push(child);
};

/**
 * @returns {number} The number of children attached to this View.
 */
View.prototype.numberOfChildren = function () {
    return this.children.length;
};

/**
 * @override
 * @returns {string} The textual representation of this object.
 */
View.prototype.toString = function () {
    return "View { }"
};