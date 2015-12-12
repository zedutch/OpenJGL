function Button(position, size, background, text, textSize, textColour, font) {
    "use strict";

    var colBody = new CollisionBody(size);
    var isColour = (background.indexOf('#') === 0);

    if (typeof background === 'undefined') {
        background = "#FFF";
        isColour = true;
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
    this.onclick = undefined;

    Entity.call(this, position, colBody, bgSprite);

    Log.info("New button created at " + this.position + " with text: " + this.text,
        this);

    this.render = function (screen) {

        // Make sure there's at least a 2px border either side of the button text.
        if (this.textWidth === undefined) {
            var w = screen.getTextWidth(this.text, this.textSize, this.font);
            if (w > this.collisionBody.size.x - 4) {
                w = this.collisionBody.size.x - 4;
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
            screen.renderFilledRect(this.position,
                this.collisionBody.size,
                this.bgColour);
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
    };

    this.willAppear = function () {
        _ojglGUIElements.push(this);
    }

    this.willDisappear = function () {
        _ojglGUIElements.remove(this);
    }
}

// Subclass the Entity class.
Button.prototype = new Entity();

Button.prototype.toString = function () {
    "use strict";

    return "Button { " + this.text + " }";
};