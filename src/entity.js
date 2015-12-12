function Entity(position, collisionBody, sprite) {
    this.position = position;
    this.collisionBody = collisionBody;
    this.sprite = sprite;

    this.render = function (screen) {
        this.sprite.render(screen, this.position);
    };

    this.getCollisionWidth = function () {
        return this.collisionBody.size.x;
    };

    this.getCollisionHeight = function () {
        return this.collisionBody.size.y;
    };

    this.containsPoint = function (p) {
        return p.x >= this.position.x && p.x <= this.position.x + this.getCollisionWidth() && p.y >= this.position.y && p.y <= this.position.y + this.getCollisionHeight();

    };
}