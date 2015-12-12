function Screen(canvas, resolution) {
    "use strict";

    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new InvalidArgumentError("canvas", "Invalid canvas object passed: " + canvas);
    }

    this.size = new Vector2(canvas.width, canvas.height);
    this.font = "HelveticaNeue Liberation Roboto Sans";
    this.fontColor = "#FFF";
    this.fontSize = 20;
    this.alpha = 1.0;

    if (!(resolution instanceof Vector2)) {
        this.resolution = this.size;
    } else {
        this.resolution = resolution;
    }

    var context = canvas.getContext("2d");

    Log.info("Screen initialized. Canvas Size: " + this.size + " Resolution: " + this.resolution, this);

    this.render = function (image, position, size) {
        context.globalAlpha = this.alpha;
        context.drawImage(image, position.x, position.y, size.x, size.y);
    };

    this.clear = function () {
        context.save();

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.restore();
    };

    this.renderFilledRect = function (position, size, colour) {
        if (typeof colour === 'undefined') {
            colour = this.fontColor;
        } else if (typeof colour !== 'string') {
            throw new InvalidArgumentError("colour",
                "Colours have to be strings. Received: " + colour);
        }
        
        context.globalAlpha = this.alpha;

        context.fillStyle = colour;
        context.fillRect(position.x, position.y, size.x, size.y);
    };

    this.renderRect = function (position, size, width, colour) {
        
        if (typeof colour === 'undefined') {
            colour = this.fontColor;
        } else if (typeof colour !== 'string') {
            throw new InvalidArgumentError("colour",
                "Colours have to be strings. Received: " + colour);
        }

        if (typeof width === 'number' && width > 0) {
            context.lineWidth = width;
        }
        
        context.globalAlpha = this.alpha;

        context.strokeStyle = colour;
        context.beginPath();
        context.rect(position.x, position.y, size.x, size.y);
        context.closePath();
        context.stroke();
    };

    this.getTextWidth = function (text, size, font) {
        if (typeof font === 'undefined') {
            font = this.font;
        } else if (typeof font !== 'string') {
            throw new InvalidArgumentError("font", "Fonts have to be strings containing both the font size and one or more font families. Received: " + font);
        }

        if (typeof size === 'undefined') {
            size = this.fontSize;
        } else if (typeof size !== 'number') {
            throw new InvalidArgumentError("size", "size must be an integer. Received: " + size);
        }
        
        context.font = size + "px " + font;
        return context.measureText(text).width;
    }
    
    this.getTextHeight = function(text, size, font) {
        if (typeof size === 'undefined') {
            size = this.fontSize;
        } else if (typeof size !== 'number') {
            throw new InvalidArgumentError("size", "size must be an integer. Received: " + size);
        }
        
        return size;
    }

    this.renderText = function (text, position, size, colour, font, width) {
        if (typeof font === 'undefined') {
            font = this.font;
        } else if (typeof font !== 'string') {
            throw new InvalidArgumentError("font", "Fonts have to be strings containing both the font size and one or more font families. Received: " + font);
        }

        if (typeof size === 'undefined') {
            size = this.fontSize;
        } else if (typeof size !== 'number') {
            throw new InvalidArgumentError("size", "size must be a number. Received: " + size);
        }

        if (typeof colour === 'undefined') {
            colour = this.fontColor;
        } else if (typeof colour !== 'string') {
            throw new InvalidArgumentError("colour", "Colours have to be strings. Received: " + colour);
        }

        if (typeof position === 'undefined') {
            position = new Vector2();
        } else if (!(position instanceof Vector2)) {
            throw new InvalidArgumentError("position", "Position should be a Vector2. Received: " + position);
        }
        
        if (typeof width === 'undefined') {
            width = this.getTextWidth(text, size, font);
        } else if (typeof width !== 'number') {
            throw new InvalidArgumentError("width", "width must be a number. Received: " + width);
        }
        
        context.globalAlpha = this.alpha;

        context.font = size + "px " + font;
        context.fillStyle = colour;
        context.fillText(text, position.x, position.y, width);
    };

    this.addEventListener = function (event, callback) {
        canvas.addEventListener(event, callback);
    };

    this.setOnContextMenu = function (callback) {
        canvas.oncontextmenu = callback;
    };
}

Screen.prototype.toString = function () {
    "use strict";
    return "Screen";
};