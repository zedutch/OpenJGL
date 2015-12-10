function Entity(position, collisionBody, sprite) {
    this.position = position;
    this.collisionBody = collisionBody;
    this.sprite = sprite;

    this.render = function (screen) {
        this.sprite.render(screen, this.position);
    }

    this.containsPoint = function (x, y) {
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    };
}