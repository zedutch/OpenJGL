function Screen(canvas, resolution) {
    
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new InvalidArgumentError("canvas", "Invalid canvas object passed: " + canvas);
    }
    
    this.size = new Vector2(canvas.width, canvas.height);
    
    if ( !(resolution instanceof Vector2) ) {
        this.resolution = this.size;
    } else {
        this.resolution = resolution;
    }

    this.context = canvas.getContext("2d");

    Log.info("Screen initialized. Canvas Size: " + this.size + " Resolution: " + this.resolution, this);
}

Screen.prototype.toString = function () {
    return "Screen"
};

Screen.prototype.render = function (image, position, size) {
    this.context.drawImage(image, position.x, position.y, size.x, size.y);
};

Screen.prototype.clear = function () {
    this.context.clearRect(0, 0, this.size.x, this.size.y);
}