function CollisionBody(size) {
    "use strict";
    this.size = size;
    Log.info(this.size + " collision body created", this);
}

CollisionBody.prototype.toString = function () {
    "use strict";

    return "CollisionBody { " + this.size + " }";
};