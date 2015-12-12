function CollisionBody(size) {
    "use strict";
    this.size = size;
}

CollisionBody.prototype.toString = function () {
    "use strict";

    return "CollisionBody { " + this.size + " }";
};