function Button(position, size, background, text, textSize, textColour, font, borderColour, borderWidth) {
    "use strict";

    var colBody = new CollisionBody(size);
    var isColour = (background.indexOf('#') === 0);

    if (typeof background === 'undefined') {
        background = "#FFF";
        isColour = true;
    }

    if (typeof borderWidth !== 'number' || borderWidth < 0) {
        borderWidth = 0;
    }

    var bgSprite = isColour ? null : new Sprite(background, function () {
        bgSprite.image.style.width = size.x;
        bgSprite.image.style.height = size.y;
    });

    this.bgColour = isColour ? background : null;
    this.text = text;
    this.textSize = textSize;
    this.textColour = textColour;
    this.font = font;
    this.borderColour = borderColour;
    this.borderWidth = borderWidth;
    this.onclick = undefined;

    Entity.call(this, position, colBody, bgSprite);

    Log.info("New button created at " + this.position + " with text: " + this.text,
        this);

    this.render = function (screen, alpha) {
        var oldAlpha = screen.alpha;
        if (typeof alpha === 'number' && alpha >= 0 && alpha <= 1) {
            screen.alpha = alpha;
        }

        // Make sure there's at least a 2px border either side of the button text.
        if (this.textWidth === undefined) {
            var w = screen.getTextWidth(this.text, this.textSize, this.font);
            if (w > this.collisionBody.size.x - 4 - 2 * this.borderWidth) {
                w = this.collisionBody.size.x - 4 - 2 * this.borderWidth;
            }
            this.textWidth = w;
        }

        // Center the text inside the button.
        if (this.textMargin === undefined) {
            this.textMargin = new Vector2();
            var h = screen.getTextHeight(this.text, this.textSize, this.font);
            this.textMargin.y = (this.collisionBody.size.y + h / 2) / 2;
            this.textMargin.x = (this.collisionBody.size.x - this.textWidth) / 2;
        }

        // Render the background.
        if (this.sprite) {
            this.sprite.render(screen, this.position);
        } else {
            var pos = this.position.copy().add(
                new Vector2(this.borderWidth / 2, this.borderWidth / 2));
            var size = this.collisionBody.size.copy().add(
                new Vector2(-this.borderWidth, -this.borderWidth));
            screen.renderFilledRect(pos,
                size,
                this.bgColour);
        }

        // Render the border.
        if (this.borderWidth > 0) {
            screen.renderRect(this.position,
                this.collisionBody.size,
                this.borderWidth,
                this.borderColour);
        }

        // Render the text.
        if (this.text) {
            var textPosition = this.position.copy().add(this.textMargin);

            screen.renderText(this.text,
                textPosition,
                this.textSize,
                this.textColour,
                this.font,
                this.textWidth);
        }

        screen.alpha = oldAlpha;
    };

    this.willAppear = function () {
        _ojglGUIElements.push(this);
    }

    this.willDisappear = function () {
        _ojglGUIElements.remove(this);
    }
}

// Subclass the Entity class.
Button.prototype = Entity.prototype;

Button.prototype.toString = function () {
    "use strict";

    return "Button { " + this.text + " }";
};