/**
 * Creates a new View.
 * This view will automatically add itself as a child to its parent,
 * if a parent is specified.
 * 
 * @constructor
 * @throws {InvalidArgumentError}
                                  If parent is neither a valid View, nor 'undefined'.
 * @param {View|undefined} parent The parent View of this View.
 */
function View(parent) {
    if ( parent !== undefined && !(parent instanceof View) ) {
        throw new InvalidArgumentError("parent", "You can only specify a View object as the parent of a new View object! The object passed was: " + parent);
    }
    
    this._parent   = parent;
    this._childViews = [];
    
    if (this._parent !== undefined) {
        this._parent.addChild(this);
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
    
    this._childViews.push(child);
};

/**
 * @returns {number} The number of children attached to this View.
 */
View.prototype.numberOfChildren = function () {
    return this._childViews.length;
};

/**
 * @returns {number} The total number of ancestors attached to this View.
 */
View.prototype.numberOfAncestors = function () {
    var ancestors = 0;
    
    for (var c in this._childViews) {
        ancestors += this._childViews[c].numberOfAncestors() + 1;
    }
    
    return ancestors;
}

/**
 * @returns {View[]} All children attached to this View.
 */
View.prototype.children = function () {
    return this._childViews.slice(0);
}

/**
 * @returns {View|undefined} The parent View of the current View.
 *                           Or undefined if this View has no parent.
 */
View.prototype.parent = function () {
    return this._parent;
}

/**
 * @override
 * @returns {string} The textual representation of this object.
 */
View.prototype.toString = function () {
    return "View { }"
};