function Screen(canvas, resolution) {
    
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new InvalidArgumentError("canvas", "Invalid canvas object passed: " + canvas);
    }
    
    this.size = new Vector2(canvas.width, canvas.height);
    this.font = "20px HelveticaNeue Liberation Roboto Sans";
    this.fontColor = "#FFF";
    
    if ( !(resolution instanceof Vector2) ) {
        this.resolution = this.size;
    } else {
        this.resolution = resolution;
    }

    var context = canvas.getContext("2d");

    Log.info("Screen initialized. Canvas Size: " + this.size + " Resolution: " + this.resolution, this);
    
    this.render = function (image, position, size) {
        context.drawImage(image, position.x, position.y, size.x, size.y);
    };

    this.clear = function () {
        context.clearRect(0, 0, this.size.x, this.size.y);
    };

    this.renderText = function(text, position, colour, font) {
        if (typeof font === 'undefined') {
            font = this.font;
        } else if (typeof font !== 'string') {
            throw new InvalidArgumentError("font", "Fonts have to be strings containing both the font size and one or more font families. Received: " + font);
        }

        if (typeof colour === 'undefined') {
            colour = this.fontColor;
        } else if (typeof colour !== 'string') {
            throw new InvalidArgumentError("colour", "Colours have to be strings. Received: " + colour);
        }

        if ( typeof position === 'undefined') {
            position = new Vector2();
        } else if ( !(position instanceof Vector2) ) {
            throw new InvalidArgumentError("position", "Position should be a Vector2. Received: " + position);
        }

        context.font = font;
        context.fillStyle = colour;
        context.fillText(text, position.x, position.y);
    };
}

Screen.prototype.toString = function () {
    return "Screen"
};